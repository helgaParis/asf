
const express = require('express');

const router = express.Router();

//console.log('dans le fichier site.js');

        //les routes du site principal
    router.get('/',function(req,res,next) {
      res.render('index',{title:'Artistes sans Frontières - bienvenue !'});
    });

    //pugs en views/asso/...
   

    router.get('/buts',function(req,res,next) {
        res.render('asso/buts',{title:'Les objéctifs de l\'association AsF'});
    });
    router.get('/nous',function(req,res,next) {
        res.render('asso/nous',{title:'Artistes sans Frontières - notre histoire'});
    });
    router.get('/contact',function(req,res,next) {
        res.render('asso/contact',{title:'AsF - contactez-nous'});
    });
    router.get('/join',function(req,res,next) {
        res.render('asso/join',{title:'Devenez membre de l\'association AsF'});
    });
    router.get('/mentions',function(req,res,next) {
        res.render('asso/mentions',{title:'AsF - mentions légales'});
    });

      //routes services

    router.get('/services',function(req,res,next) {
        res.render('services/services',{title:'Artistes sans Frontières - services'});
    });
    router.get('/expos',function(req,res,next) {
        res.render('services/expos',{title:'Exposez vos oeuvres avec Artistes sans Frontières'});
    });
    router.get('/sites',function(req,res,next) {
        res.render('services/sites',{title:'AsF publie votre site Internet personnalisé'});
    });
    router.get('/apps',function(req,res,next) {
        res.render('services/apps',{title:'AsF crée votre Application mobile personnalisée'});
    });
    router.get('/stages',function(req,res,next) {
        res.render('services/stages',{title:'AsF - notre offre de formations'});
    });
    router.get('/divers',function(req,res,next) {
        res.render('services/divers',{title:'AsF - services locaux - pour membres'});
    });
    router.get('/terms',function(req,res,next) {
        res.render('services/terms',{title:'AsF - conditions générales et tarifs'});
    });



module.exports = router;