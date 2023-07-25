//Reminder for using VAR/LET/CONSTS in js.

//Use const when you have a value that should not change throughout the program. 
//This provides better readability and makes it clear that the value should remain constant.

//Use let when you have a variable that needs to be reassigned during the execution of the program
//or when you need block-scoping for the variable.

//Avoid using var in modern JavaScript development as it has some drawbacks, such as hoisting and function scope
//which can lead to unexpected behavior. Instead, prefer let and const for better code maintainability and clarity.
const max = 57;
let actual = max - 13;
let percentage = actual / max ;
