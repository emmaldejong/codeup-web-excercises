(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var myString = planetsArray.join('<br>');
    console.log(document.write(myString));

    planetsArray.unshift('<ul>');
    planetsArray.push('</ul>');
    var newString = planetsArray.join('<li>');
    // planetsArray.pop();
    console.log(document.write(newString.slice(0, newString.lastIndexOf('<li>'))));

// long way

//with join

//with loop

})();
/**BONUS 1:
 Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
 Using multiple functions will be helpful.
 input = 5552324343, output = 555-232-4343
 input = 5553434, output = 555-3434
 input = 18005552323, output = 1-800-555-2323
 Extra Challenge: account for invalid characters
 Extra Challenge: if the input is already formatted, output the unformatted version
 Extra Challenge: allow the parser to accept letters and convert them to the correct numbers**/
//    prompt the user for a phone number
//    we need to add '-' to 3 or 4 positions depending on the length of the string
//    we need multiple functions - what kind?
var phoneNumberString = prompt('Please enter your phone number?');
console.log(phoneNumberString);
function convertPhoneFormat(phoneNumberString) {
    if(phoneNumberString.length === 7) {
        return (phoneNumberString.substring(0, 2) + '-' + phoneNumberString.substring(3, 5) + '-' + phoneNumberString.substring(6, 10));
    } else if(phoneNumberString.length === 10) {
        return
    }else if(phoneNumberString.length === 11) {
        return
    }else {
        return alert('This is not a valid phone number!');
    }
}