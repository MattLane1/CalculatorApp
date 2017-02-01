// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.


//Globals
var numberOne = 0;
var numberTwo = 0;
var nextValue = false;
var type = null;

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    //Connect the buttons an watch for a click. 
    document.getElementById("0").onclick = function () { if (display.value == 0 || display.value == "ERR") display.value = ""; display.value += "0"; if (nextValue == false) numberOne = ((numberOne * 10) + 0); else numberTwo = ((numberTwo * 10) + 0); };
    document.getElementById("1").onclick = function () { if (display.value == 0 || display.value == "ERR") display.value = ""; display.value += "1"; if (nextValue == false) numberOne = ((numberOne * 10) + 1); else numberTwo = ((numberTwo * 10) + 1); };
    document.getElementById("2").onclick = function () { if (display.value == 0 || display.value == "ERR") display.value = ""; display.value += "2"; if (nextValue == false) numberOne = ((numberOne * 10) + 2); else numberTwo = ((numberTwo * 10) + 2); };
    document.getElementById("3").onclick = function () { if (display.value == 0 || display.value == "ERR") display.value = ""; display.value += "3"; if (nextValue == false) numberOne = ((numberOne * 10) + 3); else numberTwo = ((numberTwo * 10) + 3); };
    document.getElementById("4").onclick = function () { if (display.value == 0 || display.value == "ERR") display.value = ""; display.value += "4"; if (nextValue == false) numberOne = ((numberOne * 10) + 4); else numberTwo = ((numberTwo * 10) + 4); };
    document.getElementById("5").onclick = function () { if (display.value == 0 || display.value == "ERR") display.value = ""; display.value += "5"; if (nextValue == false) numberOne = ((numberOne * 10) + 5); else numberTwo = ((numberTwo * 10) + 5); };
    document.getElementById("6").onclick = function () { if (display.value == 0 || display.value == "ERR") display.value = ""; display.value += "6"; if (nextValue == false) numberOne = ((numberOne * 10) + 6); else numberTwo = ((numberTwo * 10) + 6); };
    document.getElementById("7").onclick = function () { if (display.value == 0 || display.value == "ERR") display.value = ""; display.value += "7"; if (nextValue == false) numberOne = ((numberOne * 10) + 7); else numberTwo = ((numberTwo * 10) + 7); };
    document.getElementById("8").onclick = function () { if (display.value == 0 || display.value == "ERR") display.value = ""; display.value += "8"; if (nextValue == false) numberOne = ((numberOne * 10) + 8); else numberTwo = ((numberTwo * 10) + 8); };
    document.getElementById("9").onclick = function () { if (display.value == 0 || display.value == "ERR") display.value = ""; display.value += "9"; if (nextValue == false) numberOne = ((numberOne * 10) + 9); else numberTwo = ((numberOne * 10) + 9); };

    document.getElementById("C").onclick = function () { display.value = 0; numberOne = 0; numberTwo = 0; nextValue = false; type = null; }; 
    document.getElementById("/").onclick = function () { display.value = 0; type = "/"; nextValue = true; };
    document.getElementById("X").onclick = function () { display.value = 0; type = "X"; nextValue = true; };
    document.getElementById("+").onclick = function () { display.value = 0; type = "+"; nextValue = true; };
    document.getElementById("-").onclick = function () { display.value = 0; type = "-"; nextValue = true; };
    document.getElementById("=").onclick = calculate;

    function calculate() {

        nextValue = false;

        switch (type)
        {
            case "+":
                if (numberTwo != 0) {
                    display.value = (numberOne + numberTwo);
                    numberOne = (numberOne + numberTwo);
                    numberTwo = 0;
                }
                break;

            case "-":
                display.value = (numberOne - numberTwo);
                numberOne = (numberOne - numberTwo);
                numberTwo = 0;
                break;

            case "X":
                display.value = (numberOne * numberTwo);
                numberOne = (numberOne * numberTwo);
                numberTwo = 0;
                break;

            case "/":
                if (numberOne != 0 && numberTwo != 0) {
                    display.value = (numberOne / numberTwo);
                    numberOne = (numberOne / numberTwo);
                    numberTwo = 0;
                }
                else{
                    display.value = "ERR";
                    numberOne = 0;
                    numberTwo = 0;
                    nextValue = false;
                    type = null;
                }

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

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();