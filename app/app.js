
$(document).ready(function (){
  page.init();
});

var mTop = "60px";
var mRight = "35%";
var lTop = "285px";
var lRight = "46%";
var kTop = "520px";
var kRight = "55%";

var page = {
  init: function (){
    page.initEvents();
  },

  initEvents: function(){
    // page.triggerInitAnim();
    page.modalVideo();
    page.modalVideoStop();
    page.letterPosition();
    page.initialAnim();
  },

  carouselStart: function (){
    $(".carousel").carousel({
      interval: false
    });
  },

    letterPosition: function (){
      var windowSize = $(window).width();
      if (windowSize <= 1024){
        mRight = "32%";
        kRight = "56.5%";
      }
      if (windowSize >= 1400){
        kRight= "54%";
      }
      if (windowSize >= 1600){
        console.log("if statement", windowSize);
        mRight = "36%";
        kRight = "53%";
     }
     if (windowSize >= 1920){
       mRight = "39%";
       lRight = "47%";
       kRight = "53.5%";
     }
   },

   initialAnim: function (){
     var windowSize = $(window).width();
     var tl = new TimelineMax ();
     if (windowSize <= 415) {
       tl.delay(3);
       tl.to(".headerBar", 0.5, {height:"15vh", display:"flex", justifyContent:"center", backgroundColor: "rgba(#000000, 0.6"}, 0);
       tl.to(".connectIcons", 2, {color:"white", opacity:1}, 0);
       tl.to(".section", 1, {width:"93%"}, 1);
       tl.addCallback(page.removeHiddenSec, 1);
       tl.addCallback(page.removeHiddenInd, 1);
       tl.addCallback(page.carouselStart);
      }
     else {
     tl.delay(3);
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
     tl.addCallback(page.wrapInitials, 10);
     tl.to("#M", 1, {right: "42%", top:"60px", ease:Bounce.easeOut}, 10);
     tl.to("#L", 1, {right:"42%", top:"120px", ease:Bounce.easeOut}, 10);
     tl.to("#K", 1, {right: "42%", top:"180px", ease:Bounce.easeOut}, 10);
     tl.addCallback(page.carouselStart);
    }
   },

   wrapInitials: function(){
     $(".initials").wrap("<div class='columnVert'></div>");
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

 //    triggerInitAnim: function (){
 //     $("#headerInit").on ("click", function (event){
 //     page.initialAnim();
 //   });
 // },

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
