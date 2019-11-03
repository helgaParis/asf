'use strict';
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

//dynamic routes via router, existing links in 3 languages

var ftargets = [
                {c:'buts'  , t:'Les objéctifs de l\'association AsF'  },{c: 'nous' , t: 'Artistes sans Frontières - Notre Histoire' },
                {c: 'contact', t: 'AsF - contactez-nous' },{c:'join', t:  'Devenez membre de l\'association AsF' },
                {c: 'mentions' , t:'AsF - mentions légales'  },{c: 'services' , t:  'Artistes sans Frontières - services' },
                {c: 'expos' , t: 'Exposez vos oeuvres avec Artistes sans Frontières'  },{c: 'sites' , t: 'AsF publie votre site Internet personnalisé' },
                {c: 'apps' , t:  'AsF crée votre application mobile personnalisée' },{c:'stages'  , t:  'AsF - notre offre de formations' },
                {c: 'divers' , t: 'AsF - services locaux - pour membres' },{c:'terms',t: 'AsF - conditions générales et tarifs'}
                ];

var etargets = [
                {c:'ebuts', t:'The aims of the association AsF'}, {c:'enous', t:'Artistes sans Frontières - about us' },
                {c:'econtact', t:'AsF - contact us'  }, {c:'ejoin', t:'Join the association AsF' }, {c:'ementions', t:'AsF - legal terms' }, 
                {c:'eservices', t:'Artistes sans Frontières - services' }, {c:'eexpos',t:'Show your artwork in France with Artistes sans Frontières'  },
                {c:'esites', t:'AsF creates your very own individual website' }, {c: 'eapps', t: 'AsF creates your personal mobile app'},
                {c:'estages', t:'AsF - art work shops offered by members' }, {c: 'edivers', t:'AsF - local member services'}, {c: 'eterms', t:'AsF - terms and tarifs'}
                ];

var dtargets = [
                {c:'dbuts',t:'Die Ziele des Vereins AsF'}, {c:'dnous', t:'Artistes sans Frontières - über uns' }, {c:'dcontact',t:'AsF - Kontakt'  },
                {c:'djoin', t:'Werden Sie Mitglied bei AsF' }, {c: 'dmentions', t:'AsF - Impressum'}, {c: 'dservices', t:'Artistes sans Frontières - Service'},
                {c:'dexpos',t:'Stellen Sie mit Artistes sans Frontières in Frankreich aus'  }, {c: 'dsites',t: 'Ihre Künstler Website'},
                {c:'dapps',t: 'Ihre Web Application' }, {c:'dstages',t: 'AsF - lokale Schulungsangebote' }, {c:'ddivers', t:'AsF - lokale Angebote für Mitglieder' }, 
                {c:'dterms', t:'AsF - Geschäftsbedinguen für Service Angebote' }
                ];

//Routes of the main website = chaper Site, folders f-site, d-site, e-site

    
router.get('/*', function(req,res,next){
   // console.log('dans site/*');    
    var incoming = req.params[0];
    var cible= path.basename(incoming); 
    var target ={c:'index', t:'erreur de route dans /site', lang:"f"};      
    var folder='';
    var page;  //needed till all translations made, then render(cible )
    
    //  site/index or site/ This page will be an animation. For now it's a news page.
    if(cible ==='' || cible === 'index') {
        target= {t:'index',  c:'index', t:'Bienvenue sur le site AsF', lang:"f"};   
        folder= 'f-site/';
        var pos=99;
        target.pos=pos;
        target.lang='fr'; 
        var page=target.c ;
       // console.log(' call for / or /index target', target);
    }

    //if link from the French website

    if (ftargets.find( ({c}) => c ===cible)){
        target=ftargets.find( ({c}) => c ===cible);
        folder= 'f-site/';
        var pos=ftargets.indexOf(target);
        target.pos=pos;
        target.ciblee=etargets[pos].c;
        target.cibled=dtargets[pos].c;
        target.lang='fr'; 
        var page=target.c ;
    }  

    //English and German links: no texts yet, serve English or German index with specific title

    if (etargets.find( ({c}) => c ===cible) ){
        target = etargets.find( ({c}) => c ===cible);
        folder= 'e-site/';
        var pos= etargets.indexOf(target);
        target.pos=pos;
        target.lang='en';   
        var page='index';
    }
    if (dtargets.find( ({c}) => c ===cible) ){
        var target=dtargets.find( ({c}) => c ===cible);
        folder= 'd-site/';
        var pos= dtargets.indexOf(target);
        target.pos=pos;
        target.lang='de';    
        var page='index';     
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
   // console.log(folder+page);
})


module.exports = router;