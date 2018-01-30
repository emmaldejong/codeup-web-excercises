"use strict";
var x = 1;
while(x < 70000) {
    console.log(x);
    x *= 2;
}
//How do you not start at 1? How does the exercise start at 2?

var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);
// var randomNumber = Math.floor(Math.random() * 5) + 1;
// do {
//     if (randomNumber <= allCones){
//         console.log(randomNumber + ' cones sold...');
//     } else if (randomNumber >= allCones) {
//         console.log('I cannot sell you ' + randomNumber + ', I only have ' + allCones);
//     } else if (randomNumber === 0) {
//         console.log('Yay! I sold them all!');
//     } else {
//
//     }
//     allCones -= randomNumber;
// }while(allCones >= 0);
do {
    console.log('I have ' + allCones);
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log('Amount Sold ' + randomNumber);
    allCones -= randomNumber;
}while(allCones >= 0);
    if(allCones === 0) {
        console.log('Yay, I can go home!');
    }else {
        console.log('I don\'t have that many to sell you');
    }







