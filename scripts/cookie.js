

//function createCookie(name,value , experDate ) {
/*	var expires = "";
	var date = new Date();
	var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
	expires = "; expires=" + midnight.toGMTString();
	if (!path) {
		path = "/";
	}
    document.cookie = name + "=" + value + expires + "; path=" + path;*/
    //document.cookie = 'foo=bar;path=/;max-age='+5*60+';';
    
    ////document.cookie = name+'='+value+';path=/;max-age='+experDate+';';

//}



function createCookie(name,value,path) {
	var expires = "";
	var date = new Date();
	var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 60);
	expires = "; expires=" + midnight.toGMTString();
	if (!path) {
		path = "/";
	}
	document.cookie = name + "=" + value + expires + "; path=" + path;
}






function addCookie(cookieName,cookieVal,expDate){
    
    //arguments[0]--->cookieName
    //arguments[1]--->cookieVal
    
    //document.getElementById("abc")XXXXX
     //session cookie
  //  document.cookie=cookieName+"="+cookieVal;//////
    
    //persistent cookie
    if(arguments[2]){
        //force expire date after 1 month
       
    document.cookie = cookieName + "=" + cookieVal + ";expires=" + expDate;
    }
    else{
        //session cookie
    document.cookie=cookieName+"="+cookieVal;
    }
}


function setCookie(cookieName,cookieVal,expDate){
    

       
    	

    document.cookie
    =encodeURIComponent(cookieName)+"="+encodeURIComponent(cookieVal)
   +"; path="+"/"+";expires="+expDate;
   
}



function setCookie2(cookieName,cookieVal,expDate , expH  , index , peopleN)
{
    var date = new Date();
    if(date.getHours == expH-1 && date.getMinutes == 59){
        var value = Number(getCookie(index))+ peopleN;
        setCookie(index , (value) , getExpireDate(index , 0));
    }
    
    if(expDate){
       
    
    document.cookie
    =encodeURIComponent(cookieName)+"="+encodeURIComponent(cookieVal)+";expires="+expDate.toUTCString();
    }
    else{
        //session cookie
    document.cookie=cookieName+"="+cookieVal;
    }
}
function deleteAllCookies() {
    console.log("888888888888");
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
function deleteCookie(cookieName)
{   alert("esssssd");
    var tody = new Date('Wed, 14 Jun 2017 00:00:00 PDT');
     document.cookie = cookieName +"=;expires="+today.toUTCString();

}
    var cookiesArr=[];

function ReadCookie() {

               var allcookies = document.cookie;
               
              var cookiearray = allcookies.split(';');
               
               for(var i=0; i<cookiearray.length; i++) {
                 var name = cookiearray[i].split('=')[0].trim();
                 var  value = cookiearray[i].split('=')[1];
                   
            cookiesArr[name]=value ;
                  
               }
    return cookiesArr ;
            }

function hasCookie(cookieName)
 { var cookiesArr = ReadCookie();
    for(var key in cookiesArr)
        {
            if(key == cookieName)
                return true;
        }
               return false;

}
    

function getCookie(cookieName)
{
    ReadCookie();
    return cookiesArr[cookieName];
}

function displayInfo()
{
 

//alert(" welcome");
  var fname = getCookie("fName");
  var lname = getCookie("lName");
  var phone = getCookie("phone");

  
  var DATEoR = getCookie("DATEoR");
  console.log(DATEoR);
  if(DATEoR == "undefined"){}
  else{DATEoR.replace(/%2F/g , '/');}


  var hourp = getCookie("pickedHour");
  var numberOp = getCookie("peopleN");
   document.getElementById("customerDetails").innerHTML =  "welcome "+fname +"  "+lname +"<br>"
   +"your have rserved a table of " +numberOp + "  persons <br> date of reservation is :   " +DATEoR +" at  "+hourp +" AM";

}