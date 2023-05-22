// This example program is meant to demonstrate errors.
 
// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

let animal = "Lion"; 
//Synatx error:missing double quotes to initialise string data type
//Synatx error:missing semicolon to indicate end of statement

let animalType = "cub"; 
//Format error:inconsistent indentation
let numberOfTeeth = 16;
let numberOfLegs = Number(prompt("How many legs does your chosen animal have?"));
//Logical error: Required numeric data type instead of string
//Logical error: Improvement to program. Request user input to complete the if statement

let fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfLegs} legs and ${numberOfTeeth} teeth.`;
//Syntax error:missing semicolon to indicate end of statement
//Syntax error:missing $ in placeholders
//Syntax error:missing backticks 
//Syntax error:missing brackets to enclose the statement
//Logical error: numberOfTeeth and animalType should be swapped around
//Spelling error:animalType and numberOfTeeth have incorrect spelling
//Logical error: numberOfLegs has not been added in the statement
//Reference error:fullSpec not declared as a variable

if (numberOfLegs === 4) {
  console.log(fullSpec)
} else if (numberOfLegs !== 4) {
  console.log("This is not an animal that has four legs.")
};
// Syntax error: missing else if and else statements to complete
// Syntax error:missing brackets for fullSpec
// Reference error:fullSpec variable has incorrect spelling
// Logical error:comparison operator should be used, not an assignment operator
// Format error: Missing indent for console.log


