const express = require('express');
const router = express.Router();
// valid routes for galerie - add new navlink names here
var targets=[ 'adzak', 'amorim', 'bazencir', 'champagne', 'delaney', 'erguy', 
            'frevarias', 'gebka',  'gruyters', 'jalila','kouassi','krive', 'lepaquet',
            'merle',  'mohsen', 'mtm', 'nicolas','plazanet','paquetrobert', 'pillas',
            'pluvinage','p-plazanet','quartarone','rahs', 'rasmussen', 'schwertfeger','stoulig',
            'sylviaartdeco', 'tajuddin','valgallard', 'villaada', 'wright' ];
var ownsite=['doug', 'strobl', 'carbone', 'gietl', 'yorgos',
            'artistessansfric', 'clownauguste', 'imformatix', 'vitefaitbienfait'];
var exmembers=['motor', 'ada-villa', 'belz','laurentloizeau', 'moduss', 'joachimbelz'];
//à reflechir: screenshots from former websites ? page with logos? page with publicity?
var references=['ara', 'asfric','joachimbelz', 'clown','informatix', 'mhh', 'sdc', 'pub', 'logos',  'vite'];




// routes for the gallery   
   
router.get('/index',function(req,res,next) {
    res.render('galerie/index',{title:'Artistes sans Frontières - La galerie des membres'});
});


router.get('/*',function(req,res) {
   // get the name of the artist from the link clicked on nav-galerie or typed in url or search
   var artist = (req.params[0]);
   // console.log(artist);
   // compare with lists of:  existing members (target for the gallery),
   // members with own site link with code 301,
   // former members or members late on fees and nonsense text
    if( targets.includes(artist) ) {
        res.render('galerie/'+artist, {               
                        title:'Artistes sans Frontières - La galerie des membres', 
                        message: 'Artistes sans Frontières presente ' + artist,
                        artist:artist });
        } else {
          //  console.log('in else of targets');
            if (ownsite.includes(artist)) {
                console.log('link to other site, 301');
                } else {
                    if (exmembers.includes(artist)) {
                        res.render('galerie/index',
                        {title:'Artistes sans Frontières - La galerie des membres', 
                         message: artist + ' n\'est plus membre de l\'association'   });
                    } else {
                        if (references.includes(artist)){
                            res.render('galerie/index',
                            {title:'Artistes sans Frontières - Autres réferences', 
                            message: 'Vous retrouverez ici bientôt un aperçu du site '+ artist    } );
                            } else {
                                res.render('galerie/index',
                                {title:'Artistes sans Frontières - La galerie des membres', 
                                message: artist + ' n\'est pas membre de l\'association'   });
                            }
                        }
                    }
            }
});


module.exports = router;