
    function saveValues()
    {
        localStorage.email = document.getElementById("1").value;
        localStorage.password = document.getElementById("2").value;
    }
    function loadValues()
    {
        document.getElementById("1").value = localStorage.email;

       document.getElementById("1").value = localStorage.password;
    }







var editId;

var API_URL = {

    LOGIN: 'http://localhost:8010/customerInformation',
    
};
window.Login = {

    loggedUser: null,


    logOut: function(event){
    //perform log out (the page is reloaded and the login modal is displayed)
         $(".showOnLogged").hide();

         location.reload();;
    },

    login: function(event) {

    //get user name and password values from the inputs
     var username = $(event.target).parents(".login-container").find('input[name="email"]').val(),
         pass = $(event.target).parents(".login-container").find('input[name="password"]').val();

     $.ajax({
            //set the URL and method for login
            url: API_URL.LOGIN,
            method: "GET",
            //set the @RequestParam for needed for the loginController
            data: jQuery.param({ email: username, password : pass}) ,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        }).done(function (response) {
            //print the response from java inn console for debugging purposes only
            console.log("response from java", response);
           // debugger; // if not commented - add a debugger point
            if (response) {
            localStorage.currentCustomer = response;
            window.location.replace("index.html")
            }
            else {

                   //display "Username and Password don't match / User does not exist" text
                   $("#userIncorrect").css({"display":"block","color":"red"});
                   //clear the inputs
                   $(".form-control[name='email']").val('');
                   $(".form-control[name='password']").val('');
            }

        }).fail(function(response) {
                        console.log("fail");
                        console.log(response);

                   // show database connection not working

                   $("#userIncorrect").css({"display":"block","color":"red"});

                   $(".form-control[name='email']").val('');
                   $(".form-control[name='password']").val('');
        });
        console.log("userName and password match");
        event.preventDefault();
        return false;
    },



   register: function(event) {

        //email and password values from inputs
         var username = $(event.target).parents(".login-container").find('input[name="email"]').val(),
             pass = $(event.target).parents(".login-container").find('input[name="password"]').val();

         $.ajax({

                url: API_URL.LOGIN,
                method: "POST",

                    data: JSON.stringify({ 'email': username, 'password' : pass}) ,
                contentType: 'application/json',

            }).done(function (response) {
                //print the response from java inn console for debugging purposes only
                console.log("response from java", response);
               // debugger;
                localStorage.currentCustomer = response;
                window.location.replace("index.html")
            }).fail(function(response) {
                            console.log("fail");
                            console.log(response);

                       // show database connection not working

                       $("#userIncorrect").css({"display":"block","color":"red"});

                       $(".form-control[name='email']").val('');
                       $(".form-control[name='password']").val('');
            });
            console.log("userName and password match");
            event.preventDefault();
            return false;
        },


//    load: function () {
//    //load the table
//        $.ajax({
//            url: API_URL.LOAD_STORE + window.Login.loggedUser,
//            method: "GET"
//        }).done(function (response) {
//            Login.display(response);
//        });
//    },
//
//
// getRow: function(listItem) {
//
//        return ``;
//    },
//
};
//Login.bindEvents();