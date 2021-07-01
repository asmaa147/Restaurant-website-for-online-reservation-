
    function sendRequest(request, cb){
        
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){

            if (xhr.readyState == 4) {
                if (xhr.status == 200){
                    var data  = JSON.parse(xhr.responseText);
                    cb(data);
                }     
            }        
        }    

        xhr.open("GET",request);
        xhr.send('');
    }

    // sendRequest("https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese",function(data){

    //     console.log(data);

    // });

    function test(arrayofMeals)
    {  
        for(var i = 0 ; i < arrayofMeals.length  ; i++)
        {
            (function(){
                var j = i ;
                 sendRequest("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+ arrayofMeals[i].idMeal,function(data){

                    var temp =  document.querySelectorAll(".meal-cat-" + j);
                    var img  = document.querySelectorAll(".jp-img-" + j);
                    console.log(img);
                    console.log(Meal);
                
                    for(var count = 0 ; count < temp.length ; count++)
                    {
                        temp[count].textContent = data.meals[0].strCategory;
                        img[count].src = data.meals[0].strMealThumb;
                    }                      
                 });

            })();
    
        }
    }


    /*
    
var mealsData = [];
var counter = 0 ;

var meals = [new XMLHttpRequest(),new XMLHttpRequest(),
    new XMLHttpRequest(),new XMLHttpRequest(),
    new XMLHttpRequest(),new XMLHttpRequest(),
    new XMLHttpRequest()];

*/





    /*
    meals[0].onreadystatechange = function() {
       
        if (meals[0].readyState == 4) {
            if (meals[0].status >= 200){
        

                mealsData[counter] = JSON.parse(meals[0].responseText);
                meals[1].open("GET", "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + Meal.meals[1].idMeal);
                meals[1].send('');
          
                counter++;

            }
                
        }
    }


    meals[1].onreadystatechange = function() {
       
        if (meals[1].readyState == 4) {
            if (meals[1].status >= 200){
           

                mealsData[counter] = JSON.parse(meals[1].responseText);
                meals[2].open("GET", "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + Meal.meals[2].idMeal);
                meals[2].send('');
              
                counter++;

            }
                
        }
    }

    meals[2].onreadystatechange = function() {
       
        if (meals[2].readyState == 4) {
            if (meals[2].status >= 200){
    
              
                mealsData[counter] = JSON.parse(meals[2].responseText);
                meals[3].open("GET", "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + Meal.meals[3].idMeal);
                meals[3].send('');
          
                counter++;

            }
                
        }
    }

    meals[3].onreadystatechange = function() {
       
        if (meals[3].readyState == 4) {
            if (meals[3].status >= 200){
    
           
                mealsData[counter] = JSON.parse(meals[3].responseText);
                meals[4].open("GET", "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + Meal.meals[4].idMeal);
                meals[4].send('');
               
                counter++;

            }
                
        }
    }

    meals[4].onreadystatechange = function() {
      
        if (meals[4].readyState == 4) {
            if (meals[4].status >= 200){
    
         
                mealsData[counter] = JSON.parse(meals[4].responseText);
                meals[5].open("GET", "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + Meal.meals[5].idMeal);
                meals[5].send('');
               
                counter++;

                }
            }            
        }

    meals[5].onreadystatechange = function() {
       
        if (meals[5].readyState == 4) {
            if (meals[5].status >= 200){
    
             
                mealsData[counter] = JSON.parse(meals[5].responseText);
                meals[6].open("GET", "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + Meal.meals[6].idMeal);
                meals[6].send('');
            
                counter++;

            }
                
        }
    }

    meals[6].onreadystatechange = function() {
      
        if (meals[6].readyState == 4) {
            if (meals[6].status >= 200){
              
                mealsData[counter] = JSON.parse(meals[6].responseText);
          
                counter++;
                End();
            }
                
        }
    }


// var temp ;
// var Data = [] ;

*/

var Meal ;
var randomXhr = new XMLHttpRequest();






function Start(){
    var temp ;
    for(var i = 0 ; i < 8 ; i++)
    {
        document.querySelector(".jp-img-" + i ).src = Meal.meals[i].strMealThumb;
        temp = document.querySelectorAll(".meal-name-" + i);  
        for(var j = 0 ; j < temp.length ; j++)
        {
            temp[j].innerHTML = Meal.meals[i].strMeal;
        }
       
    }  
    
    
    document.querySelector(".container-1").style.display ="block";
}

/*
function End (){
    var counter = 0 ;
    var temp ;
    for(var i = 0 ; i < 7; i++)
    {

         document.querySelectorALL(".meal-cat-" + i).innerHTML = mealsData[i].meals[0].strCategory;

         if(mealsData[i].meals[0].strCategory == "Seafood")
        {
            document.querySelector(".jp-img-8").src = Meal.meals[i].strMealThumb;
        }
        else if (mealsData[i].meals[0].strCategory == "Chicken")
        {
            if(counter == 0 && mealsData[i].meals[0].strCategory == "Chicken")
            {
                document.querySelector(".jp-img-9").src = Meal.meals[i].strMealThumb;
                counter++;
            }else{
                
                document.querySelector(".jp-img-10").src = Meal.meals[i].strMealThumb;
            }
           
        }

        temp = document.querySelectorAll(".meal-cat-" + i);
        for(var j = 0 ; j < temp.length ; j++)
        {

            temp[j].innerHTML =  mealsData[i].meals[0].strCategory;
        }

        
    }
    
    


    document.querySelector(".img-container").onmouseover = function(){

        document.querySelector(".img-text-1").style.display = "inline";

    }

    document.querySelector(".img-container").onmouseleave = function(){

        document.querySelector(".img-text-1").style.display = "none";
    }
}

*/
randomXhr.onreadystatechange = function() {
   
    if (randomXhr.readyState == 4) {
        if (randomXhr.status >= 200){
            Meal = JSON.parse(randomXhr.responseText);
            Start();
            test(Meal.meals);
        }
            
    }
}

randomXhr.open("GET", "https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian");
randomXhr.send('');
