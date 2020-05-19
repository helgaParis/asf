/****** What this router does:
 * 
 * The archive has the following file structure: 
 * one folder per language f-archive, e-archive, d-archive, 
 * which contains several files per year: 19-5 stands for the file number 5 from 2019
 * (The page content exists in several languages and may vary from language to language.)
 * 
 * The router defines the current page: whichever is the most recent page, targets[0], is the current page. 
 * The current page is called from the main menu and exists in three languages. 
 * It's a virtual page only, there is no separate file for it. 
 * actual, eactual, dactual are distinct routes for the current page.
 * 
 * The router then checks, if a called url exists in the list of targets = French files. 
 * If it's not in the French targets, it checks, if it exists in the English or German targets, each a map over the targets array. 
 * Otherwise an error function renders page 404 or 505
 * 
 * If an url is a valid target, the router renders the page and defines 
 * past and future, to allow to click through the pages with arrows on the navigation bar, which seemed the fastest way 
 * to navigate through a menu of over 80 links and increasing. It's a fast way for visitors just wanting 
 * to get a quick overview, not hunting for a specific event. 
 * Arriving on top, at the current page, the "future"-link has to stay on the same target. 
 * Therefore the current page (actuel) defines this "future" differently than the later pages.
 * 
 * Languages: we wanted to have a way to change languages on every page to result in getting the same page 
 * in the other language, not to be sent back to the start. 
 * Therefore the router defines a target (event) for every language (fevent, eevent, devent)
 *
 * The "message" on the German and English pages appears on pages which are not yet translated or not yet migrated
 * As the translation replaces the French texts on this pages, the message (p=message) is deleted on the frontend. 
 * 
 * Note: the call for event should always render the same file (for instance 19-5), but the url differs, 
 * if the call is coming from the French pages (19-5) or from the German or English pages (d19-5 or e19-5) 
 * Therefore "event" gets sometimes a letter added or the first letter sliced of. 
 *
 * Some meta-data is defined on this router file: the title, the canonical link, the keywords, which are imported from a seperate list.
 * The rel="alternate" hreflang meta data is defined on the template by using the fevent, eevent, devent variables 
 * Last feature: the router exports itself and also the function to know which is the current page. 
 * This is used by the site.js router to indicate it on site/index.
 * 
 *****/




'use strict';
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

let current;

