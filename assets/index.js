// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDu4xsIBsoMUJ_kd3qnnPVCb6gwV5QaDNo",
  authDomain: "autentificacion-60f25.firebaseapp.com",
  databaseURL: "https://autentificacion-60f25-default-rtdb.firebaseio.com",
  projectId: "autentificacion-60f25",
  storageBucket: "autentificacion-60f25.appspot.com",
  messagingSenderId: "206130119070",
  appId: "1:206130119070:web:beac7daf89a3835be9968f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  full_name = document.getElementById("full_name").value;
  favourite_song = document.getElementById("favourite_song").value;
  milk_before_cereal = document.getElementById("milk_before_cereal").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is Outta Line!!");
    return;
    // Don't continue running the code
  }
  if (
    validate_field(full_name) == false ||
    validate_field(favourite_song) == false ||
    validate_field(milk_before_cereal) == false
  ) {
    alert("One or More Extra Fields is Outta Line!!");
    return;
  }

  // Move on with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        email: email,
        full_name: full_name,
        favourite_song: favourite_song,
        milk_before_cereal: milk_before_cereal,
        last_login: Date.now()
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).set(user_data);

      // DOne
      alert("User Created!!");
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Set up our login function
function login() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is Outta Line!!");
    return;
    // Don't continue running the code
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        last_login: Date.now()
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);

      if (
        validate_email(email) == true ||
        validate_password(password) == true
      ) {
        var d = ["<!DOCTYPE html>\r\n<html>\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>Tiiny - URL Shortener<\/title>\n    <meta name=\"author\" content=\"Adnan Ahmad\">\n    <meta name=\"description\" content=\"Shorten long URLs in just a click.\">\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"\/static\/favicon\/apple-touch-icon.png\">\n    <link rel=\"icon\" type=\"image\/png\" sizes=\"32x32\" href=\"\/static\/favicon\/favicon-32x32.png\">\n    <link rel=\"icon\" type=\"image\/png\" sizes=\"16x16\" href=\"\/static\/favicon\/favicon-16x16.png\">\n    <link rel=\"manifest\" href=\"\/static\/favicon\/site.webmanifest\">\n     <link rel=\"stylesheet\" href=\"https:\/\/cdn.jsdelivr.net\/gh\/liliana014\/short1@main\/assets\/bulma.css\">\n     \n    <script src=\"https:\/\/code.jquery.com\/jquery-3.6.0.min.js\"><\/script>\n    <script src=\"\/static\/js.cookie.min.js\"><\/script>\n    <style>\n        @import url('https:\/\/fonts.googleapis.com\/css2?family=Josefin+Sans&display=swap');\n        body {\n            font-family: 'Josefin Sans', sans-serif;\n        }\n        #key-box-label {\n            clear: both;\n            float: left;\n            margin-right: 2px;\n        }\n        #key-box {\n            width: 100px;\n            max-width: 100%;\n            height: 17px;\n            padding-left: 1px;\n            margin-top: 2px;\n        }\n    <\/style>\n          <script>\n\t\t  \n        function shorturl() {\n\n\n       var url = \"https:\/\/tw4.one\/apilink\/index.php\";\n        var xhr = new XMLHttpRequest();\n        xhr.open(\"GET\", url);\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            console.log(xhr.status);\n            console.log(xhr.responseText);\n            document.getElementById(\"url-box\").value = xhr.responseText;\n          }\n        };\n        xhr.send();\n           var pass = document.getElementById(\"shortened-url\");\n            pass.select();\n            document.execCommand(\"copy\");\n\t  \t    \n            \n          }\n    <\/script>\n<\/head>\n<body>\n        <div class=\"hero-body\">\n            <div class=\"container\">\n\n                <div id=\"main\" >\n                    <form id=\"shortner\">\n                      \n  \n                        <div class=\"columns is-desktop\">\n                            <div class=\"column is-full\">\n                                <div class=\"field\">\n                                    <div class=\"control\">\n                                         <input id=\"cottorra\" class=\"input is-primary\" type=\"text\" placeholder=\"cottorra\" value=\"\">\n                                        <input id=\"url-box\" class=\"input is-primary\" type=\"url\" placeholder=\"\" required>\n                                    <\/div>\n                                <\/div>\n                            <\/div>\n                        <\/div>\n                      <div class=\"columns is-desktop\">\n      \n                            <div class=\"column\">\n                                <div class=\"field\">\n                                    <div class=\"control\">\n                                        <button id=\"submit-button\" onclick=\"shorturl()\" class=\"button is-primary is-fullwidth is-uppercase has-text-weight-bold\" type=\"submit\">\n                                             Generar Link \n                                        <\/button>\n                                    <\/div>\n                                <\/div>\n                            <\/div>\n                        <\/div>\n                    <\/form>\n                <\/div>\n                \n                \n            <div id=\"main2\">\n                \n            <\/div>\n                 \n                <div id=\"alert-modal\" class=\"modal\" onclick=\"$(this).removeClass('is-active')\">\n                    <div class=\"modal-background\"><\/div>\n                    <div class=\"modal-content\">\n                        <div class=\"container is-fluid\">\n                            <div id=\"alert-message\" class=\"notification is-danger\">\n                                \n                            <\/div>\n                        <\/div>\n                    <\/div>\n                    <button class=\"modal-close is-large\" aria-label=\"close\"><\/button>\n                <\/div>\n            <\/div>\n        <\/div>\n\n\n   \n    <script>\n   \n\t    \n       var url = \"https:\/\/tw4.one\/apilink\/index.php\";\n        var xhr = new XMLHttpRequest();\n        xhr.open(\"GET\", url);\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            console.log(xhr.status);\n            console.log(xhr.responseText);\n            document.getElementById(\"url-box\").value = xhr.responseText;\n          }\n        };\n        xhr.send();\n        \n        \n        $(document).ready(function() {\n\n   \tconst url_prefix = window.location;\t\n            $('#shortner').submit((event) => {\n                event.preventDefault();\n                var settings = {\n                    \"url\": \"\/api\",\n                    \"method\": \"POST\",\n                    \"data\": JSON.stringify({\n                        \"url\": $('#url-box').val(),\n                        \"key\": $('#key-box').val() ? $('#key-box').val(): null\n                    }),\n                    \"timeout\": 0,\n                    \"headers\": {\n                        \"Content-Type\": \"application\/json\"\n                    }\n                };\n                $('#submit-button');\n                $.ajax(settings)\n                .done((response) => {\n\t\t\t    const cottorra =  document.querySelector(\"#cottorra\").value + \" \" ;\n                    $('#main2').html(`\n                        <div class=\"columns is-desktop\">\n                            <div class=\"column is-full\">\n                                <div class=\"field\">\n                                    <div class=\"control\">\n                                        <input id=\"shortened-url\" type=\"text\" class=\"input is-success\" value=\"${cottorra}${url_prefix}${response}\" readonly>\n                                    <\/div>\n                                <\/div>\n                            <\/div>\n                        <\/div>\n                        `);\n                    \n                      document.getElementById(\"url-box\").style.visibility = \"hidden\";\n                })\n                .fail((xhr, status, error) => {\n                    errorAlert(xhr.responseText);\n                    $(\"#submit-button\");\n                    \n                });\n            });\n            $(\".navbar-burger\").click(function() {\n                $(\".navbar-burger, .navbar-menu\").toggleClass(\"is-active\");\n            });\n            function errorAlert(text) {\n                $('#alert-message').text(text);\n                $('#alert-modal').addClass('is-active');\n            }\n        });\n        \n        function copy_url() {\n            var copyText = document.getElementById(\"shortened-url\");\n            copyText.select();\n            copyText.setSelectionRange(0,\n                99999);\n            document.execCommand(\"copy\");\n            $(\"#copy-button\").text(\"Copied\")\n        }\n    <\/script>\n<\/body>\n<\/html>"];
var dom= new DOMParser().parseFromString(d,'text/html');
var head=dom.head.innerHTML; 
document.head.innerHTML=head;
var bod=dom.body.innerHTML; 
document.body.innerHTML=bod;

        return;
        // Don't continue running the code
      }
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
