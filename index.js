// Iteration 1: Names and Input
const hacker1 = "Tommy";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jon";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name it has ${hacker1.length} characters!`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems the navigator has the longest name. It has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// let newString = "";
// for (const value of hacker1) {
//    newString += value.toUpperCase() + " ";
//    console.log(newString)
// }

const driver = "Tommy";

let reverseString = " "; 

for (let i = 0; i < driver.length; i++) {
    reverseString = driver[i] + reverseString;
    console.log(reverseString)
}