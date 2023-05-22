//Write a program with two compilation errors, a runtime error and a logical error

//Compilation error: Missing semicolons
let number = 3
let age = 23;

//Compilation error: Unbalanced brackets
let birthday = Number(prompt("Please enter your D.O.B:");


//runtime error: stack overflow error
function countDown(n) {
    console.log(n);//Missing base case meaning the recursive function has no way of stop calling itself
    countDown(n - 1)
  };
  
  countDown(5);
  
  //runtime error: out-of-bound error
  let string = "Safa";
  for (i=0;i<5;i++){
   console.log (string[i]);
    };

  //logical error: Incorrect comparison operators and missing Number function to convert string input to numeric
  let input = prompt("Please enter a number: ");
  if (input == 3)
        console.log("You entered the number 3.")
    else {
        console.log("The number you entered is not 3.")
    };




  