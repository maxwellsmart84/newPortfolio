
$(document).ready(function (){
  page.init();
});

var page = {
  init: function (){
    page.initEvents();
  },

  initEvents: function(){
    page.triggerInitAnim();
  },

  carouselStart: function (){
    $(".carousel").carousel();
  },

   initialAnim: function (){
     var tl = new TimelineMax ();
     tl.to("#M", 1, {right:"35%", top:"11vh"});
     tl.to(".headerBar", 0.5, {height:"13vh", backgroundColor: "rgba(#000000, 0.6"}, 0);
     tl.to("#L", 1, {right:"45%", top:"49vh"});
     tl.to("#K", 1, {right: "52.5%", top: "79vh"});
     tl.to(".name", 3.5, {color: "#bab9b9", opacity: 0.66});
     tl.to(".name", 1.5, {letterSpacing:"80px", color: "#bab9b9", opacity: 0});
     tl.to(".section", 1, {width:"100%"}, 10);
     tl.addCallback(page.removeHiddenSec, 9);
     tl.addCallback(page.removeHiddenInd, 10);
     tl.addCallback(page.carouselStart);
   },

   removeHiddenSec: function (){
   $(".section").removeClass("hidden");
   },

   removeHiddenInd: function(){
     $(".section").removeClass("hidden");
   },

    triggerInitAnim: function (){
     $("#headerInit").on ("click", function (event){
     page.initialAnim();
   });
  }
};
