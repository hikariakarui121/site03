$(function(){
  $('.h-btn').on('click',function(){
      $(this).toggleClass("-active");
      $('#nav').toggleClass("-active");
  })
});