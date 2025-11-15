alert("JavaScript is now connected!"); 
let studentName = "Mashael Shaker"; 
const course = "Web Development"; 
var year = 2025; 
alert("Welcome " + studentName + " to " + course + " (" + year + ")");
let enteredName = prompt("What is your name?"); 
if (enteredName) { 
alert("Hello " + enteredName + "!"); 
} else { 
alert("You didn’t enter your name!"); 
} 

let major = prompt("Enter your major: CS / AI"); 
switch (major) { 
case "CS": 
alert("Computer Science — Excellent choice!"); 
break; 
case "AI": 
alert("Artificial Intelligence — The future!"); 
break; 
default: 
alert("Major not recognized"); 
} 
function greetUser() { 
let name = prompt("Enter your name:"); 
// If user cancels prompt, name will be null 
alert(name ? ("Nice to meet you, " + name + "!") : "Hello there!"); 
} 
// Call functions 
greetUser(); 
function calculateSum(a, b) { 
return a + b; 
} 
// Call functions 
alert("The sum of 5 and 7 is: " + calculateSum(5, 7));
alert("Current page URL is:\n" + location.href); 
let go = confirm("Do you want to visit Umm Al-Qura University website?"); 
if (go) { 
location.href = "https://uqu.edu.sa"; 
} 