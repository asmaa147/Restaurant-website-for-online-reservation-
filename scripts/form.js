//cookie no zero doesnt created
window.onload = function () {
    deleteAllCookies();
    dynamicDateList(".booking-date");

    var allCookie = ReadCookie();
    if (allCookie.length == 0) {
            // creat cookie for today
        //addCookie(0, 50, getExpireDate(0,23));

        for (var i = 0; i < 7; i++) {

           addCookie(i, 50, getExpireDate(i, 23));
        }

    }

};
/*  all the validation based on it  */
var flag = false;

/* fill Date  list in html */

function dynamicDateList(location) {
    var listItems = document.querySelector(location);
    for (var i = 0; i < 7; i++) {
        listItems.options[i + 1].innerHTML = getCurrentDate(i);
    }
}

/*Time  handling*/

function disableDate() {



    var dateListItems = Number(document.querySelector(".booking-date").selectedIndex);
    var timeListItems = document.querySelector(".booking-time");
    for (var i = 1; i < 9; i++) {
        timeListItems.options[i].disabled = false;
        timeListItems.options[i].style.background = 'white';
    }
    if (dateListItems == 1) {
        var today = new Date();
        var h = today.getHours();

        if (h >= 13 && h <= 21) {
            var temp = h - 12;
            for (var i = 0; i <= temp; i++) {
                timeListItems.options[i].disabled = true;
                timeListItems.options[i].style.background = '#f1f1f1';
            }


        }

    }

}


function getExpireDate(day, h) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    
    if (mm == 4 || mm == 6 || mm == 9 || mm == 11) {
        if ((dd + day) > 30) {
            mm = mm + 1;
            dd = dd + day;
            dd = dd % 30;
        }
        else {
            dd += day;
        }
    }
    else if (mm == 2 && yyyy % 4 == 0) {
        if ((dd + day) > 29) {
            mm = mm + 1;
            dd = dd + day;
            dd = dd % 29;
        }
        else {
            dd += day;
        }
    }
    else if (mm == 2 && yyyy % 4 != 0) {
        if ((dd + day) > 28) {
            mm = mm + 1;
            dd = dd + day;
            dd = dd % 28;
        }
        else {
            dd += day;
        }
    }
    else {
        if ((dd + day) > 31 && mm < 12) {
            mm = mm + 1;
            dd += day;
            dd = dd % 31;
        }
        else if ((dd + day) > 31 && mm == 12) {
            yyyy += 1;
            mm = 1;
            dd += day;
            dd = dd % 31;


        }
        else {
            dd += day;
            //alert( "day " + dd); // ok 0 -> day = 4
        }
    }


    
    //var midnight = new Date(yyyy, mm, dd, h, 59, 59).toUTCString();
    var x = "";
    var temp;
    var temp2 = " ";

    //alert(" hour "+ h + " , date " + dd +" " + mm +" " + yyyy ); // ok

    x += h;

   //
   // alert("hour " + h);
    //alert(" hour "+ h + " , date " + dd +" " + mm +" " + yyyy ); //ok
   // alert("x.length = " + x.length); // ok
    if (x.length == 1) {

        var expD = new Date(mm + '-' + dd + '-' + yyyy + ' ' + '0' + h + ':' + 00 + ':' + 00);
       // alert(expD); //ok

     }
    else {
        var expD = new Date(yyyy + '-' + mm + '-' + dd + ' ' + h + ':' + 00 + ':' + 00);
    }

    temp = expD.toString().split(" ");
    for (var i = 1; i < 5; i++) {
        temp2 += temp[i] + " ";

    }

     //alert(expD); //ok 
    // alert(temp2);   //ok 
    return temp2;


}


document.querySelector(".booking-form").addEventListener('submit', reservation);



