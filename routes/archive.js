
const express = require('express');

const router = express.Router();

console.log('dans le fichier archive.js');


router.get('/actuel',function(req,res,next) {
    res.render('archive/actuel',{title:'Artistes sans Frontières - Actualités '});
});
router.get('/2019-1',function(req,res,next) {
    res.render('archive/2019-1',{title:'AsF Evenements en 2019 - Portes Ouvertes'});
});
module.exports = router;