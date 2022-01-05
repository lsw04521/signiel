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
      $('#guest_container').css('margin-left', -386);
      $('#guest_container').stop().animate({ marginLeft: 0 }, 800);
  }

  function right() {
      $('#guest_container').stop().animate({ marginLeft: -386 }, 800,function () {
          $('#guest_container li:first').appendTo('#  guest_container');
          $('#guest_container').css({ marginLeft: 0 });
      });
  }
  
  function slide() {
      $('#guest_container').stop().animate({ marginLeft: -386 },800, function () {
          $('#guest_container li:first').appendTo('#guest_container');
          $('#guest_container').css({ marginLeft: 0 });
      });
  }
  
  setInterval(slide, 3000);
  
});