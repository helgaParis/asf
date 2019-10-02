
const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();

console.log('dans le fichier archive.js corrigé');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/2004-5.pug',function(req,res,next) {
    res.render('archive/2004-5',{title:'AsF Evenements en 2019 - Transformations'});
});
 
router.post('/2004-5.pug', function(req,res,next) {
    var p1 = request.body.p1; 
    console.log("p1=" + p1);
});

router.get('/actuel',function(req,res,next) {
    console.log('dans la fonction actuel');
    res.render('archive/actuel',{title:'Artistes sans Frontières - Actualités '});
});

module.exports = router;