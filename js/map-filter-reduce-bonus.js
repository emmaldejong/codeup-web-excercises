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
const firstLetterOfFruit = fruits.map(fruit => fruit.charAt(0));
console.log(firstLetterOfFruit);

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
// PROBLEM 2 HINT - use .map()

const customerArray = customers.map(customer => {
        return {name: customer.name, age: customer.age}
});
console.log(customerArray);

//Ryan's Solution
// customers.map(function ({name, age}) {
//     return {
//         name,
//         age
//     };
// });

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
// PROBLEM 3 HINT - use .filter()
const civilServants = customers.filter(function(customer) {
    return customer.occupation === 'Police Officer' || customer.occupation === 'Teacher';
});
console.log(civilServants);

//Ryan's Solution with Deconstruction Applied
// const civilServants = customers.filter(({occupation}) => {
//     return occupation === 'Police Officer' || occupation === 'Teacher';
// });

// PROBLEM 4 - determine the average age of customers
// PROBLEM 4 HINT - use .reduce()
const avgAge = customers.reduce((total, customer) => {
    return total + customer.age / customers.length;
}, 0);
console.log(avgAge);

//MORE BONUSES
// Given the following array...
const names = ["John", "Max", "Ronald"];
// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.
//TODO
// const lastName = names.map(fullName => (fullName);
// console.log(lastName);

// - Create an array where each word is in all caps
const allCaps = names.map(name => name.toUpperCase());
console.log(allCaps);

// - Create an array where all names have more than 3 letters
const threeLetters = names.filter(name => name.length > 3);
console.log(threeLetters);

// - Create an array of names with only the last two letters of each name
//TODO
// - Create a total count of all letters
//TODO
// - Create a string of all letters in alphabetical order
//TODO
// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
//TODO
// - Create a string of all vowels in the entire array of names
//TODO
// - Create a single object with properties
//TODO



//EVEN MORE BONUSES
// Given the following array...
const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];
// complete the bonuses below...
// - Calculate the average age of family members
const averageAge = family.reduce((total, person) => {
    return total + person.age;
}, 0) /family.length;
console.log(averageAge);

// - Create an array of family objects without the age property
// TODO
const ageNone = family.filter({age});
console.log(ageNone);

// - Create an array of all minors
const minorAge = family.filter(function (age) {
    return age.age < 18;
});
console.log(minorAge);

//Shorthand Solution with Deconstruction
// let minorAge = family.filter(({age}) => {
//     return age < 18;
// });

// - Calculate the total age combined of family members
const totalAge = family.reduce((total, person) => {
    return total + person.age;
}, 0);
console.log(totalAge);

// - Create an array of only female family member objects
const onlyFemale = family.filter(function (familyMember) {
   return familyMember.gender === 'female';
});
console.log(onlyFemale);

// - Create a single object with properties containing arrays of all names, genders, and ages
const output = {
    names: family.map(obj => obj.name),
    genders: family.map(obj => obj.gender),
    ages: family.map(obj => obj.age)
};

console.log(output);