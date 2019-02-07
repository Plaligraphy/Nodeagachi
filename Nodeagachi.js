//Need to use a time server to avoid cheatin 
//Seperate draw and logic classes (logic will include compute)

const rls = require('readline-sync');
const fs = require('fs');
main();
function main() {
  drawChar();
}

function drawChar() {
 console.log(" .^._.^.  ")
 console.log(" | . . |  ")
 console.log("(  ---  ) ");
 console.log(" .'     '.");
 console.log("|/     \| ");
 console.log(" \ /-\ /  ");
 console.log("  V   V   ");
}