router.get('/*/',function(req,res) {
    // 1. get the name of the archive page from the link clicked on nav-archive or typed in url or search
    // 2. if the page is not "actuel" check for keywords for that page on seperate module

    //targets = pages to showw (if called as archive/target)
    //file names: year-eventNumberThatYear, add most recent on top
    //current: to define the most recent as the page "actuel" on the main site
    const targets= [
                '20-3','20-2','20-1',
                '19-6','19-5','19-4','19-3','19-2','19-1',    '18-3','18-2','18-1',
                '17-2','17-1',   '16-3','16-2','16-1',  '15-2','15-1',   '14-3','14-2','14-1',
                '13-2', '13-1',   '12-4','12-3','12-2','12-1',  '11-4','11-3', '11-2', '11-1', 
                '10-7','10-6','10-5','10-4','10-3','10-2','10-1',   '09-9','09-8','09-7','09-6','09-5','09-4','09-3','09-2','09-1', 
                '08-4','08-3','08-2','08-1',  '07-8','07-7', '07-6', '07-5', '07-4', '07-3', '07-2', '07-1', 
                '06-13','06-12','06-11','06-10','06-9','06-8', '06-7','06-6','06-5','06-4','06-3','06-2','06-1',
                '05-11','05-10','05-9','05-8','05-7','05-6','05-5','05-4','05-3','05-2','05-1',
                '04-2', '04-1',  '01',  '00'  
    ];
    current=targets[0];
    let foundation=targets[targets.length-1]; //the first event ever, to avoid going further past

    const etargets = targets.map(x =>'e'+x);
    const ecurrent= etargets[0];
    const dtargets = targets.map(x =>'d'+x);
    const dcurrent=dtargets[0];

// define incoming request 
   let eventUrl= req.params[0] ;
   let event = path.basename(eventUrl);  
   let ev = event.toString();  //check if needed

   //define keywords for the requested page
   let keys = ''; // the final keywords, minimum defined here + specific from module kw
   let keyf = "association, artistes, expositions, galerie, évenements, artistes sans frontières, Paris, France";
   let keye = "association, artists, shows, gallery, events, artistes sans frontières, artists without borders, Paris, France";
   let keyd = "Verein, Künstler, Ausstellungen, Galerie, Veranstaltungeb, artistes sans frontières, Künstler ohne Grenzen, Paris, Frankreich";
   const kw = require('./keywords'); 
   const kwf = kw.keywordsF; //the French archive keyword table on the module keywords.js
   const kwe = kw.keywordsE; // .. English ..
   const kwd = kw.keywordsD; // .. German (deutsch) ..
   let kwi; //to define index of keywords in the keywords tables, kwi holds the filename of the page called

   // different variables to be sent to front
   let pageServed; let title; let message; let past; let future; let eevent; let fevent; let devent; let canon;

// Current news = last entry for the target list, form the default page, called actuel / eactual  dactual
// as those pages have ever changing content, they only have the keywords common to all pages
    
    if( 'actuel' === event )  {
        pageServed = 'f-archive/'+current;
        title ='Artistes sans Frontières - Actualités ';
        event = targets[0];
        past = targets[1];
        future = targets[0];
        eevent = 'eactuel';
        devent = 'dactuel';
        canon = "https://artistessansfrontieres.fr/archive/"+current;
        keys=keyf;
        }
    if( 'eactuel' === event ) {
        pageServed = 'e-archive/'+current;
        title = 'Artistes sans Frontières - News ';
        event =  etargets[0];
        past =  etargets[1];
        future =  etargets[0];
        fevent ='actuel';
        devent ='dactuel';
        canon = "https://artistessansfrontieres.fr/archive/"+current;
        keys =keye;
        }
    if( 'dactuel' === event ) {
        pageServed = 'd-archive/'+current;
        title = 'Artistes sans Frontières - Neuigkeiten ';
        event = dtargets[0];
        past = dtargets[1];
        future = dtargets[0];
        eevent ='eactuel';
        fevent ='actuel';
        canon = "https://artistessansfrontieres.fr/archive/"+current;
        keys = keyd;
        }

    //French archive pages
    if( targets.includes(event) ) {
        pageServed = 'f-archive/'+event;
        title = 'Artistes sans Frontières - Les événements passés en 20'+event;
        message = 'Le contenu de la page '+event+' sera bientôt visible ';
        
        past = targets[targets.indexOf(event)+1] || foundation;
        future = targets[targets.indexOf(event)-1] || current;
        eevent = 'e'+event;
        devent = 'd'+event;
        fevent = event; 
        canon = "https://artistessansfrontieres.fr/archive/"+event;
        keys = keyf; // minimum, in case there are no specific keywords for this page
        // specific keywords: keywordf is a table of objects with 2 properties, filename (a) and  keywords (k)
        if (kwf.find( ({a}) => a === event)){
            kwi=kwf.find( ({a}) => a === event);
            let i= kwf.indexOf(kwi);
            keys=kwf[i].k + " , " + keyf;
           }
        } 

    //English archive pages
    if( etargets.includes(event) ) {
        pageServed = 'e-archive/'+event.slice(1);          
        title = 'Artistes sans Frontières - event from 20'+event.slice(1);
        message = 'The page 20'+event.slice(1)+' will be available shortly in English ';
        fevent= event.slice(1);
        devent='d'+fevent;
        eevent=event;
        past = etargets[etargets.indexOf(event)+1] || foundation;
        future = etargets[etargets.indexOf(event)-1] || ecurrent;
        canon ="https://artistessansfrontieres.fr/archive/"+event;;
        keys = keye; 
        if (kwe.find( ({a}) => a === ev)){
            kwi=kwe.find( ({a}) => a === ev);
            let i= kwe.indexOf(kwi);
            keys=kwe[i].k + " , " + keye;
           }                   
        } 
    //German archive pages
    if( dtargets.includes(event) ) {
        pageServed = 'd-archive/'+event.slice(1);              
        title = 'Artistes sans Frontières - Ereignisse in 20'+event.slice(1);
        message = 'Die Seite 20'+event.slice(1)+' wird bald in deutscher Sprache erscheinen ';
        fevent= event.slice(1);
        devent=event;
        eevent='e'+ fevent;
        past = dtargets[dtargets.indexOf(event)+1] || foundation;
        future = dtargets[dtargets.indexOf(event)-1] || dcurrent;
        canon = "https://artistessansfrontieres.fr/archive/"+event;
        keys = keyd; 
        if (kwd.find( ({a}) => a === ev)){
            kwi=kwd.find( ({a}) => a === ev);
            let i= kwd.indexOf(kwi);
            keys=kwd[i].k + " , " + keyd;
           }
        }    

    res.render(pageServed, {
        title:title, 
        message:message,
        event:event,
        past:past,
        future:future,
        eevent:eevent,
        fevent:fevent,
        devent:devent,
        canon:canon,
        keys:keys
        });

});

router.use(function(req, res, next){
        res.status(404).render('404', {title: "Site: Sorry, page not found"});
});

router.use(function(error, req, res, next) {
    res.status(500);
  res.render('505', {title:'500: Internal Server Error on archive', error: error});
});

module.exports = {
    router:router,
    current:current
}