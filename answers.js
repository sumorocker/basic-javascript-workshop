// returning first character of a string

function firstLetter(string) {
    return string.charAt(0);
};

console.log(firstLetter("Canada"));

console.log(firstLetter("Sweden"));

console.log(firstLetter(""));

console.log(firstLetter("Argentina"));

// returning last letter of a string

function lastLetter(string) {
    return string.charAt(string.length- 1);
}

console.log(lastLetter("Orange"));
console.log(lastLetter("Purple"));
console.log(lastLetter(""));

// returning the character at the position represented by the number

function returnCharAndNum(string,number2) {
    return string.charAt(number2);    
}

console.log (returnCharAndNum("Monkey",3));
console.log (returnCharAndNum("Crocodile", 4));
console.log (returnCharAndNum(" ", 1));


