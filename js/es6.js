/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// 1. TODO: fill in your name and email and add some programming languages you know

// 2. TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
// var name = 'your_name_here';
// var email = '';
// var languages = [];

const name = 'emma';
const email = 'dejong.l.emma@gmail.com';
const languages = ['html', 'css', 'javascript'];

// 3. TODO: rewrite the object literal using object property shorthand
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });

users.push({
   name,
   email,
   languages
});

console.log(users);
// 4. TODO: replace `var` with `let` in the following variable declarations
// var emails = [];
// var names = [];

let emails = [];
let names = [];

console.log(emails);
console.log(names);
// 5. TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
users.forEach(user => emails.push(user.email));
console.log(emails);

// users.forEach(function(user) {
//   return names.push(user.name);
// });
users.forEach(user => {
  return names.push(user.name)
});
console.log(names);

//combine the two functions
// users.forEach(user => {
//   emails.push(user.email);
//   names.push(user.name);
// });

// 6. TODO: replace `var` with `let` in the following declaration
// var developers = [];
let developers = [];

users.forEach(function(user) {
  // 7. TODO: rewrite the code below to use object destructuring assignment
  //note that you can also use destructuring assignment in the function
  //parameter definition
                    //you can also do the same thing by passing name, email, languages through the function parameters as above,
                    //that's what the note above means
                    //users.forEach(function(name, email, languages)
                    //if we are inside of a function, why type more in the guts of the function
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  const {name, email, languages} = user;

    // 8. TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(", ")}.`);
});

// 9. TODO: Use `let` for the following variable
// var list = '<ul>';
let list = '<ul>';
// 10. TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for(let developer of developers) {

  // 11. TODO: rewrite the assignment below to use template strings
  //   list += '<li>' + developer + '</li>';
  // list += '</ul>'});
    list += '<li>${developer}</li>';
}
list += '</ul>';

document.body.innerHTML = list;
// document.getElementsByTagName('body')[0].innerHTML = list;
