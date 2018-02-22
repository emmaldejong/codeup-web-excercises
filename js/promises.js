"use strict";
//###################################################################################################################
// 1. Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const wait = (cactus) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Wait finished after ${cactus / 1000} seconds!`);
            }, cactus);
        });
};
//wait is the function and cactus is whatever you are going to pass through that function
//you don't need any argument parameter in the setTimeout() because we pass when it should stop thru cactus


wait(2000).then((data) => console.log(data));
wait(3400).then((data) => console.log(data));
wait(4600).then((data) => console.log(data));

//###################################################################################################################

// 2. Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.
//DON'T PUSH YOUR KEY TO GITHUB
// const lastCommit = username => {
//     fetch(`https://api.github.com/users/${username}/repos`,
//         {headers: {'Authorization': '1726fc6dd8b4516b05ae18bd9eb792a862296946'}})
//         .then(response => response.json())
//         .then(data => console.log(data));
// };
// lastCommit("emmaldejong");

const lastCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events`,
        {headers: {'Authorization': '1726fc6dd8b4516b05ae18bd9eb792a862296946'}})
        .then(response => response.json())
        .then(events => events[0].created_at);
};

const users = [
    {name: 'Emma', username: 'emmaldejong'},
    {name: 'Zach', username: 'zgulde'},
    {name: 'Ryan', username: 'ryanorsinger'}
];

users.forEach(user => {
    lastCommit(user.username).then(lastCommitDate => {
        console.log(`${user.name}'s last commit was ${lastCommitDate}`);
    });
});

//JORDAN'S EXPLANATION OF PROMISES
//synchronous code
// fetch(make a call to a server in china)
//     .....call takes like 10 seconds
// function LoadOurPage() {}
//notes: this page takes forever to load and sucks for the user

//asynchronous code
// new Promise(ok, i'll start a request to the server in china') {
//     look, it's going to take a while'
//     so go ahead and run the rest of the code
//     i promise when i connect to the API i'll give you the code you need'
//}).then( (the data i promised you) => console.log(here you go!};

//now we can skip to...

//function LoadOurPage() {}

//notes: this page loads much better because we can run the rest of the code while we are connecting to the server
//Promises let the code continue while the data is being fetched
//so you can think of Promises as an IOU





