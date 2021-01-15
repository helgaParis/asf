'use strict';

window.addEventListener('DOMContentLoaded', function () {

    var canvasBg;
    (function creeFond() {
        canvasBg = document.getElementById("canvasBg");
        canvasBg.width = 500;
        canvasBg.height = 500;
    })();

    //constructor function defining the properties of the futur object - arguments to take

    function Rectangles(x, y, width, height, photo) {
        this.xRec = x;
        this.yRec = y;
        this.widthRec = width;
        this.heightRec = height;
        this.photoUrl=photo;
    }
    //methods added to the prototype of the constructeur : rectangle
    //they also include the canvas destination and context ctx (change if drawing to another canvas)
    Rectangles.prototype.dessineRectangle = function () {
        var ctx = canvasBg.getContext("2d");
       
        ctx.beginPath();
        ctx.rect(this.xRec, this.yRec, this.widthRec,this.heightRec);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "DarkRed";
        ctx.stroke();
        var picwidth= (this.widthRec-10);
        var picheight=(this.heightRec-10);
        var picX=(this.xRec+5);
        var picY= (this.yRec+5);
        var image=new Image();
        var picture= image;
        picture.src=this.photoUrl;        
        picture.onload=function(){
            //console.log(image.src);
            ctx.drawImage(picture, picX,picY,picwidth,picheight)       
        }
        // console.log(image)  
        
    };
   
    //les urls des images,  prefix='https://artistessansfrontieres.fr/images/collage/'
   const prefix='./images/collage/';
   const imgUrl = [ prefix+'p5.jpg',  prefix+'p16.jpg',  prefix+'p27.jpg',  prefix+'p8.jpg',  prefix+'l1.jpg', prefix+'l2.jpg', prefix+'l3.jpg', prefix+'l21.jpg']
   
   //Positions: 2 portraits to move from right to left 2 portraits from left to right, only X changes by 10
   //4 landscapes to move down / up, only y changes by 10
   //Everyone makes 45 steps
   
    const startPoint = [ 
      [-440, 10], [-120, 250], [600, 315], [675, 185],     [155, -425], [110, -310], [10, 720], [310, 545]
    ];

   //planned   stop points =  [10, 10], [330, 250], [150, 315], [225, 185],     [155, 25], [110, 130], [10, 270], [310, 105]

    
    //create the paintings to be moved
    const portraits=[
       new Rectangles(startPoint[0][0], startPoint[0][1], 120, 180, imgUrl[0] ),
        new Rectangles(startPoint[1][0], startPoint[1][1], 120, 180, imgUrl[1] )
    ];
    const portraitsRetour=[
       new Rectangles(startPoint[2][0], startPoint[2][1],  120, 180,  imgUrl[2] ),
         new Rectangles(startPoint[3][0], startPoint[3][1], 120, 180, imgUrl[3] )
    ];
    const landscapes = [       
       new Rectangles(startPoint[4][0], startPoint[4][1],  180, 120, imgUrl[4] ),
       new Rectangles(startPoint[5][0], startPoint[5][1],  180, 120,  imgUrl[5] )
    ];
    const landscapesRetour = [
       new Rectangles(startPoint[6][0], startPoint[6][1], 180, 120,  imgUrl[6] ),
        new Rectangles(startPoint[7][0], startPoint[7][1],  180, 120, imgUrl[7] )
    ];
    
    //how to move them
    function moveRight(e){   
      e.xRec=e.xRec+10;
      e.dessineRectangle();          
    }
    function moveLeft(e){
           e.xRec=e.xRec - 10;
         e.dessineRectangle(); 
     }
    function moveDown(e){
        e.yRec=e.yRec+10;
           e.dessineRectangle(); 
     }
    function moveUp(e){
          e.yRec=e.yRec-10;
         e.dessineRectangle(); 
      }
    
 
  // ++++    Animation avec requestAnimationFrame +++
// Polyfill if not supported
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) { return setTimeout(f, 1000 / 60); }; // simulate calling code 60 
    window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (requestID) { clearTimeout(requestID); }; //fall back

    let startingtime;
    let counter = 45;
    let animspeed=60;
    
    function myAnimation (timestamp) {
   
        if (!startingtime) {
            startingtime = timestamp;
        }
        if (timestamp - startingtime >=animspeed) {
            startingtime = timestamp;
            var ctx = canvasBg.getContext("2d");
            ctx.clearRect(0,0,500,500);       
            
         portraits.forEach(function (e, i  ) {
               moveRight(portraits[i],i);
            });   
            
         portraitsRetour.forEach(function (e, i  ) {
                  moveLeft(portraitsRetour[i],i);
                  });
            
         landscapes.forEach(function (e, i  ) {
            moveDown(landscapes[i],i);
         });   
         
        landscapesRetour.forEach(function (e, i  ) {
               moveUp(landscapesRetour[i],i);
               });    
          counter = counter -1;
        }     
        if (counter) {
            window.requestAnimationFrame(myAnimation);
        }
    } // end of request animation frame loop myAnimation

window.requestAnimationFrame(myAnimation);



}); // fin de l'EL dom content loaded et du script






