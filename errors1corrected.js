// This example program is meant to demonstrate errors.
 
// There are some errors in this program.
// Now look at the error messages and find and fix the errors.


console.log ("Welcome to the error program");
//Syntax error: forgot to enclose string in parentheses
//Format error:Inconsistent indentation 

console.log ("\n");
//Syntax error: forgot to enclose string in parentheses
//Syntax error: lower case 'c' for console.log

//Logical error: DELETED let ageStr = "24 years old"
//Syntax error:A comparison operator was used instead of an assignment operator 
//Logical error: A string has been declared instead of a numeric. 

let age = 24; 
// Reference error: forgot to declare the 'age' variable
// Syntax error: Incorrect function name (Integer instead of parseInt)
//Logical error:Variables ageStr and age can be merged into one variable
//Syntax error: Forgot semicolon to make end of statement.

let three = 3.5;
//Format error: Inconsistent indentation 
//Logical error:Numeric data type is expected
//Logical error: Valued is expected to be 3.5 to reach the desired output (330)
let answerYears = age + three;
let answerMonths = answerYears*12;
//Reference error x2:Unable to access variable as it has not been declared. (answerMonths and answer)
//Syntax error: missing semi-colon
    
    console.log(`I'm ${age} years old.`);
    //Syntax error: There is no space between the string "I'm" and the variable age.
    //Syntax error: There is no space between the variable age the string "years old"
    console.log (`In 3 years and 5 months, I'll be ${answerYears} years old`);
    // Syntax error: forgot to enclose string in parentheses
    //Syntax error: Missing spaces 
    //Logical error: String re-written to put answerYears within context 
    console.log (`In 3 years and 5 months, I'll be ${answerMonths} months old.`);
    //Syntax error: forgot to enclose string in parentheses
    //Logical error:Change from 6 months to 5 months to equal 330 months old


//HINT, 330 months is the correct answer

// Additional errors:
//Inconsistent indentation within related lines of code e.g. Declared variables and console.log statements.
//Unstructured code. Related statements are ungrouped. 
//No use of comments. 
