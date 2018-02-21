"use strict";
const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit
// PROBLEM 1 HINT - use .map()
const firstLetterOfFruit = fruits.map(function() {
    fruits.forEach(function (fruit) {
        return fruit.charAt(0);
    })
});
console.log(firstLetterOfFruit);

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
// PROBLEM 2 HINT - use .map()
const customerArray = customers.map(function() {
    let newArray = [];
    customers.forEach(function () {
        newArray.push(customers);
    })
});
console.log(customerArray);

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
// PROBLEM 3 HINT - use .filter()
const civilServants = customers.filter(function(n) {
    return customers.occupation === 'Police Officer' || customers.occupation === 'Teacher';
});
console.log(civilServants);


// PROBLEM 4 - determine the average age of customers
// PROBLEM 4 HINT - use .reduce()
const avgAge = customers.reduce((total, age) => total + age) / customers.length;
console.log(avgAge);

//MORE BONUSES
// Given the following array...
// const names = ["John", "Max", "Ronald"];
// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.
// - Create an array where each word is in all caps
// - Create an array where all names have more than 3 letters
// - Create an array of names with only the last two letters of each name
// - Create a total count of all letters
// - Create a string of all letters in alphabetical order
// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
// - Create a string of all vowels in the entire array of names
// - Create a single object with properties



//EVEN MORE BONUSES
// Given the following array...
// const family = [
//     {
//         name: "Karen",
//         gender: "female",
//         age: 29,
//     },
//     {
//         name: "Summer",
//         gender: "female",
//         age: 10,
//     },
//     {
//         name: "Bob",
//         gender: "male",
//         age: 32,
//     },
// ];
// complete the bonuses below...
// - Calculate the average age of family members
// - Create an array of family objects without the age property
// - Create an array of all minors
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and ages



