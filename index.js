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

// Print the characters of the driver's name, separated by space, and [in capital letters]




// Print all the characters of the navigator's name, in reverse order
const driver = "Tommy";

let reverseString = " "; 

for (let i = 0; i < driver.length; i++) {
    reverseString = driver[i] + reverseString;
    console.log(reverseString)
}

// Depending on the [lexicographic order]

/*The localeCompare method takes a reference string, in this case
hacker1, and compares it to hacker2. it will return a postive number 
if lexicographically greater. */

if(hacker1.localeCompare(hacker2)) {
    console.log("The driver's name goes first.");
} 
else if (hacker2.localeCompare(hacker1)) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?")
}


// bonus

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis laoreet leo vitae pellentesque. Aliquam erat volutpat. Pellentesque pulvinar est sit amet mauris mollis, ac finibus velit ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec quam sapien. Nam non pretium dui, id lobortis lorem. Phasellus efficitur, elit quis rutrum sodales, libero lectus suscipit justo, sagittis tristique quam odio eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Nam eleifend maximus libero, convallis consectetur diam. Donec at mauris quis libero lacinia malesuada eu non mi. Morbi risus nibh, interdum non mollis vitae, tincidunt ut lectus. Nunc pulvinar mi nec facilisis tincidunt. Sed sagittis volutpat mattis. Cras rhoncus sapien eu arcu porttitor rhoncus. Pellentesque molestie arcu eget leo vulputate, sed dapibus enim vulputate. Quisque accumsan ut libero et pretium. Vestibulum finibus massa ut mi malesuada ultrices.

Proin eros metus, imperdiet id sagittis in, malesuada quis magna. Phasellus finibus ipsum quis nulla mattis ultricies. Ut quis enim rhoncus, efficitur diam eu, tempus sem. Integer congue pellentesque sapien, sit amet ultrices elit laoreet id. Etiam nec augue nec lacus vestibulum iaculis vitae nec nisl. Nunc ornare sagittis imperdiet. Proin elementum tincidunt egestas. Nullam vulputate vitae velit eu venenatis. Vivamus id ultrices orci, quis dapibus massa. Fusce velit diam, pellentesque ac nisi quis, ultricies efficitur enim. Ut mauris enim, lobortis in sagittis ac, pharetra id dolor. Proin sagittis et nisi id pretium. Nulla volutpat orci et pulvinar vulputate. Curabitur quis lorem nulla. Praesent convallis, sem at feugiat scelerisque, lorem ante cursus lorem, vitae euismod dui felis eget erat. Aenean eget rutrum risus.

`
// Make your program count the number of words in the string.

/* The .split(" ") method splits a string into an array of substrings
when we add the .length after we are now using it to count the substrings i.e the words*/
console.log(longText.split(" ").length);

let latinWord;

if (longText === "et") {
    console.log("found you")
}
