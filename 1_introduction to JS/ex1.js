// Request a user’s name and display the response “Hello, [name]”.

let name = prompt("Enter your name");
console.log("Hello " + name);



// Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 

let yearOfBirth = prompt("Enter the year of birth");
const currentYear = 2023;
let age = currentYear - yearOfBirth;
console.log(age);



 // Request a length of a side of a square from a user and display the perimeter of the square. 

let sideLenght = prompt("Enter the lenght of a side of a square");
let perimeter = sideLenght * 4;
console.log(perimeter);



 // Request a radius of a circle and display the area of such a circle. 

let radius = prompt("Enter the radius");
const pi = 3.14;
let area = pi * radius ** 2;
console.log(area);



// Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.

let distance = prompt("Enter the distance in km");
let time = prompt("Enter the time (hours)");
let speed = console.log(distance / time + "km/h");



// Request user’s name, age, country of birth and display them in the console in different lines with different colors to be easily visible

let userName = prompt("Enter the name");
let userAge = prompt("Enter the age");
let country = prompt("Enter the country of birth");
let nameStyles = "color:green";
let ageStyles = "color: yellow";
let countryStyles = "color: red"
console.log("%cuserName", nameStyles);
console.log("%cuserAge", ageStyles);
console.log("%ccountry", countryStyles);

// Ask 10 questions and display the answers in a short text in an alert

let questionOne = prompt("What is your name?");
alert("Your name is " + questionOne);
let questionTwo = prompt("What is your age?");
alert("Your age is " + questionTwo);
let questionThree = prompt("Where are you from?");
alert("You live in " + questionThree);
let questionFour = prompt("What is your favorite book?");
alert("Your favorite book is " + questionFour);
let questionFive = prompt("What is your favorite movie?");
alert("Your favorite movie is " + questionFive);
let questionSix = prompt("What is your favorite animal?");
alert("Your favorite animal is " + questionSix);
let questionSeven = prompt("What is your favorite drink?");
alert("Your favotite drink is " + questionSeven);
let questionEight = prompt("How many hours a day do you read?");
alert("You read " + questionEight + " hours a day.");
let questionNine = prompt("What is your favorite car?");
alert("Your favorite car is " + questionNine);
let questionTen = prompt("Who is your favorive singer?");
alert("Your favorite singer is " + questionTen);

// Show in the console what is going to be your age in 2025, 2029 and 2050, using a single variable

let birthYear = prompt("what is your birth year?");
alert("Your age in 2025 will be = " + (2025 - birthYear));
alert("Your age in 2029 will be = " + (2029 - birthYear));
alert("Your age in 2050 will be = " + (2050 - birthYear));

//  challenges

// Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.

let USD = prompt("Enter you money in USD");
const rate = 1.12;
console.log("It will be = " + USD / rate + "EUR");

// A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive.

let storageGB = prompt("Enter the number of GB");
let storageMB = storageGB * 1024;
let fileSize = 820;
console.log("You can store = " + storageMB / fileSize);

// A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left.

let money = prompt("Enter your ammount of money");
let price = prompt("How much does a chocolate costs?");
let quantity = parseInt(money / price);
let change = money - price * quantity;
console.log("You can buy " + quantity);
console.log("Your change " + change);

// The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.

let depositAmountONE = prompt("Enter the price for the first month");
let depositAmountTWO = prompt("Enter the price for the second month");
let total = depositAmountONE + depositAmountTWO;
let yearlyRate = 0.05;
let sumOfInterest = total * (yearlyRate / 12) * 2;
console.log("The sum of interest is " + sumOfInterest.toFixed(2));
