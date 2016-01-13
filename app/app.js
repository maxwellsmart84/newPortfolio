
$(document).ready();

// var initialAnim = function (){
//    TweenMax.to("#M", 2, {right:"37%", top:"15vh"});
//    TweenMax.to("#L", 2, {right:"50%", top:"40vh", delay:0.5},1);
//    TweenMax.to("#K", 2, {right:"59%", top:"65vh", delay:1},1);
//  };
$.each( $('*'), function() {
    if( $(this).width() > $('body').width()) {
        console.log("Wide Element: ", $(this), "Width: ", $(this).width());
    }
});


var tl = new TimelineLite ();

var initialAnim = function (){
   tl.to (".headerText", 0, {height:"13vh"});
   tl.to("#M", 1, {right:"33%", top:"10vh"});
   tl.to("#L", 1, {right:"45%", top:"35vh"});
   tl.to("#K", 1, {right:"52.5%", top:"60vh"});
   tl.to(".name", 8, {color: "#bab9b9", opacity: 0.66});

 };

 $(".headerText").on ("click", function (event){
   initialAnim();
 });
