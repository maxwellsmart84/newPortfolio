
$(document).ready();

// var initialAnim = function (){
//    TweenMax.to("#M", 2, {right:"37%", top:"15vh"});
//    TweenMax.to("#L", 2, {right:"50%", top:"40vh", delay:0.5},1);
//    TweenMax.to("#K", 2, {right:"59%", top:"65vh", delay:1},1);
//  };


var tl = new TimelineLite ();
var endAnimation = function (){
  TweenMax.to(".name", 3, {color: "#fff", opacity:0});
};

var initialAnim = function (){
   tl.to (".headerText", 0, {height:"13vh"});
   tl.to("#M", 1, {right:"33%", top:"8.5vh"});
   tl.to("#L", 1, {right:"45%", top:"38vh"});
   tl.to("#K", 1, {right:"52.5%", top:"62.5vh"});
   tl.to(".name", 4, {color: "#bab9b9", opacity: 0.66});
   tl.to(".name", 4, {color: "#bab9b9", opacity: 0});

 };

 $(".headerText").on ("click", function (event){
   initialAnim();
 });
