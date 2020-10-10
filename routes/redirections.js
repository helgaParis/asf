// to avoid typing regularly the links to the member's exertnal pages with all the CORS references and to change them centrally

app.get('rd/petrovic',function (req,res,next){
    // possible destinations
    let externLink=[
        ['petrovic', 'https://petrovic.ovh/', "target='_blank'"], 
        ['strobl', 'https://hstrobl.info/', "rel='noopener', target='_blank'"],
        ['douglas', 'https://dougpetrovic.info/', "rel='noopener', target='_blank'"],
        ['gabriella', 'http://gabriella.carbone.free.fr/cadres.html', "rel='noopener noreferrer nofollow', target='_blank'"],
        ['gietl', 'https://www.dock-sud.com/AET%202009%20GIETL%20Karl%20-%20du%2022-05-09%20au%2022-06-09.php', "rel='noopener noreferrer nofollow', target='_blank'"],
        ['yorgos', 'https://yorgosmaryelis.weebly.com', "rel='noopener noreferrer nofollow', target='_blank'"],
        ['ara', 'https://leroidesaulnes.org/', "rel='noopener', target='_blank'"],
        ['asfric', 'https://artistessansfric.com', "rel='noopener', target='_blank'"],
        ['informatix', 'https://paris-informatix.com', "rel='noopener', target='_blank'"],
        ['vite', 'https://vite-fait-bien-fait.com', "rel='noopener', target='_blank'"],
        ['clown', 'https://clownauguste.com/', "rel='noopener', target='_blank'"]
    ]
    // request from the client
    let whereToLink = (req.params[0]);

    if (externLink.find( ({c}) => c ===cible)){
        whereToLink=externLink.find( ({c}) => c ===cible);


    res.status(301).redirect("https://petrovic.ovh/");
});
