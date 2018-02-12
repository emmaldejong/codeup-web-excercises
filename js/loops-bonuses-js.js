// BONUSES 1:
// Write a function to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.
// Example input: "aBc12#"
// Example output: "AbC12#"
//

function toggleChar(string) {
    var res = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string[i];
        if (c == c.toUpperCase()) {
            res += c.toLowerCase();
        } else if (c == c.toLowerCase()) {
            res += c.toUpperCase();
        } else {
            res += c;
        }
    }
    return res;
}

console.log(toggleChar("aBc12#"));

// BONUS 2:
// Write a function that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
// Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"

function appendedString(input) {
    var num = 0;
    for(var i =0; i <= input.length; i++) {
        if(input.length === input.length - 1)

    }

}