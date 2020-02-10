/***** What this router does:
 * (This is not yet the final version, but close)
 * 
 * The router handles calls for /site
 * The files are organised in 3 folders, f-site, e-site, d-site. The French version is the main version, 
 * content in the other pages may vary. Not all pages may exist in all languages.
 * 
 * The valid urls are defined in 3 arrays of objects, the objects giving individual url targets (cible) and page titles
 * 
 * The router compares all calls to the targets in the 3 arrays and renders the matching page. 
 * It defines the position of the page in the array and uses this position to define the matching pages in other languages. 
 * If no position is defined, the page does not exist in the arrays of allowed targets, a 404 page is rendered. 
 * 
 * The content of the index pages, the chapter landing page is not yet defined. 
 * For the moment it's just a short sommary and an indicator of the latest article written in the news chapters. 
 * This indicator, the url of the latest archive file, is extracted by the router archive.js. 
 * I call it here from archive.js to add it to the variables handed over to index.pug
 * It is a helpful indicator to regular visitors, to decide if they should click on the news link first or go straigt to
 * the gallery or the information they searched. 
 * (It avoids updating the 3 index files after writing new news files, but mostly it's here,
 * because I wanted to test how to export a function from a router plus the router itself and to use the result of the
 * function in another router and pass it on to the view.).
 * 
 * 
 * 
 *****/


'use strict';
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

// defining the latest news page as the actuel one with help of archive.js
const archive = require('./archive.js');
let actu=archive.current;
//console.log(actu);

router.get('/*', function(req,res,next){
    // console.log('dans site/*');   

//dynamic routes via router, existing links in 3 languages

var ftargets = [
                {c:'index',t:'Artistes sans Frontières - notre offre'},
                {c:'buts'  , t:'Les objéctifs de l\'association AsF'  },{c: 'nous' , t: 'Artistes sans Frontières - Notre Histoire' },
                {c: 'contact', t: 'AsF - contactez-nous' },{c:'join', t:  'Devenez membre de l\'association AsF' },
                {c: 'mentions', t:'AsF - mentions légales'  },{c: 'services' , t:  'Artistes sans Frontières - services' },
                {c: 'expos', t: 'Exposez vos oeuvres avec Artistes sans Frontières'  },{c: 'sites' , t: 'AsF publie votre site Internet personnalisé' },
                {c: 'apps', t: 'AsF crée votre application mobile personnalisée' },{c:'stages'  , t:  'AsF - notre offre de formations' },
                {c: 'divers' , t: 'AsF - services locaux - pour membres' },{c:'terms',t: 'AsF - conditions générales et tarifs'}
                ];

var etargets = [
                {c:'eindex',t:'Artistes sans Frontières - our offer'},
                {c:'ebuts', t:'The aims of the association AsF'}, {c:'enous', t:'Artistes sans Frontières - about us' },
                {c:'econtact', t:'AsF - contact us'  }, {c:'ejoin', t:'Join the association AsF' }, {c:'ementions', t:'AsF - legal terms' }, 
                {c:'eservices', t:'Artistes sans Frontières - services' }, {c:'eexpos',t:'Show your artwork in France with Artistes sans Frontières'  },
                {c:'esites', t:'AsF creates your very own individual website' }, {c: 'eapps', t: 'AsF creates your personal mobile app'},
                {c:'estages', t:'AsF - art work shops offered by members' }, {c: 'edivers', t:'AsF - local member services'}, {c: 'eterms', t:'AsF - terms and tarifs'}
                ];

var dtargets = [
                {c:'dindex',t:'Artistes sans Frontières - unser Angebot'},
                {c:'dbuts',t:'Die Ziele des Vereins AsF'}, {c:'dnous', t:'Artistes sans Frontières - über uns' }, {c:'dcontact',t:'AsF - Kontakt'  },
                {c:'djoin', t:'Werden Sie Mitglied bei AsF' }, {c: 'dmentions', t:'AsF - Impressum'}, {c: 'dservices', t:'Artistes sans Frontières - Service'},
                {c:'dexpos',t:'Stellen Sie mit Artistes sans Frontières in Frankreich aus'  }, {c: 'dsites',t: 'Ihre Künstler Website'},
                {c:'dapps',t: 'Ihre Web Application' }, {c:'dstages',t: 'AsF - lokale Schulungsangebote' }, {c:'ddivers', t:'AsF - lokale Angebote für Mitglieder' }, 
                {c:'dterms', t:'AsF - Geschäftsbedingungen für Service Angebote' }
                ];

//Routes of the main website = chapter Site, folders f-site, d-site, e-site

    let incoming = req.params[0];
    let cible= path.basename(incoming); 
    let target ={c:'index', t:'erreur de route dans /site', lang:"f"};      
    let folder='';
    let page;  //needed till all translations made, then render(cible )
  
    //  site/index or site/ This page will be an animation. For now it's a news page.
    if(cible ==='' || cible === 'index.html') {
        target= {t:'index',  c:'index', t:'Bienvenue sur le site AsF', lang:"f", actu:actu};   
        folder= 'f-site/';
        let pos=0;
        target.pos=pos;
        target.ciblee=etargets[pos].c;
        target.cibled=dtargets[pos].c;
        target.lang='fr'; 
        page=target.c ;
       //console.log(' call for / or /index target', target);
    }

    //if link from the French website

    if (ftargets.find( ({c}) => c ===cible)){
        target=ftargets.find( ({c}) => c ===cible);
        folder= 'f-site/';
        let pos=ftargets.indexOf(target);
        target.pos=pos;
        target.ciblee=etargets[pos].c;
        target.cibled=dtargets[pos].c;
        target.lang='fr'; 
        target.actu=actu;
        page=target.c ;
    }  

    //English and German links: no texts yet, serve English or German index with specific title

    if (etargets.find( ({c}) => c ===cible) ){
        target = etargets.find( ({c}) => c ===cible);
        folder= 'e-site/';
        let pos= etargets.indexOf(target);
        target.pos=pos;
        target.ciblef=ftargets[pos].c;
        target.cibled=dtargets[pos].c;
        target.lang='en';   
        target.actu=actu;
        page=cible.slice(1);
    }
    if (dtargets.find( ({c}) => c ===cible) ){
        let target=dtargets.find( ({c}) => c ===cible);
        folder= 'd-site/';
        let pos= dtargets.indexOf(target);
        target.pos=pos;
        target.ciblee=etargets[pos].c;
        target.ciblef=ftargets[pos].c;
        target.lang='de';    
        target.actu=actu;
        page=cible.slice(1);  
    }

    //not allowed link, as page not in the allowed targets
    if (target.pos === undefined) {
        //req.param[0] refers to file neither French, nor English nor German nor index
        page='404';   
    }
    res.render(folder+page,{
                        title:target.t ||'', 
                        target:target
                        });
     
   // console.log( 'target :  ',target);    
   // console.log('cible : ',cible);
   // console.log('page :  ', page);
  //  console.log(folder+page);
})


module.exports = router;