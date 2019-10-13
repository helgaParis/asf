
const express = require('express');
const router = express.Router();

//targets = pages to showw
//file names: system changes in 2018. Recent: year-eventNumberThatYear. Before year-month(-eventNumberinMonth)
var targets= [
            '19-1','19-0',  '18-2','18-1',
            '17-2','17-1',   '16-3','16-2','16-1',  '15-2','15-1',   '14-3','14-2','14-1',
            '13-2', '13-1',   '12-4','12-3','12-2','12-1',  '11-4','11-3', '11-2', '11-1', 
            '10-7','10-6','10-5','10-4','10-3','10-2','10-1',   '09-9','09-8','09-7','09-6','09-5','09-4','09-3','09-2','09-1', 
            '08-4','08-3','08-2','08-1',  '07-8','07-7', '07-6', '07-5', '07-4', '07-3', '07-2', '07-1', 
            '06-13','06-12','06-11','06-10','06-9','06-8', '06-7','06-6','06-5','06-4','06-3','06-2','06-1',
            '05-10','05-9','05-8','05-7','05-6','05-5','05-4','05-3','05-2','05-1',
            '04-2', '04-1',  '01',  '00'  
]

router.get('/actuel',function(req,res,next) {
    res.render('archive/actuel',{title:'Artistes sans Frontières - Actualités '});
});
router.get('/*',function(req,res) {
    // get the name of the artist from the link clicked on nav-galerie or typed in url or search
    var event = (req.params[0]);
   
    if( targets.includes(event) ) {
        res.render('archive/'+event, {               
                        title:'Artistes sans Frontières - Les événements passés en 20'+event, 
                        message: 'Le contenu de la page '+event+' sera bientôt visible ',
                        event:event });
        } else {
            res.render('archive/actuel',
                                {title:'Artistes sans Frontières - Actualités', 
                                message: 'pas d\'événement enregisté pour archive/'+event+ '. Vérifiéz l\'écriture de l\'adresse!'  });
        }
});



router.get('/2019-1',function(req,res,next) {
    res.render('archive/2019-1',{title:'AsF Evenements en 2019 - Transformations'});
});
router.get('/2004-5',function(req,res,next) {
    res.render('archive/2004-5',{title:'AsF Evenements en 2019 - Transformations'});
});
module.exports = router;