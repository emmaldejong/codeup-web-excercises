'use strict';

// Make a function named sayHello(name) that returns "Hi " + name.
function sayHello(name) {
    return ('Hi ' + name + '!')
}
console.log(sayHello('Bob'));
console.log(sayHello('Emma'));

// Write a function named capitalize(string) that takes a string of any capitalization and uppercases the first character and lowercases the rest of the characters of a string.
function capitalize(string) {
    var firstLetter = string[0].toUpperCase();
    var restOfString = string.substring(1, string.length).toLowerCase();
    return firstLetter + restOfString;
}
console.log(capitalize('FUNCTIONS ARE REALLY HARD, keep practicing!'));

// Write a function named upperCase(string)
function upperCase(string) {
    return string.toUpperCase();
}
console.log("'lisa' upper-cased is: " + upperCase('lisa'));

// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input
}
console.log(identity(299));

// Make a function named isOdd(number)
// function isOdd(number) {
//     if (number%3 == 0)
//         return true;
//     else
//         return false;
// }
// console.log(isOdd(9));
//I used a longer way by using the if else statement, below is a shorter way to do the odd/even and positive/negative exercises
function isOdd(number) {
    return (number % 3 == 0);
}
console.log(isOdd(8));

// Make a function named isEven(number)
function isEven(number) {
    if (number%2 == 0)
        return true;
    else
        return false;
}
console.log(isEven(8));

// Make a function named isPositive(number)
function isPositive(number) {
    if (number >= 0)
        return true;
    else
        return false;
}
console.log(isPositive(8));

// Make a function named isNegative(number)
function isNegative(number) {
    if (number <= 0)
        return true;
    else
        return false;
}
console.log (isNegative(-8));

// Make a function named isBoolean(input)
function isBoolean(input) {
    return (input === "boolean");
}
console.log(isBoolean(true));

// Make a function named isTrue(boolean)
function isTrue(boolean) {
    return (boolean === true);
}
console.log(isTrue(false));

// Make a function named isFalse(boolean)
function isFalse(boolean) {
    return (boolean === false);
}
console.log(isFalse(true));

// Make a function named isTruthy(input)



// Make a function named isFalsy(input)
// Make a function named isVowel(letter)
// Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels
// Make a function named isConsonant(letter)
// Make a function named hasConsonants(string)
// Make a function named isCapital(letter)
// Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
// Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named hasSpaces(string) that returns if a string has any space characters
// Make a function named isZero(number)
// Make a function named increment(number) that returns a number plus one
// Make a function named decrement(number) that returns a number minus one
// Make a function named isFive(input)
// Make a function named addFive(input) that adds five to some input.
// Make a function named isMultipleOfFive(input)
// Make a function named isThree(input)
// Make a function named isMultipleOfThree(input)
// Make a function named isMultipleOfThreeAndFive(input)
// Write a function named lowerCase(string)
// Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.
// Write a function named add(a, b) that returns the sum of a and b
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
// Make a function named isNumeric(input) returns true/false if the input is a number or numeric string
// Make a function named trim(string) that removes empty spaces before and after the input.


