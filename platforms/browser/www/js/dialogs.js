

document.addEventListener("deviceready", init, false);

function init() {

//get the button id
document.getElementById("dialogAlert").addEventListener("click", dialogAlert);

function dialogAlert() {
   var message = "I am Cordova Alert Dialog! From cordova-plugin-dialogs";
   var title = "Dialog Alert Open";
   var buttonName = "SOUNDS NOT BAD";
	
   navigator.notification.alert(message, alertCallback, title, buttonName);

   function alertCallback() {
      console.log("Alert is Dismissed!");
   }
	
}

   
}
