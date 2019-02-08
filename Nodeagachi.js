//Need to use a time server to avoid cheatin 
//Seperate draw and logic classes (logic will include compute)

const rls = require('readline-sync');
const fs = require('fs');
var logic = require('./Logic.js');
var s = require('./Save.js');
intro();
function intro() {
  console.log("Nodeagachi");
  console.log("***********");
  console.log("1. New game");
  console.log("2. Continue Game");
  console.log("3. Settings");
  console.log("4. Exit");
  var opt = rls.question("");
  switch(parseInt(opt)){
  case 1:
     logic.srat();	
	break;
  case 2:
     s.run();
	break;
  case 3:
     logic.cSettings();
	break;
  case 4: 
      process.exit(0);
	break;
  }
}
module.exports = intro;

