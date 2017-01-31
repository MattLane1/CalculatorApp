// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.


//Globals
var numberOne = 0;
var numberTwo = 0;

var type;

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    //    //- Using a function pointer:
    // document.getElementById("0").onclick = function () { if (numberOne == ER) numberOne = 0; else numberTwo = 0; display.value = "0" };
    //document.getElementById("0").onclick = function () { if (numberOne == ER) numberOne = 1; else numberTwo = 1; display.value = "1" };
    // document.getElementById("0").onclick = function () { if (numberOne == ER) numberOne = 2; else numberOne = 2; display.value = "2" };

    //- Using a function pointer:
    document.getElementById("0").onclick = function () { display.value = "0"; if (numberOne == 0) numberOne = 0; else numberTwo = 0; };
    document.getElementById("1").onclick = function () { display.value = "1"; if (numberOne == 0) numberOne = 1; else numberTwo = 1; };
    document.getElementById("2").onclick = function () { display.value = "2"; if (numberOne == 0) numberOne = 2; else numberTwo = 2; };
    document.getElementById("3").onclick = function () { display.value = "3"; if (numberOne == 0) numberOne = 3; else numberTwo = 3; };
    document.getElementById("4").onclick = function () { display.value = "4"; if (numberOne == 0) numberOne = 4; else numberTwo = 4; };
    document.getElementById("5").onclick = function () { display.value = "5"; if (numberOne == 0) numberOne = 5; else numberTwo = 5; };
    document.getElementById("6").onclick = function () { display.value = "6"; if (numberOne == 0) numberOne = 6; else numberTwo = 6; };
    document.getElementById("7").onclick = function () { display.value = "7"; if (numberOne == 0) numberOne = 7; else numberTwo = 7; };
    document.getElementById("8").onclick = function () { display.value = "8"; if (numberOne == 0) numberOne = 8; else numberTwo = 8; };
    document.getElementById("9").onclick = function () { display.value = "9"; if (numberOne == 0) numberOne = 9; else numberTwo = 9; };

    document.getElementById("/").onclick = function () { type = "/" };
    document.getElementById("X").onclick = function () { type = "X" };
    document.getElementById("+").onclick = function () { type = "+" };
    document.getElementById("-").onclick = function () { type = "-" };

    document.getElementById("=").onclick = calculate;

    function calculate() {

        switch (type)
        {
            case "+":
                display.value = (numberOne + numberTwo);
                break;

            case "-":

                break;

            case "X":

                break;

            case "/":

                break;

            case "SQRT":

                break;
        }
    }

    function onDeviceReady() {  
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onButtonPress(buttonValue) {

        console.log("-------Button!!------");

           console.log(buttonValue)

        console.log("-------DONE BUTTON!!------");

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();