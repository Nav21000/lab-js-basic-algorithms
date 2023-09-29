// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
// console.log("I'm ready!")

// Step 1
let hacker1 = "Armando"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "John"
console.log(`The navigator's name is ${hacker2}`);

// Step 2
let longestName = '';
let longestNameLength = 0;

if (hacker1.length > hacker2.length) {
    longestName = hacker1;
    longestNameLength = hacker1.length;
} else if (hacker1.length < hacker2.length) {
    longestName = hacker2;
    longestNameLength = hacker2.length;
} else {
    longestNameLength = hacker1.length;
}

if (longestName === '') {
    console.log(`Wow, you both have equally long names, ${longestNameLength} characters!`);
} else if (longestName === hacker1) {
    console.log(`The driver has the longest name, it has ${longestNameLength} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${longestNameLength} characters.`);
}

// Step 3.1
let driverNameInCaps = '';
for (let i = 0; i < hacker1.length; i++) {
    driverNameInCaps += hacker1[i].toUpperCase() + ' ';
}
console.log(driverNameInCaps.trim());

// Step 3.2
let navigatorNameReversed = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

// Step 3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
