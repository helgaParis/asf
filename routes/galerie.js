/***** What this router does:
 * (This is not yet the final version, but close)
 * 
 * The router handles calls for /galerie concerning single pages or dependant websites.
 * The files are organised in 3 folders, f-galerie, e-galerie, d-galerie. Other languages could be added. 
 * Those destinations are not all trilingual and could be in still different languages, but the menu is.
 * 
 * The valid urls are defined in an array of valid French targets (destinations).
 * The targets in other languages are calculated. 
 * 
 * The router compares all calls to the targets in the 3 arrays and renders the matching page. 
 * It sends an object to the front including these informations:
 *    It defines the position of the page in the array and uses this position to define the next in line and the one before for flip through arrows. 
 *    If no position is defined, the page does not exist in the arrays of allowed targets, a 404 page is rendered. 
 *    It gives a default message and a title in the three languages 
 *    It defines the corresponding destinations in other languages 
 * 
 * The content of the index pages, the chapter landing page is not yet defined. 
 * 
 *****/



'use strict';
const express = require('express');
const router = express.Router();

//routes for all valid destinations
router.get('/*',function(req,res) {

    //+++ valid internal routes for French galerie - add new navlink names here, non-artist pages after 'you' +++

    let destinations=[
                'amorim','bazencir','champagne','delaney','emory','erguy','frevarias',
                'gebka', 'gruyters','jalila','kouassi','krive','lepaquet','merle','mohsen','mtm',
                'nicolas','plazanet','paquetrobert','pillas','pluvinage','quartarone',
                'rahs','rasmussen','reggaro','schwertfeger','souche','stoulig','sylviaartdeco',
                'tajuddin','valgallard','villaada','wright','adzak', 'zamoum',
                'you',
                'refweb', 'reflogos', 'refpub', 'refsdc', 'refmhh', 
                'lepaquet2','lepaquet3',
                'erguy2', 'erguy3', 'erguy4',
                'plazanet2',
                'rasmussen2', 'rasmussen3', 'rasmussen4', 'rasmussen5', 
                'valgallard2', 'valgallard3', 'valgallard4', 'valgallard5', 'valgallard6'
            ];

    //the navlinks for other languages are calculated
    const edestinations = destinations.map(x =>'e'+x);
    const ddestinations = destinations.map(x =>'d'+x);

    /*
    Position = index of the page called in the array of valid destinations. 
    an arrow on the gallery page allows to flip through artist pages (next position), 
    but not non-artists pages. 
    It will revert to destinations[0] after the last valid destination
    (idea under discussion: integrate the new independant AsF créated websites in this scroll, by adding an extra index page to them with a small gallery menu)
    */
    let lastPos=destinations.length-21; //-(1 + number of non-artist pages and seondary pages at the end, after 'you')
    let firstPos=0; 

    // get the name of the artist from the link clicked on nav-galerie or typed in url or search
    let artist = (req.params[0]);
    let pageCalled = artist;
  
    //default page to render, if the page for the artist does not / no longer / not yet exist 
    let storage='f-galerie';
    let showpage="index"; 
    let title="Artistes sans Frontières - La galerie des membres";
    let message="La page que vous cherchez n'existe pas, essayez de trouver l'artiste via le menu ou les flèches. - The page you are looking for does not exist. Try to find the artist via the menu or the arrows.";
    let next; 
    let lastseen;
    let fartist;
    let eartist;
    let dartist;
    
 
    /* compare artist with destinations (list and index pages) and 
    ** define position for the flip forward and back arrows
    ** and language used, 
    ** otherwise send to default
    */
    if ('index'===artist || ''===artist){
        next= destinations[0];
        lastseen= destinations[lastPos];
        eartist='eindex';
        dartist='dindex';
        fartist='index'
        message=''; //no message, as default for unvalid destination is "unknown artist"
        next=destinations[0]; 
        lastseen=destinations[lastPos];
    } 
    if('dindex'===artist){
        storage='d-galerie';
        next= ddestinations[0];
        lastseen= ddestinations[lastPos];
        eartist='eindex';
        fartist='index';
        message='';
        title='Artistes sans Frontières - Galerie';
    }
    if ('eindex'===artist){
        storage='e-galerie';
        next= edestinations[0];
        lastseen= edestinations[lastPos];
        dartist='dindex';
        fartist='index';
        message='';
        title='Artistes sans Frontières - The Gallery';
    }
    
    // French list
    if( destinations.includes(artist) ) {
        storage='f-galerie';
        showpage=artist;
        artist=artist;
        message='Artistes sans Frontières presente ' + artist.toUpperCase();
        next= destinations[destinations.indexOf(artist)+1] || destinations[lastPos];
        if(destinations.indexOf(next)>lastPos)next=destinations[firstPos];
        lastseen= destinations[destinations.indexOf(artist)-1] //|| destinations[firstPos];
        if(lastseen===undefined)lastseen=destinations[lastPos];
        if(destinations.indexOf(lastseen)>lastPos)lastseen=destinations[firstPos];
        dartist='d'+artist;
        eartist='e'+artist;
        fartist=artist; 
    }
      
    // English list
    if (edestinations.includes(artist)) {
        storage='e-galerie';
        showpage=artist.slice(1);
        title='Artistes sans Frontières - The Gallery';
        message='Artistes sans Frontières presents ' +artist.slice(1).toUpperCase();
        next= edestinations[edestinations.indexOf(artist)+1] || edestinations[lastPos];
        if(edestinations.indexOf(next)>lastPos)next=edestinations[firstPos];
        lastseen= edestinations[edestinations.indexOf(artist)-1] //|| edestinations[firstPos];
        if(lastseen===undefined)lastseen=edestinations[lastPos];
        if(edestinations.indexOf(lastseen)>lastPos)lastseen=edestinations[firstPos];
        dartist='d'+artist.slice(1);
        eartist=artist;
        fartist=artist.slice(1); 
        artist=artist.slice(1);
    }

    // German list
    if (ddestinations.includes(artist)) {
        storage='d-galerie';
        showpage=artist.slice(1);
        title='Artistes sans Frontières - Die Galerie';
        message='Artistes sans Frontières stellt '+artist.slice(1).toUpperCase() + ' vor';
        next= ddestinations[ddestinations.indexOf(artist)+1] || ddestinations[lastPos];
        if(ddestinations.indexOf(next)>lastPos)next=ddestinations[firstPos];
        lastseen= ddestinations[ddestinations.indexOf(artist)-1] //|| ddestinations[firstPos];
        if(lastseen===undefined){lastseen=ddestinations[lastPos]};
        if(ddestinations.indexOf(lastseen)>lastPos)lastseen=ddestinations[firstPos];
        eartist='e'+artist.slice(1);
        dartist=artist;
        fartist=artist.slice(1); 
        artist=artist.slice(1);
    }
    

    //not allowed link, as page not in the allowed destinations
    if (next === undefined) {
        //req.param[0] refers to file neither French, nor English nor German nor index
        storage='f-galerie';
        showpage='index';   
        title='Asf - Galerie - Gallery';
        message='L\'artiste cherché n\'est pas membre, cliquez sur un autre lien svp - The artist you are looking for is not a member. Please click on another link. You may need to switch back to your language.',
        next='index';
        lastseen='index';
    }

    res.render(storage+'/'+showpage, {
                                title:title + ', '+fartist, 
                                message: message,
                                artist:artist.toUpperCase(),
                                next:next,
                                lastseen: lastseen,
                                eartist:eartist,
                                dartist:dartist, 
                                fartist:fartist ,
                                	canon:"https://artistessansfrontieres.fr/galerie/"+pageCalled
                            });
    
});


module.exports = router;