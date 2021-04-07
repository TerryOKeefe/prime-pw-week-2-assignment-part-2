// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set the value as Dane as a string.
// We check if name is an exact match of the string Mary. If so we console log 'Hi, Mary'
// Mary does not match the name variable so it moves to the else statement.
// Since name and 'Mary' do not match we console log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Make a variable called secret that is undefined and make a variable called code with a value of 123 as a number.
// We make a conditional if code exactly matches value of 123 then secret is defined as 'super'. Multiply the code variable by 2.
// Make a second conditional that if code is greater than the value of 250, secret is then defined as 'duper'.
// We console log secret where the output is 'super' since the value of code is 246.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

// I placed a console log of code here to see the value of code.
// I thought the greater than sign was a less than sign to which 'duper' should have shown in the console as well. :(

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Variable isStudent set to true as boolean. Variable age set to 34 as a number. Variable zip set to 55407 as a number.
// Conditional if both isStudent = true and zip is greater than 8000 then we console log 'You're a student on the West Coast!'.
// Since zip is less than 80000 it does not console log.
// Code second conditional if isStudent === false or age is less than 30. If one or the other is true then console log 'What are your hobbies?'
// Neither is true. Third conditional if isStudent === true. This is true so we console log 'Welcome to Prime!'.
// If none of the above conditionals are true then we console log 'How about the weather?'. This doesn't run as the third conditional is true.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne-- variable is set to red. Instructions ask to set to blue
// Should be let colorOne = 'blue'
let colorOne = 'red';

// FIX - colorTwo-- variable is set to blue. Instructions ask to set to red.
// Should be let colorTwo = 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}

// FIX - console.log-- Add console log to output the string 'purple'.
// console.log(colorOne) - This will display 'purple' in the console.
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;

// FIX - time-- time is a constant resulting conditional to always be true.
// Should be let time = 4.
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
// FIX - let age-- age variable already declared.
// Switch variable to let myAge = 21.
let age = 21;
const minAge = 21;

// FIX - minAge <= myAge-- less than or equal to used, instructions say greater than or equal to.
// Should be myAge >= minAge.
if(minAge <= age) {

// FIX - no entry-- console log to no entry, instructions want 'enter'.
// Should be console.log('enter').
  console.log('no entry');

} else {

// FIX - enter-- console log to enter, this should be switched to 'no entry' to go along with the above fix.
// Should be console.log('no entry').
  console.log('enter');
}
*/
