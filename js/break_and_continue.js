"use strict";
//QUESTION BREAK AND CONTINUE #1 ###############################
var oddNumber;
// var count = 0;
while (true) {
    oddNumber = prompt("Please enter an ODD number: ");
    if (oddNumber % 3 === 0) {
            break;
    }
}
console.log(oddNumber + " is an odd number.");
//QUESTION BREAK AND CONTINUE #2 ###############################
// for (var i = 1; i < 50; i++) {
//     i = prompt('enter an even number');
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }