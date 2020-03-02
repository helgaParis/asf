'use strict';

window.addEventListener('DOMContentLoaded', function () {

    //show either bio, philo or extratext, hide the other two
    // and hide diacontainer, icons and footer as well
    function showOneHideThree(show,hide1,hide2){
        var visible = document.getElementById(show);
        if(visible != null) visible.style.display = 'block';
        var invisibles=document.getElementById(hide1);
        if(invisibles != null) invisibles.style.display = 'none';
        var invisibles=document.getElementById(hide2);
        if(invisibles != null) invisibles.style.display = 'none';
        var invisibles=document.getElementById('diacontainer');
        if(invisibles != null) invisibles.style.display = 'none';
        var invisibles=document.getElementById('icons');
        if(invisibles != null) invisibles.style.display = 'none';
        var invisibles=document.getElementsByTagName("footer")[0];
        if(invisibles != null) invisibles.style.display = 'none'; 
    }

    //    Event Handlers to show and hide the layers on click - if a link exists
    
   
    function showbio () { 
        let toShow= document.getElementById('goToBio');
        if(toShow != null) {
            toShow.addEventListener('click', function(){
                showOneHideThree("bio","philo","extratext");
                }) 
            } 
        };
    function showPhilo () { 
        let toShow= document.getElementById('goToPhilo');
        if(toShow != null) {
            toShow.addEventListener('click', function(){
                showOneHideThree("philo","extratext","bio");
                }) 
            } 
        };
    function showExtratext () { 
        let toShow= document.getElementById('goToExtratext');
        if(toShow != null) {
            toShow.addEventListener('click', function(){
                showOneHideThree("extratext", "philo", "bio");
                }) 
            } 
        };
 
showbio(); showPhilo(); showExtratext(); 

}); //end eventhandler domcontent

