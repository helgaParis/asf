
'use strict';
function diaporama(arg1,arg2,arg3) {
  arg1=photos;
  arg2=legendes;
  arg3=delai;
    //first picture on start  
  //where to write the picture titles
    var cibleLegende = document.getElementById('legende');
    cibleLegende.innerHTML = 'un moment svp...';
    cibleLegende.innerHTML = legendes[0];
    //where to place the photos
    var cibleDias = document.getElementById('dias');
    cibleDias.style.backgroundImage =  arg1[0];

    var diacontainer = document.getElementById('diacontainer');


 
var array = arg1 //photos; // coming from dias-listes.js 
var interval = arg3//delai; //  time  between two pictures




var loop = function () {
  return new Promise(function (outerResolve) {
    var promise = Promise.resolve();
    var i = 0;
    var next = function () {
      var el = array[i];
      var text = legendes[i];
      diacontainer.style.backgroundImage =  el;
      cibleDias.style.backgroundImage =  el;
      diacontainer.style.backgroundImage =  null;
      cibleLegende.innerHTML = text;
//EL click to change show (1 click = 1 step back, first click will most times be a pause) code integrated in function loop
      var stop = document.getElementById('icons');
      stop.onclick = function stopDiashow(){
        i=i-1;
        };
      // additional code here
      //console.log(el);
      if (++i < array.length) {
        promise = promise.then(function () {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve();
              next();
            }, interval);
          });
        });
      } else {
        setTimeout(outerResolve, interval);
        // or just call outerResolve() if you don't want to wait after the last element
      }
    };
    next();
  });
};

loop().then(function () {
  //console.log('Loop finished.');

     //console.log('1 autre cycle à faire');
      loop();
 
});


};

window.addEventListener('DOMContentLoaded',  diaporama); //end of EL domcontentloaded
