'use strict';

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

function plusMinus(arr) {
    const countTotal = arr.length;
    let countPositive=0, countNegative=0, countZero=0;
    arr.forEach( number => {
        if(number>0){ countPositive++ }
        else if( number<0 ){ countNegative++ }
        else{ countZero++ }
    })
    console.log( (countPositive/countTotal).toFixed(6) )
    console.log( (countNegative/countTotal).toFixed(6) )
    console.log( (countZero/countTotal).toFixed(6) )
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}
