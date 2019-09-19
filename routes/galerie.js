const express = require('express');

const router = express.Router();
//console.log('dans le fichier galerie.js');
   // routes for the gallery

   //routes galerie - à mettre sur fichier separé
router.get('/index',function(req,res,next) {
   // console.log('dans la route galerie');
    res.render('galerie/index',{title:'Artistes sans Frontières - La galerie des membres'});
});
module.exports = router;