$(document).ready(function() {

  /****************** start Nav Bar ********************/
  $('.links li a').first().css({color:'#e28141d3'});
  $('.links li a').click(function() {
      $('.links li a').not(this).css({color:'#000'});
      $(this).css({color:'#e28141d3'});  
  });
   
           /*  Adjust Droplist   */
   $(".countries").click(function() 
   {
       $("#navDropList1").slideToggle('2000');
   });
  
           /*  Adjust scroll Nav   */
   var flag = 0;
   $(window).scroll(function () {
       var scrollPercent = 1000 * $(window).scrollTop() / ($(document).height() - $(window).height());
       console.log(scrollPercent);

       if (scrollPercent > 60) {
           if (flag == 0) {
               $(".nav").css({
                   position: "fixed",
                   width: "100%",
                   height: 0,
                   backgroundColor : "#fff",
                   color : "black",
               }).animate({ height: "70px" });
               console.log("here");
               flag = 1;
           }

       } else if (scrollPercent < 80){

           if (flag == 1) {
               $(".nav").animate({ height: "0" },0, function () {

                   $(".nav").css({
                       position: "relative",
                       top: 0,
                       height: 0,
                       backgroundColor : "rgba(0, 0, 0, 0)",
                       color : "white"
                   })

               });
               flag = 0;
           }
       }
   });
/****************** End Nav Bar ********************/
/****************** Start Header slider ************/
           /* Adjust Header Height */
    $('.header').height($(window).height());
   
            /* Adjust Slider Height */
    var heightcontent = parseInt( ($(window).height()-$('.contentSlide').height()) /2)+"px";
    $('.contentSlide').css('marginTop' , heightcontent);

    var heightcontent = parseInt( ($(window).height()-$('#NextPrev').height()) /2)+"px";
    $('#NextPrev').css('marginTop' , heightcontent);

           /* Adjust Slider moving */
    var timer ;
    function moveSlide ()
    {
        $("#slide1").fadeToggle('3000');
        timer = setTimeout(moveSlide,3000);   
    }
    moveSlide ();       

    $(".next").click(function(){
        clearTimeout(timer);
        // $("#slide1").stop(true);
        $("#slide1").fadeToggle();
        timer = setTimeout(moveSlide,3000);
    });
    $(".prev").click(function(){
        clearTimeout(timer);
        // $("#slide1").stop(true);
        $("#slide1").fadeToggle('1000');
        timer = setTimeout(moveSlide,3000);
    });

/****************** End Header slider ************/
/****************** Start special section slider **********/

    var flag1 = true;
    var flag2 = false;
    var flag3 = false;
    
    function slideShow()
    {
        if(flag1 == true)
        {
            
            DIV1();
        
        }
        else if(flag2 == true)
        {
            DIV2();
        }
        else
        {
            DIV3();
        }
    }
    slideShow();
   
    // var timer = 
    // setInterval(function(){document.getElementById("sliderContainer").dispatchEvent(myevent) ;} , 4000);

    function DIV1()
    {
    document.getElementById("page1").style.display ="block";
        
            document.getElementById("page2").style.display ="none";
            document.getElementById("page3").style.display ="none";
            document.getElementById("po1").style.opacity = "1";
            document.getElementById("po2").style.opacity = "0.6";
            document.getElementById("po3").style.opacity = "0.6";


            flag1 = false;
            flag2 = true;
            flag3 =false;
            var timer = setTimeout( slideShow , 4000);
    }

    function DIV2()
    {
    document.getElementById("page2").style.display ="block";
            document.getElementById("page3").style.display ="none";
            document.getElementById("page1").style.display ="none";
            document.getElementById("po1").style.opacity = "0.6";
            document.getElementById("po2").style.opacity = "1";
            document.getElementById("po3").style.opacity = "0.6";
        
            flag2 = false;   
            flag1 = false;
            flag3 = true;
            var timer = setTimeout( slideShow , 4000);
    }

    function DIV3()
    {
    document.getElementById("page3").style.display ="block";
            document.getElementById("page2").style.display ="none";
            document.getElementById("page1").style.display ="none";  
            document.getElementById("po1").style.opacity = "0.6";
            document.getElementById("po2").style.opacity = "0.6";
            document.getElementById("po3").style.opacity = "1";
            flag3 = false;
            flag2 = false;   
            flag1 = true;
            var timer = setTimeout( slideShow , 4000);
    }
 
/****************** End special section slider ************/
/****************** Start gallary section ************/
    //autoplay slider    
    setInterval(function () {
        moveRight();
        }, 3000);

    var slideWidth = $('.gallary img').width();

    function moveRight() {
        $('.gallary').animate({ left: + slideWidth }, 300, function () {
            $('.gallary img:first-child').appendTo('.gallary');
        });
    };

    //popup
    var imgNum;
    $(".gallary-img").click(function(){
        imgNum = $(this).attr('id');
        $clickedPic = $(this).attr('src');
        $("#popup-img").attr("src", $clickedPic);
        $(".photo-describtion").text("gallary photo "+imgNum);
        $(".photo-number").text(imgNum);
        $("#gallary-popup").css("visibility","visible");
        console.log("here1");
    });


    $("#forward-arrow").click(function(){
        if(imgNum < 5 ){
            imgNum++;
        }
        else{
            imgNum = 1;
        }
        $("#popup-img").attr("src", "images/white-home-img-gallery"+ imgNum +".jpg");
        $(".photo-describtion").text("gallary photo "+imgNum);
        $(".photo-number").text(imgNum);
        console.log("here2");
    });

    $("#back-arrow").click(function(){
        if(imgNum > 1){
            imgNum--;
        }
        else{
            imgNum = 5;
        }
        $("#popup-img").attr("src", "images/white-home-img-gallery"+ imgNum +".jpg");
        $(".photo-describtion").text("gallary photo "+imgNum);
        $(".photo-number").text(imgNum);
        console.log("here3")
    });

    $(".popup-exit").click(function(){
        $("#gallary-popup").css("visibility","hidden");
        console.log("here3");
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            $("#gallary-popup").css("visibility","hidden");
            }   // esc
    });

    $("#gallary-popup").click(function(e){

        if(e.target.tagName == "DIV") {
        $("#gallary-popup").css("visibility","hidden");
        }
    });


    

});
