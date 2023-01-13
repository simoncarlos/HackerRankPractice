'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function timeConversion( s ) {

    const times = s.split(":");
    const amHour= times[2].includes("AM");
    
    times[2] = times[2].replace(/[^\d]/g, '');

    if( amHour && times[0] == "12" ) times[0] = "00";
    else if( !amHour && parseInt(times[0]) < 12  ) times[0] = `${ parseInt(times[0]) + 12 }`;

    return `${times[0]}:${times[1]}:${times[2]}`
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}