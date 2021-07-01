window.onload = function() {
  $("#firstO").addClass("active");
 

};
var flag1 = false;
var flag2 = false;
var flag3 = false;

$("#firstO").mouseover(function () {
  if(flag3 == true)
   {
  $("#firstO").addClass("active");
  $("#thirdO").addClass("active");
  $("#secondO").removeClass("active");
   }
   else if(flag2 == true)
   {
    
    $("#firstO").addClass("active");
    $("#thirdO").removeClass("active");
    $("#secondO").addClass("active"); 
   }
   else
   {
    $("#firstO").addClass("active");
    $("#thirdO").removeClass("active");
    $("#secondO").removeClass("active"); 
   }
    
   
     
    });

    $("#menuOPtions").mousemove(
      function()
      {
        
          if(flag3 == true)
       {
      $("#firstO").removeClass("active");
      $("#thirdO").addClass("active");
      $("#secondO").removeClass("active");
       }
       else if(flag2 == true)
       {
        
        $("#firstO").removeClass("active");
        $("#thirdO").removeClass("active");
        $("#secondO").addClass("active"); 
       }
       else
       {
        $("#firstO").addClass("active");
        $("#thirdO").removeClass("active");
        $("#secondO").removeClass("active"); 
       }
        }
      
    );
   
    
    

    

    $("#secondO").mouseover(function () {


      if(flag3 == true)
      {
           
  $("#firstO").removeClass("active");
  $("#thirdO").addClass("active");
  $("#secondO").addClass("active");
      }
      else if(flag2 == true){
    
  $("#firstO").removeClass("active");
  $("#thirdO").removeClass("active");
  $("#secondO").addClass("active");
      }
      else
      { $("#firstO").addClass("active");
      $("#thirdO").removeClass("active");
      $("#secondO").addClass("active");

      }
    
   
     
    });
    $("#thirdO").mouseover(function () {
      if(flag3 == true)
      {
    
      $("#thirdO").addClass("active");
      $("#firstO").removeClass("active");
      $("#secondO").removeClass("active");
      }
      else if(flag2 == true)
      {
        
      $("#thirdO").addClass("active");
      $("#firstO").removeClass("active");
      $("#secondO").addClass("active");
      }
      else
      { $("#thirdO").addClass("active");
      $("#firstO").addClass("active");
      $("#secondO").removeClass("active");

      }
        
       
         
        });







$("#secondO").click(function () {
  $("#firstO").removeClass("active");
  $("#thirdO").removeClass("active");
  $("#secondO").addClass("active");
  flag2 = true;
  flag1 = false;
  flag3 = false;
    
    $("#ALL").fadeOut(300);
    
    $("#SEAFOOD").fadeIn(300);
    
        
    $("#CHICKEN").fadeOut(300);
     
    });


    
$("#firstO").click(function () {

    flag1 = true;
    flag2 = false;
    flag3 = false;
  $("#firstO").addClass("active");
  $("#thirdO").removeClass("active");
  $("#secondO").removeClass("active");
    
    $("#ALL").fadeIn(300);
    
    $("#SEAFOOD").fadeOut(300);
    $("#CHICKEN").fadeOut(300);         
              
});
    
    $("#thirdO").click(function () {
      $("#thirdO").addClass("active");

      $("#firstO").removeClass("active");
      $("#secondO").removeClass("active");
      flag3 = true;
      flag1 = false;
      flag2 = false;

        $("#ALL").fadeOut(300);  
        $("#SEAFOOD").fadeOut(300);
        $("#CHICKEN").fadeIn(300);
              
    });

    $(".img-container").mouseenter(function(){
      var EachImg = $(this).find(".img-text-1");
      var EachImg2 = $(this).find(".img-text-2");
      
      $(this).find(".text-container").css({backgroundColor : "rgba(0,0,0,0.3)"});

      EachImg.css({display:"inline"});
      EachImg2.css({display:"inline"});
      
      EachImg.animate({
        marginBottom : "40px",
      },200);


    })


    $(".img-container").mouseleave(function(){
      var EachImg = $(this).find(".img-text-1");
      var EachImg2 = $(this).find(".img-text-2");

      EachImg.css({display:"none"});
      EachImg2.css({display:"none"});

      EachImg.animate({
        marginBottom : "60px",
      },200);


    $(".text-container").css({backgroundColor : "transparent"});
    })




// drop down
$(".countries").click(function() 
{
    $("#navDropList1").slideToggle('2000');
});
