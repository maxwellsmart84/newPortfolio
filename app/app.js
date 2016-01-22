
$(document).ready(function (){
  page.init();
});

var mTop = "60px";
var mRight = "35%";
var lTop = "285px";
var lRight = "45%";
var kTop = "520px";
var kRight = "53.5%";

var page = {
  init: function (){
    page.initEvents();
  },

  initEvents: function(){
    page.triggerInitAnim();
    page.modalVideo();
    page.modalVideoStop();
    page.letterPosition();
  },

  carouselStart: function (){
    $(".carousel").carousel({
      interval: false
    });
  },

    letterPosition: function (){
      var windowSize = $(window).width();
      console.log(windowSize);
      if (windowSize >= 1600){
        console.log("if statement", windowSize);
        mRight = "36%";
        kRight = "51.5%";
     }
     if (windowSize >= 1920){
       mRight = "40%";
       lRight = "47%";
       kRight = "52.5%";
     }
    },

   initialAnim: function (){
     var tl = new TimelineMax ();
     tl.to("#M", 1, {right: mRight, top: mTop});
     tl.to("#L", 1, {right:lRight, top:lTop});
     tl.to("#K", 1, {right: kRight, top: kTop});
     tl.to(".name", 3.5, {color: "#bab9b9", opacity: 0.66});
     tl.to(".headerBar", 0.5, {height:"15vh", display:"flex", justifyContent:"center", backgroundColor: "rgba(#000000, 0.6"}, 0);
     tl.to(".connectIcons", 2, {color:"white", opacity:1}, 0);
     tl.to(".name", 1.5, {letterSpacing:"80px", color: "#bab9b9", opacity: 0});
     tl.to(".section", 1, {width:"80%"}, 10);
     tl.addCallback(page.removeHiddenSec, 10);
     tl.addCallback(page.removeHiddenInd, 10);
     tl.to("#M", 1.5, {right: mRight, top:"60px"}, 10);
     tl.to("#L", 1.5, {right: lRight, top:"385px"}, 10);
     tl.to("#K", 1.5, {right: kRight, top: "700px"}, 10);
     tl.addCallback(page.carouselStart);
   },

   removeHiddenSec: function (){
   $(".section").removeClass("hidden");
   },

   removeHiddenIcons: function() {
     $(".connectIcons").removeClass("hidden");
   },


   removeHiddenInd: function(){
     $(".section").removeClass("hidden");
   },

    triggerInitAnim: function (){
     $("#headerInit").on ("click", function (event){
     page.initialAnim();
   });
 },

   modalVideo: function (){
     $("#videoLink").on("click", function (event){
       var src = "https://www.youtube.com/embed/mOCtlaUJcts";
       $("#videoModal").modal('show');
       $('#videoModal iframe').attr('src', src);
     });
   },
   modalVideoStop: function(){
     $('#videoModal button').click(function () {
       event.preventDefault();
        $('#videoModal iframe').removeAttr('src');
    });
   }
};