function reservation(e) {
    e.preventDefault();
    
    if(flag == false)
        return;
    else {
        if (!hasCookie(0)) {
        for (var i = 0; i < 6; i++) {
                
                var value = getCookie((i + 1));
                addCookie(i, value, getExpireDate(i, 23));
                
            }

            addCookie(6, 50, getExpireDate(6, 23));
        }

        /*read reservation info*/
        var peopleList = document.querySelector(".booking-people");
        /*GET number of people*/
        var peopleN = Number(peopleList.value);


        /*get selected date index*/

        var dateListItemN = Number(document.querySelector(".booking-date").selectedIndex);
        dateListItemN -= 1;         //////////////??????????
        var dateOfRE = getCurrentDate(dateListItemN);



        /*check table availability*/
        var availableN = Number(getCookie(dateListItemN));      /////////////////////
        if (peopleN <= availableN) {

            availableN -= peopleN;



            var hourList = document.querySelector(".booking-time");
            var pickedHour = Number(hourList.value);
            var durationList = document.querySelector(".booking-duration");
            var pickedDuration = Number(durationList.value);
            var expH = pickedHour + pickedDuration + 12;

            addCookie("peopleN", peopleN, getExpireDate(dateListItemN, expH));
            addCookie("DATEoR", dateOfRE, getExpireDate(dateListItemN, expH));


            addCookie("pickedHour", pickedHour, getExpireDate(dateListItemN, expH));


            /*Get picked duration*/

            /*expiry calculation of customer cookie*/
            addCookie(dateListItemN, availableN, getExpireDate(dateListItemN, expH));

            // alert("first");
            /*retrive user info*/
            var fName = document.getElementById("fname").value;
            var lName = document.getElementById("lname").value;
            var phone = document.querySelector(".booking-phone").value;

            addCookie("phone", phone, getExpireDate(dateListItemN, expH));
            addCookie("fName", fName, getExpireDate(dateListItemN, expH));

            addCookie("lName", lName, getExpireDate(dateListItemN, expH));
            // alert("second");


            location.replace("welcome.html");
            console.log("before");
            console.log("after");


        }
        else {
            console.log("failed");
            var win = open("Failed.html", "", "width=300,height=300");
            setTimeout(function () { win.close(); }, 3000);


        }
    }
}



/*current date calculation*/
function getCurrentDate(day) {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var h = today.getHours();
    if (h >= 22)
        day += 1;


    if (mm == 4 || mm == 6 || mm == 9 || mm == 11) {
        if ((dd + day) > 30) {
            mm = mm + 1;
            dd = dd + day;
            dd = dd % 30;
        }
        else {
            dd += day;
        }
    }
    else if (mm == 2 && yyyy % 4 == 0) {
        if ((dd + day) > 29) {
            mm = mm + 1;
            dd = dd + day;
            dd = dd % 29;
        }
        else {
            dd += day;
        }
    }
    else if (mm == 2 && yyyy % 4 != 0) {
        if ((dd + day) > 28) {
            mm = mm + 1;
            dd = dd + day;
            dd = dd % 28;
        }
        else {
            dd += day;
        }
    }
    else {
        if ((dd + day) > 31 && mm < 12) {
            mm = mm + 1;
            dd = dd + day;
            dd = dd % 31;
        }
        else if ((dd + day) > 31 && mm == 12) {
            yyyy += 1;
            mm = 1;
            dd += day;
            dd = dd % 31;

        }
        else {
            dd += day;

        }
    }


    today = dd + '/' + mm + '/' + yyyy;
    return today;


}


/*rservation info validation*/

/*date  validation*/




/*user information  validation*/

function validateName(TagPostion, messagePostion) {
    var name = TagPostion.value;

    if (name.length == 0) {
        promptmessage("*requird", "red", messagePostion);

        flag = false;

    }
    else if (!name.match(/^[A-Za-z]+$/)) {
        promptmessage("*Invalid", "red", messagePostion);

        flag = false;
    }
    else {

        promptmessage("", "", messagePostion);

        flag = true;

    }
    return flag;
}

function validatePhone(TagPostion, messagePostion) {
    var phone = TagPostion.value;

    if (phone.length == 0) {
        promptmessage("*requird", "red", messagePostion);
        flag = false;


    }
    else if (!phone.match(/^01[0,1,2,5][0-9]+$/) || phone.length !== 11) {
        promptmessage("*Invalid", "red", messagePostion);

        flag = false;
    }

    else {
        promptmessage("", "", messagePostion);
        flag = true;


    }
    return flag;

}

function promptmessage(message, mColor, position) {
    document.getElementById(position).innerHTML = message;
    document.getElementById(position).style.color = mColor;
    document.getElementById(position).style.display = "block";
    document.getElementById(position).style.textAlign = "left";
}




