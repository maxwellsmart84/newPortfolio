
$(document).ready(function (){
  page.init();
});

var page = {
  init: function (){
    page.initEvents();
  },

  initEvents: function(){
    page.triggerInitAnim();
    page.carouselStart();
  },

  carouselStart: function (){
    $(".carousel").carousel();
  },

   initialAnim: function (){
     var tl = new TimelineLite ();
     tl.to ("#headerInit", 0, {height:"13vh"});
     tl.to("#M", 1, {right:"33%", top:"8.5vh"});
     tl.to("#L", 1, {right:"45%", top:"38vh"});
     tl.to("#K", 1, {right:"52.5%", top:"62.5vh"});
     tl.to(".name", 4, {color: "#bab9b9", opacity: 0.66});
     tl.to(".name", 2, {letterSpacing:"70px", color: "#bab9b9", opacity: 0});
   },

    triggerInitAnim: function (){
     $("#headerInit").on ("click", function (event){
     page.initialAnim();
   });
  }
};
