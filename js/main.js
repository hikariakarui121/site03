$(function(){
  $('.h-btn').on('click',function(){
      $(this).toggleClass("-active");
      $('#nav').toggleClass("-active");
  })
});

// スクロール
$('a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top -60;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});


// aosについて
AOS.init({
  easing: 'ease-in',
  duration: 800,
  once: true,
})

//スライダー
const swiper = new Swiper('.swiper', {
  
  slidesPerView: 1,
  spaceBetween: 30,
  effect:'fade',
  speed: 2000,
  loop:true,

  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
  },

});


const slider1 = new Swiper('.slider1', {
  slidesPerView: 1,
  spaceBetween:30,
  // slidesOffsetBefore: 30,
  centeredSlides:true,
  // speed:5000,
  loopAdditionalSlides:10,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
}

});

   