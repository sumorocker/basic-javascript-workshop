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
