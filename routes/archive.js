
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

//targets = pages to showw (if called as archive/target)
//file names: year-eventNumberThatYear, add recent on top
//current: to define the most recent as the page "actuel" on the main site
var targets= [
            '19-5','19-4','19-3','19-2','19-1',    "18-3",'18-2','18-1',
            '17-2','17-1',   '16-3','16-2','16-1',  '15-2','15-1',   '14-3','14-2','14-1',
            '13-2', '13-1',   '12-4','12-3','12-2','12-1',  '11-4','11-3', '11-2', '11-1', 
            '10-7','10-6','10-5','10-4','10-3','10-2','10-1',   '09-9','09-8','09-7','09-6','09-5','09-4','09-3','09-2','09-1', 
            '08-4','08-3','08-2','08-1',  '07-8','07-7', '07-6', '07-5', '07-4', '07-3', '07-2', '07-1', 
            '06-13','06-12','06-11','06-10','06-9','06-8', '06-7','06-6','06-5','06-4','06-3','06-2','06-1',
            '05-10','05-9','05-8','05-7','05-6','05-5','05-4','05-3','05-2','05-1',
            '04-2', '04-1',  '01',  '00'  
];
var current=targets[0];



router.get('/actuel',function(req,res,next) {
    
    res.render('f-archive/'+current,{
                                title:'Artistes sans Frontières - Actualités ',
                                event:targets[0],
                                past: targets[1],
                                future:  targets[0],
                              });
});


router.get('/*/',function(req,res) {
    // get the name of the archive page from the link clicked on nav-archive or typed in url or search
  
   var eventUrl= req.params[0] ;
   var event = path.basename(eventUrl);



    if( targets.includes(event) ) {
        res.render('f-archive/'+event, {               
                        title: 'Artistes sans Frontières - Les événements passés en 20'+event, 
                        message: 'Le contenu de la page '+event+' sera bientôt visible ',
                        event: event,
                        past: targets[targets.indexOf(event)+1],
                        future: targets[targets.indexOf(event)-1] || current
                    });
        } 
    });

    router.use(function(req, res, next){
        res.status(404).render('404', {title: "Site: Sorry, page not found"});
});

router.use(function(error, req, res, next) {
    res.status(500);
  res.render('505', {title:'500: Internal Server Error on ', error: error});
});

module.exports = router;