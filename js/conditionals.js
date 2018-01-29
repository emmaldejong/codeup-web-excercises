"use strict";
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 * Can you refactor your code to use functions?
 */
var enterNumber = confirm('Would you like to enter a number?');
    if (enterNumber) {
        var userEnteredNumber = prompt('Enter any number below:');
    }else {
        alert('Operation Canceled!');
    }
    console.log(userEnteredNumber);
        var evenOdd = (userEnteredNumber%2 === 0);
            if (evenOdd) {
                alert(userEnteredNumber + ' is an even number.');
            } else {
                alert(userEnteredNumber + ' is an odd number.');
            }
        var plus100 = (parseInt(userEnteredNumber) + parseInt(100));
            alert(plus100 + ' adds  is your number added with 100.');
        var negPos = (userEnteredNumber >= 0);
            if (negPos) {
                alert(userEnteredNumber + ' is a positive number.');
            } else {
                alert(userEnteredNumber + ' is a negative number.');
            }
//still can't get undefined when cancel is selected to not evaluate to undefined


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(colorName) {
    if (colorName === 'blue'){
        alert(colorName + ' is the color of the sky.');
        return (colorName + ' is the color of the sky.')
    } else if (colorName === 'red'){
        alert('Strawberries are ' + colorName + '.');
        return ('Strawberries are ' + colorName + '.')
    } else if (colorName === 'cyan'){
        alert('I don\'t know anything about ' + colorName + '.');
        return ('I don\'t know anything about ' + colorName + '.')
    } else{
        alert(colorName + ' is not an approved color.');
        return (colorName + ' is not the right color.')
    }
}
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var colorName = prompt('Please enter a color below:');
switch(colorName) {
    case 'blue':
        alert(colorName + ' is the color of the sky.');
        break;
    case 'red':
        alert('Strawberries are ' + colorName);
        break;
    case 'cyan':
        alert('I don\'t know anything about ' + colorName);
        break;
    default:
        alert(colorName + ' is not an approved color.');
        break
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 5){
        return ('Free!');
    } else if (luckyNumber === 4) {
        return (totalAmount - (totalAmount*.5));
    } else if (luckyNumber === 3) {
        return (totalAmount - (totalAmount*.35));
    }else if (luckyNumber === 2) {
        return (totalAmount - (totalAmount*.25));
    }else if (luckyNumber === 1){
        return (totalAmount - (totalAmount*.10));
    } else if (luckyNumber === 0){
        return  ('No Discount :(')
    } else{

    }
}
console.log(calculateTotal(5, 240));
console.log(calculateTotal(4, 240));
console.log(calculateTotal(3, 240));
console.log(calculateTotal(2, 240));
console.log(calculateTotal(1, 240));
console.log(calculateTotal(0, 240));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var randomNumber = Math.floor(Math.random() * 6);
var totalBill = prompt('Please enter the total amount of your Walmart bill below:');
alert('The total Walmart Bill you entered was $' + totalBill);
console.log(totalBill);
alert('YOUR LUCKY NUMBER IS ' + randomNumber);
console.log(randomNumber);
alert('$' + (calculateTotal(randomNumber, totalBill)));
console.log(calculateTotal((randomNumber, totalBill)));

/* ###################################################################################### */
/**
 * Bonus 1.
 Write a function (or multiple functions) that will return
 a boolean depending on if the string value passed to it
 as an argument is the name of a day of the week that starts with a T.
 Otherwise, it should return false.
 Example: dayOfTheWeekStartsWithT("Monday")     => returns false
 Example: dayOfTheWeekStartsWithT("Tuesday")     => returns true
 Example: dayOfTheWeekStartsWithT("Tommy")     => returns false
 */

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var randomDay = days[Math.floor(Math.random() * days.length)];

function dayofTheWeekStartsWithT(dayName) {
    if (dayName === 'Monday'){
        return false;
    } else if (dayName === 'Tuesday'){
        return  true;
    } else if (dayName === 'Wednesday'){
        return false;
    } else if (dayName === 'Thursday'){
        return false;
    } else if (dayName === 'Friday'){
            return false;
    } else if (dayName === 'Saturday'){
        return false;
    } else if (dayName === 'Sunday') {
        return false;
    }
}
console.log(randomDay);
console.log(dayofTheWeekStartsWithT(randomDay));

/** Bonus 2. DONE WITH RYAN
 Write a function, isValidPassword, that takes in a string argument and returns true or false
 depending on whether or not all the following conditions are true:
 1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)
 2) Contains at least one letter and one number
 3) Contains at least one upper and one lower case letter
 4) Only comprised of letters and numbers
 5) EXTRA BONUS: is not the same forwards and backwards

 **/
function isValidPassword(input) {
    var lengthIsGood = input.length == 6;
    var hasAtLeastOneLetter;
    var hasAtLeastOneNumber;
    var hasLowerCaseLetter;
    var hasUpperCaseLetter;
    var alphaNumeric;

    return lengthIsGood && hasAtLeastOneLetter && hasAtLeastOneNumber && hasLowerCaseLetter&& hasUpperCaseLetter && alphaNumeric;
}
function hasLetter(input) {
    input = input.toLowerCase();

    return input.includes('a') || input.includes('b') || input.includes('c')...
}