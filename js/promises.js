"use strict";
console.info("WAIT FUNCTION #1");
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const wait = delay => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(delay);
            }, delay);
        });
};

wait(3000).then((delay) => console.log(`Wait finished after ${delay / 1000} seconds!`));

// console.info("GITHUB COMMIT CHECK #2");
// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

const lastCommit = username => {
    const url = `https://api.github.com/users/${username}/events/public`;
    const options = {
        headers: {
            'Authorization': '5e486985d84767d4d688aa9eb55b0842546e34f4'
        }
    };
    return fetch(url, options)
        .then(response => response.json())
        .then(data => data[0].created_at);
};
console.log(lastCommit('emmaldejong').then(lastCommitDate => console.log(lastCommitDate)));
