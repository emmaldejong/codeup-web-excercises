"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

// 1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// let threeLanguages = users.filter(function(user) {
//     return user.languages.length >= 3;
// });
// console.log(threeLanguages);

    //use es6 syntax and refactor
const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

//2. Use .map to create an array of strings where each element is a user's email address
// let emailAddress = users.map(function(email) {
//     return email.email;
// });
// console.log(emailAddress);

    //use es6 syntax and refactor
const emailAddress = users.map(email => email.email);
console.log(emailAddress);

    //other methods of writing solution
//let arrayOfEmails = [];

//users.forEach((element) => {
//  arrayOfEmails.push(element.email);
//});

// let arrayOfEmails = users.map((element) => {
//     return element.email;
// });
//
// let arrayOfEmails = users.map(({email}) => email);
//
// console.log(arrayOfEmails);

//3. Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user
const reduceArray = users.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, {});
console.log(reduceArray);
