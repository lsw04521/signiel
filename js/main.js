//menu

  $(function(){
    $("#menu").click(function () {
      $(".b").slideToggle()
    });
  });

  //review
$(function(){
  function left() {
      $('#guest_container li:last').prependTo('#guest_container');
      $('#guest_container').css('margin-left', -373);
      $('#guest_container').stop().animate({ marginLeft: 0 }, 800);
  }

  function right() {
      $('#guest_container').stop().animate({ marginLeft: -373 }, 800,function () {
          $('#guest_container li:first').appendTo('#  guest_container');
          $('#guest_container').css({ marginLeft: 0 });
      });
  }
  
  function slide() {
      $('#guest_container').stop().animate({ marginLeft: -373 },800, function () {
          $('#guest_container li:first').appendTo('#guest_container');
          $('#guest_container').css({ marginLeft: 0 });
      });
  }
  
  setInterval(slide, 5000);
  
  $('.review_left').click(function(){
      left();
  });
  
  $('.review_right').click(function(){
      right();
  });
});