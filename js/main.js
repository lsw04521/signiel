$(function(){

    $(window).scroll(function(){

      var ws=$(this).scrollTop();

      // about

      if(ws>350){

        $('#about').css("transform","translateY(0px)").css("opacity","1");

      }

      // about

      if(ws>1000){

      $('#service').css("transform","translateY(0px)").css("opacity","1");
      
      }

      // trevi

      if(ws>1500){

      $('.m_box').css("transform","translateY(0px)").css("opacity","1");
      
      }

      // banner_case

      if(ws>1700){

      $('.banner_case').css("transform","translateY(0px)").css("opacity","1");
      
      }

      // room

      if(ws>2000){

      $('#room').css("transform","translateY(0px)").css("opacity","1");
      
      }

      // room_case

      if(ws>2200){

      $('.room_case').css("transform","translateY(0px)").css("opacity","1");
      
      }

    });

  });

  //menu

  $(function(){
    $("#menu").click(function () {
      $(".b").slideToggle()
    });
  });