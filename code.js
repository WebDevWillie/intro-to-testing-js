// // helloWorld function
// function helloWorld() {
//     return "Hello, World!";
// }

// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input){
    if(input === undefined || input === true || input === false){
        return"Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }

}

function isFive(input){
    if(typeof input === "boolean"){
        return input;
    }else if(input == 5) {
        return true
    } else {
        return false;
    }

}

function isEven(input){
    if(typeof input === "boolean"){
        return input;
    } else if(parseFloat(input) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isVowel(input){

    if (input === null || input === undefined){
        return false
    } else if(input.toString().toLowerCase() === "a" || input.toString().toLowerCase() ==="e" || input.toString().toLowerCase() === "i" || input.toString().toLowerCase() === "o" || input.toString().toLowerCase() === "u"){
        return true;
    } else {
        return false;
    }
}

function add(input1, input2){
    return (parseFloat(input1) + parseFloat(input2));ß
    }








