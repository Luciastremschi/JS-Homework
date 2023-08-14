// Request a three-digit number from a user and check whether it has identical digits in it.

let number = prompt("Enter three-digit number");
if ((number[0] == number[1]) == number[2]) {
  alert("Digits are equal");
} else {
  alert("Digits are not equal");
}

// Request a five-unit number from a user and check whether it is a palindrome.

let num = prompt("Enter 5 digit polyndrome");
if (
  num[0] == num[num.length - 1] &&
  num[1] == num[num.length - 2]
) {
  alert("The number is a polyndrome");
} else {
  alert("The number is not a polyndrome");
}

// Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. S

let amount = prompt("Enter the amount");
let currency = prompt("Enter the currency");

if (currency == "EUR") {
  amount = (amount / 1.103).toFixed(3);
  alert(`In eur = ${amount}`);
}  else if (currency == "AUD") {
  amount = (amount / 0.67).toFixed(3);
  alert(`In AUD = ${amount}`);
} else {
  alert(`There is not such currency`);
}

// Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.

let circleLength = parseInt(prompt("Enter the circle circumference"));
let diameter = Math.PI * circleLength;

let perimeter = parseInt(prompt("Enter the square perimeter"));
let oneLength = perimeter / 4;

if (diameter <= oneLength) {
  alert("The circle will fit in the square");
} else {
  alert("The circle will not fit in the square");
}

// Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.

let inputDate = prompt("Enter a date (dd:mm:yy):");
let [day, month, year] = inputDate.split(":").map(Number);

let date = new Date(year, month - 1, day + 1);

alert(`The next date is: ${date.toLocaleDateString("en-GB")}`);


// Request an email, check if it bigger than 20 character and if it includes @

let email = prompt("Enter your email");

if (email.length >= 20 && email.includes("@")) {
  alert("The email has more than 20 characters and contains @");
} else {
  alert("The email has less than 20 characters or doesnt contain @");
}

