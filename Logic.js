//Main class of Nodeagachi
//Created by Evan Carter
const fs = require('fs');
const rls = require('readline-sync');

module.exports.srat = function() {
    curEmote = 0;
    emote(0);
    happ = 5;
    hunger = 5;
    tired = 5;
    story();
};
module.exports.cont = function() {
    fs.readFile("savegame.txt", function read(err, data) {
        if (err) {
            throw err;
        }
        console.log(String(data));
    });
};
module.exports.cSettings = function() {
    console.log('Settings');
};

function story() {
    cls();
    recall();
    checkEmoteStatus();
    runtime();
    console.log("Hunger: " + hunger);
    console.log("Happiness: " + happ);
    console.log("Tiredness: " + tired);
    console.log("Action ( Feed, Sleep, Pet ):");
    var opt1 = rls.question("");
    if (opt1.toLowerCase() == "feed") {
        feed();
        randAct();
        story();
    } else if (opt1.toLowerCase() == "sleep") {
        sleep();
        randAct();
        story();
    } else if (opt1.toLowerCase() == "pet") {
        pet();
        randAct();
        story();
    } else {

    }
}
function feed() {
    hunger -= 2;
    tired++;
}

function sleep() {
    tired--;
    hunger++;
}

function pet() {
    happ++;
    tired--;
}

function runtime() {
    emote(curEmote);
}

function emote(stat) {
    switch (stat) {
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
    var rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            //Worst
            happ--;
            hunger++;
            break;
        case 1:
            //Bad
            happ++;
            hunger++;
            break;
        case 2:
            //Better
            happ+=2;
            hunger--;
            break;
    }
}

function cls() {
    var lines = process.stdout.getWindowSize()[1];
    for (var i = 0; i < lines; i++) {
        console.log('\r\n');
    }
}

function checkEmoteStatus() {
    if (happ >= 20) {
        console.log("Nodeagachi has won!");
        saveRL();
    }
    if (happ < 1) {
        curEmote = 1;
    }
    if (hunger < 3) {
        curEmote = 3;
    }
    if (happ > 5) {
        curEmote = 2;
    }
    if (happ < -2) {
        curEmote = 5;
        console.log("Your Nodeagachi Died!");
        saveRL();
    }
    if (hunger > 10) {
        curEmote = 4;
        console.log("Your Nodeagachi Died!");
        saveRL();
    }
    if (tired < 1) {
        curEmote = 5;
    }
    if (tired > 10) {
        curEmote = 3;
        console.log("Your Nodeagachi Died!");
        saveRL();
    }
}

function saveRL() {
    console.log('Save or exit');
    var opt4 = rls.question("");
    if (String(opt4) == "save") {
        console.log("ran");
        var conts = "0x" + happ + hunger + tired + curEmote;
        console.log(conts);
        var parsed = String(conts);
        fs.writeFile("savegame.txt", parsed, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("saved");
        });
    } else if (opt4 == 'exit') {
        process.exit(0);
    }
}
function recall() {
  fs.readFile("savegame.txt", function read(err, data) {
     if(err){throw err;}
     console.log(data);
  });
}
//Current bug: Once save is selected then you have to type in anything to end the loop
// Ex: Save then type "ex" or just press enter
