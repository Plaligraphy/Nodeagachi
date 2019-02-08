const fs = require('fs');
const rls = require('readline-sync');
var curEmote, happ, hunger, tired;
module.exports.srat = function() {
   curEmote = 0; 
   emote(0);
   happ = 5;
   hunger = 5;
   tired = 5;
   story();
};
module.exports.cont = function() {
fs.readFile("savegame.txt", function read(err,data){
   if(err){throw err;}
	   console.log(String(data));
  });
};
module.exports.cSettings = function() {
     console.log('Settings');
};
function story() {
  checkEmoteStatus();
  cls();
  runtime();
  console.log("Hunger: " + hunger);
  console.log("Happiness: " + happ);
  console.log("Tiredness: " + tired);
  console.log("Action ( Feed, Sleep, Pet ):");
  var opt1 = rls.question("");
  if(opt1.toLowerCase() == "feed") {
     feed();
     randAct();
     story();
  }else if(opt1.toLowerCase() == "sleep"){
     sleep();
     randAct();
     story();
  }else if(opt1.toLowerCase() == "pet"){
     pet();
     randAct();
     story();
  }else{

  }
}
function feed() {hunger-=2; tired++;}
function sleep(){tired--; hunger++;}
function pet() {happ++; tired--;}

function runtime(){emote(curEmote);}

function emote(stat) {
  switch(stat) {
    case 0: //Fine
	console.log("owO");
	break;
    case 1: //Sad
        console.log("owo");
	break;
    case 2: //Happy
	console.log("OwO");
	break;
    case 3: //Anger
	console.log("OwU");
	break;
    case 4: //Dead
	console.log("XwX");
	break;
    case 5: //Suicidal
	console.log("XwU");
	break;
  }
}
function randAct() {
  var rand = Math.floor(Math.random() * 4);
  console.log(rand);
  switch(rand) {
    case 0:
	//Worst
	happ-=2;
	hunger+=2;
	break;
    case 1:
	//Bad
	happ--;
	hunger++;
	break;
    case 2:
	//Better
	happ++;
	hunger--;
	break;
    case 3:
	//Best
        hunger-=2;
	happ+=2;
	break;
  }
}
function cls() {
   var lines = process.stdout.getWindowSize()[1];
    for(var i = 0; i < lines; i++) {
       console.log('\r\n');
	}
}
function checkEmoteStatus() {
 if(happ >= 20) {
   console.log("Nodeagachi has won!");
   process.exit(0);
 }
 if(happ < 1) {
    curEmote = 1;
  }
 if(hunger < 3) {
    curEmote = 3;	
  }
 if(happ > 5) {
    curEmote = 2;
  }
 if(happ < -2) {
    curEmote = 5;
    console.log("Your Nodeagachi Died!");
  }
  if(hunger > 10) {
   curEmote = 4;
   console.log("Your Nodeagachi Died!");
   process.exit(0);
 }
 if(tired < 1) {
    curEmote = 5;
  }
 if(tired > 10) {
     curEmtoe = 3;
     console.log("Your Nodeagachi Died!");
  }
}
