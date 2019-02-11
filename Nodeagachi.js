//Need to use a time server to avoid cheatin
//Seperate draw and logic classes (logic will include compute)
const rls = require('readline-sync');
const fs = require('fs');
var logic = require('./Logic.js');
iro();

module.exports.intro = function() {
    iro();
}

function iro() {
    console.log("Nodeagachi");
    console.log("***********");
    console.log("1. New game");
    console.log("2. Continue Game");
    console.log("3. Settings");
    console.log("4. Exit");
    var opt = rls.question("");
    switch (parseInt(opt)) {
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
	case 5:
	    logic.cont();
	    break;
    }
}
