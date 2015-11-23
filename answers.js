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

//two numbers added together

function addNum(number1, number2){
    return number1 + number2;
}

console.log (addNum( 2 , 4));
console.log (addNum(50 ,78));
console.log(addNum("blue" , "red"));

// when I added blue and red it added the words together into an amazing new color called bluered(purple)


//two numbers multiplied together

function multiplyNum(number1, number2){
    return number1 * number2;
}

console.log (multiplyNum(6 , 6));
console.log (multiplyNum(36, 36));
console.log (multiplyNum ("jeans" , 5));
console.log (multiplyNum("jeans" , "nose"));

// when I multiplid anything other than numbers it gave be NaN!

// add subtract multiply and divide using a string and function

function addSubMultDivString(string , number1 , number2){
    if (string === "add"){
        return number1 + number2;
    } 
    if (string === "subtract"){
        return number1 - number2;
    }
    if (string === "multiply"){
        return number1 * number2;
    }
    if (string === "divide"){
        return number1/number2;
    }
    else{
        return 0;
    }
};

console.log(addSubMultDivString("add", 1 , 2));
console.log(addSubMultDivString("subtract", 50 , 2));
console.log(addSubMultDivString("multiply", 65 , 2));
console.log(addSubMultDivString("divide", 56 , 2));
console.log(addSubMultDivString("barf", 0 , 2));


//returns the string repeated x number of times


function repeatStringXtimes(string ,numberOfrepeats){
    return (string + " ").repeat(numberOfrepeats)
    
}

console.log(repeatStringXtimes("All work and no play makes Jack a dull boy", 10));

//returns the reverse

function reverseWord(string){
    return string.split('').reverse().join('')
};

console.log(reverseWord("hello"));
console.log(reverseWord("racecar"));
console.log(reverseWord("bread"));

// split each character into '' reversed them while they were seperated then joined characters within ''

//the factorial of a number

/*
Write a function that takes a number and returns the factorial of a number. The factorial of 5 is 5x4x3x2x1. 
The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.
*/

function factorial(number){
    
    var result = 1;
    
    for(var i= 1 ; i <= number; i++){
        result = result *i;
    }
    return result;
}

console.log(factorial(5));

//Write a function that takes a phrase as a string, and returns the longest word in that phrase. 

//If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.

function longestWord(phrase) {
    var split = phrase.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < split.length; i++) {
        if (longest < split[i].length) {
            longest = split[i].length;
            word = split[i];
        }
    }
    return word;
}
console.log(longestWord("this is how the dog walks away"));
console.log(longestWord("the long dark is a great game"));
console.log(longestWord("the snow is yellow"));



//capitalizing all the words in a string

function capitalize (sentence){
    return sentence.toUpperCase();
}

console.log(capitalize("this should be capitalized"));
console.log(capitalize("hey steve, steve, steeeve!"));
console.log(capitalize("speak quietly but bring a big can of paint"));



var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (var i=0; i<=largest;i++){
    if (array>largest) {
        var largest=array[i];
    }
}

console.log(largest);


var listOfWords = [ ]
        
function findLongestWord(str) {
  var words = str.split(' ');
  var longestLength = 0;
  var longestWord;
  for (var i=0;i<words.length;i++) {
    if (words[i].length > longestLength) {
       longestLength = words[i].length;
       longestWord = words[i];
    
    }
  }
  return longestWord;
}

