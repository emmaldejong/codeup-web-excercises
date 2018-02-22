"use strict";
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const wait = (cactus) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cactus);
            }, cactus);
        });
};

wait(2000).then((cactus) => console.log(`Wait finished after ${cactus / 1000} seconds!`));

// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

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