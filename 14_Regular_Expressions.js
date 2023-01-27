
// Regular expression

const emailValidatorRegex = new RegExp("^.+@\..+$");

const userInputOne = "invalidemail@g";
const userInputTwo = "invalidemail@g.com";

const isValidOne = emailValidatorRegex.test(userInputOne);
const isValidTwo = emailValidatorRegex.test(userInputTwo);

console.log(isValidOne);
console.log(isValidTwo);






// Identifiers

const regexOne = new RegExp("favorite");

const string1 = "my favorite food is steak";
const string2 = "my favorite thing to do is code";

console.log(regexOne.test(string1)); // false because "g" not included in string1
console.log(regexOne.test(string2)); // true because "g" included in string2

/favorite/.test(string1); // it is same: regexOne.test(string1)


// All in [ ] is a character group
// .               is any character
// \d or [0-9]     is all numbers
// \s              any white spaces characters
// \w              all letters and numbers (alphanumeric)
// ^               carrot is represents the beginning of a string
    // ^f going to return FALSE because the first letter is not "f" in the strings
    // ^m going to return TRUE
    // f going to return TRUE because "f" included in strings
// (code|steak) going to return TRUE. Matching "code" or "steak" words
// $               backs is represents the end of a string
    // m$ going to return FALSE
    // k$ going to return TRUE for string1

console.log(/k$/.test(string1));





// Quantifiers

/[a-z]*/.exec(string1); // I'm trying to match any lowercase letter 0 or more times
/[a-z]+/.exec(string1); // I'm trying to match any lowercase letter 1 or more times
/[a-z]?/.exec(string1); // I'm trying to match any lowercase letter 0 or 1 quantity
/[a-z ]{5}/.exec(string1); // It's going to get the first five characters




// Advanced search with flag
const regex = /[a-z]+/g;

// node 14_Regular_Expressions.js // FOR RUN