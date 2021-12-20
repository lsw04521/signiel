$(function(){

    $(window).scroll(function(){

      var ws=$(this).scrollTop();

      // 오른쪽에서

      if(ws>300){

        $('.s2').css("transform","translateX(0px)").css("opacity","1");

      }

    });

  });