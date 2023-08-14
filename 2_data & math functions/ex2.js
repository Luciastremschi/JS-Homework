// // Request a username and show a greeting using string template

// let name = prompt("Enter your name");
// alert(`Hello ${name}`);

// // Request names and ages for two children. Check if child 1 is older and if its name is Tim

let nameOne = prompt("Enter child one name");
let ageOne = parseInt(prompt("Enter child one age"));
let nameTwo = prompt("Enter child two name");
let ageTwo = parseInt(prompt("Enter child two age"));

if (nameOne == "Tim" && ageOne > ageTwo) {
  alert("Tim is older");
}

// Request a color and check if the color is on the flag of the Republic of South Africa

let flagColor = ["white", "black", "yellow","blue", "green", "red"];
let color = prompt("Enter a color");

if (flagColor.includes(color)) {
  alert(`The flag contains ${color}`);
} else {
  alert(`The flag doesn't contain ${color}`);
}

// Request a number and check if it is an odd number

let num = prompt("Enter a number");
if (num % 2 == 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}

// Request two numbers, divide them and the result must be an integer(whole number)

let firstNum = parseInt(prompt("Enter the first number"));
let secondNum = parseInt(prompt("Enter the second number"));
alert("The result of the devision " + Math.trunc(firstNum / secondNum));

// Request date of birth, calculate age and show if the person is over 18

let date = prompt("Enter date of birth (YYYY-MM-DD):");
let yourDate = new Date(date);
let today = new Date();

let age = today - yourDate;
let ageInYears = age / (1000 * 60 * 60 * 24 * 365);

if (isNaN(ageInYears)) {
  alert(
    "Invalid date of birth. Please follow the format (YYYY-MM-DD)."
  );
} else {
  alert(`Your age is ${Math.floor(ageInYears)}`);

  if (ageInYears >= 18) {
    alert("You are over 18 years old");
  } else {
    alert("You are under 18 years old");
  }
}

// Request a number, check if it is a number and if it is between 10 and 50

let myNumber = prompt("Enter a number");
if (10 <= myNumber && +myNumber <= 50) {
  alert("Its between 10 and 50");
} else {
  alert("Its not between 10 and 50");
}