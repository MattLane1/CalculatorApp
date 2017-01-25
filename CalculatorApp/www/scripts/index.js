// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);


    //- Using a function pointer:
    document.getElementById("0").onclick = onButtonPress;
    document.getElementById("1").onclick = onButtonPress;
    document.getElementById("2").onclick = onButtonPress;
    document.getElementById("3").onclick = onButtonPress;
    document.getElementById("4").onclick = onButtonPress;
    document.getElementById('5').onclick = onButtonPress;
    document.getElementById("6").onclick = onButtonPress;
    document.getElementById("7").onclick = onButtonPress;
    document.getElementById("8").onclick = onButtonPress;
    document.getElementById("9").onclick = onButtonPress;
    document.getElementById("/").onclick = onButtonPress();
    document.getElementById("X").onclick = onButtonPress();
    document.getElementById("+").onclick = onButtonPress();
    document.getElementById("-").onclick = onButtonPress();


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

        var myTable = document.getElementById("buttons");
        
        console.log("-------Button!!------");
       // console.log(buttonValue);
       // console.log("-------End of Button------");

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();