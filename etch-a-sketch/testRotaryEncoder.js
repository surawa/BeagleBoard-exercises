// Tests the rotary encoder function

var b = require('bonescript');
var pinA = 'P9_26',
    pinB = 'P9_24';
    
var rre = require('./readRotaryEncoder.js');

rre.readRotaryEncoder(pinA, pinB, CWcallback, CCWcallback);

function CWcallback() {
    console.log('Turned CW');
}

function CCWcallback() {
    console.log('Turned CCW');
}

setTimeout(detach, 20000);

function detach() {
 b.detachInterrupt(pinA);
 b.detachInterrupt(pinB);
 console.log("All Done!");
}