const fs = require('fs');
const rls = require('readline-sync');
var lg = require('./Logic.js');
var sHapp, sHunger, sTired, sCurEmote;
/*
 *Key
 * 0x = Beginning
 * 1st digit = happiness
 * 2nd digit = hunger
 * 3rd digit = tired
 * 4th digit = current emote
 */
module.exports.run = function() {
   load();
   console.log(sCurEmote);
   console.log(sHapp);
   console.log(sHunger);
   console.log(sTired);
}
function load() {
 sCurEmote = lg.curEmote;
 sHapp = lg.happ;
 sHunger = lg.hunger;
 sTired = lg.tired;
}
