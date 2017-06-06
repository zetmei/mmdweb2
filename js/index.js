 window.onload = function() {


     // var sliderLab = document.getElementsByClassName("sliderImg00");
     // var asideStepUl = document.getElementById("asideStep");
     // var sliderTimer = setInterval(sliderGo, 8000);
     // var staging;
     // var asideStep = asideStepUl.getElementsByTagName("li");
     // var asidePrev = document.getElementById("asidePrev");
     // var asideNext = document.getElementById("asideNext");
     // var sliderNum = 0;
     // var asideNum = 0;
     // var controlNav = 0;
     // var asideArr = [];
     // var asideStyle = ['asideLeft', 'asideMid', 'asideRight'];
     // var headtop = $('.slider').height() + $('header').height();
     // var doc = document.getElementById("slider");
     // doc.addEventListener("touchstart", startTouchScroll, false);
     // doc.addEventListener("touchmove", moveTouchScroll, false);
     // doc.addEventListener("touchend", endTouchScroll, false);
     var startY, endY, startX, endX;

     // window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
     //     self.location.reload();
     // }, false);
     // //畫面翻轉的時候重新整理


     init();


     $(".searchBt").click(function() {
         alert("bt");

     });
     $('#toTop').click(function() { $('html,body').animate({ scrollTop: 0 }, 500); });

      $('.newsCotorl ul li').click(function() { removeClassNameAll(); $(this).addClass('cotorlActive') });


 }

 var ctNum01 = 0,
     ctNum02 = 0,
     ctNum03 = 0,
     ctNum04 = 0;

 function init() {

     $(".nav01 li span").unbind();
     $(".topLi").unbind();
     mq();

 }

 function mq() {
     var chlidNum01 = $(".article04-01 ul li").length;
     var chlidNum02 = $(".article04-02 ul li").length;
     var chlidNum03 = $(".aside01 ul li").length;
     var chlidNum04 = $(".aside02 ul li").length;
     var phoneInitNum = 2;
     var pcInitNum01 = 3;
     var pcInitNum02 = 2;
     var pcInitNum03 = 6;
     var pcInitNum04 = 5;

     var query = Modernizr.mq('(max-width: 950px)');
     if (query) {
         phoneGo();
         ctNum01 = subSliderGo($(".article04-01"), chlidNum01, phoneInitNum, ctNum01);
         ctNum02 = subSliderGo($(".article04-02"), chlidNum02, phoneInitNum, ctNum02);
         ctNum03 = subSliderGo($(".aside01"), chlidNum03, phoneInitNum, ctNum03);
         ctNum04 = subSliderGo($(".aside02"), chlidNum04, phoneInitNum, ctNum04);
         // JavaScript here
         // 當CSS media query計算的視窗寬度小於950px時執行
     } else {

         ctNum01 = subSliderGo($(".article04-01"), chlidNum01, pcInitNum01, ctNum01);
         ctNum02 = subSliderGo($(".article04-02"), chlidNum02, pcInitNum02, ctNum02);
         ctNum03 = subSliderGo($(".aside01"), chlidNum03, pcInitNum03, ctNum03);
         ctNum04 = subSliderGo($(".aside02"), chlidNum04, pcInitNum04, ctNum04);


         // JavaScript here
         // 當CSS media query計算的視窗寬度大於等於950px時執行
     }

 }


 $(window).resize(function() {
     init();


 })
  function removeClassNameAll()
  {
       $('.newsCotorl ul li').removeClass('cotorlActive');
  }

 function phoneGo() {
     $(".topLi").click(function() {
         $(this).siblings('ul').toggle(200);

     });

     $(".navPhone span").click(function() {
         var x = $(this).css("backgroundColor")


         if ($(this).css("backgroundColor") == "rgb(255, 255, 255)") {
             $(this).addClass('navgo');
             $("nav").show(500);
             $(".navFox").show();
         } else {
             $(this).removeClass('navgo');
             $("nav").hide(200);
             $(".navFox").hide();
         }


     });
     $(".navFox").click(function() {
         $("nav").hide(200);
         $(".navFox").hide();

     });


     $(".nav01 li span").click(function() {
         if ($(this).attr('id') != "showSubNav") {
             $(this).attr('id', 'showSubNav');
             $(this).siblings("ul").slideDown(500);
         } else {
             $(this).removeAttr('id');
             $(this).siblings("ul").slideUp(200);
         }


     });
 }
 /*topName 父曾,chlidNum 總共數量,initNum 起始顯示,controlNum 記錄第幾個 */
 function subSliderGo(topName, chlidNum, initNum, controlNum) {

     var allNum = chlidNum - initNum;
     var moveNum = 100 / initNum;

     topName.children(".left").click(function() {

         if (controlNum == allNum) {
             controlNum = 0;
         } else {
             controlNum++;
         }

         $(this).siblings("ul").children("li").first().css("marginLeft", -1 * moveNum * controlNum- 1*controlNum + "%");

     });
     topName.children(".right").click(function() {

         if (controlNum == 0) {
             controlNum = allNum;
         } else {
             controlNum--;
         }
         $(this).siblings("ul").children("li").first().css("marginLeft", -1 * moveNum * controlNum- 1*controlNum  + "%");


     });
     return controlNum;
 }


 // $(window).resize(function() {
 //    if(wW==wH)
 //    {
 //     document.documentElement.style.fontSize = window.innerWidth / 14.4 + 'px'
 //    }
 //    else if(wW==wW)
 //    {
 //     document.documentElement.style.fontSize = window.innerWidth / 14.4 + 'px'
 //    }
 //   else
 //   {

 //   }

 // })
 //   var checkOrientation = function(){

 //         mode = Math.abs(window.orientation) == 90 ? 'landscape' : 'portrait';

 //         // 在 Android 上使用 Opera Mobile 測試, 發現要另外這樣判斷
 //         if ( $.browser.opera )
 //         {
 //             width = screen.width;
 //             height = screen.height;
 //             mode = width > height ? "landscape" : "portrait";
 //         }

 //         // 本例為希望在使用者用橫向瀏覽時，就秀出遮罩或警示訊息
 //         if (mode == 'landscape')
 //         {
 //          document.documentElement.style.fontSize = window.innerWidth / 14.4 + 'px';
 //         } else {

 //         }
 // };

 // window.addEventListener("resize", checkOrientation, false);
 // window.addEventListener("orientationchange", checkOrientation, false);
 // setInterval(checkOrientation, 500);
