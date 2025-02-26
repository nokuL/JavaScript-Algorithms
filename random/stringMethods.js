const newString = 'Hello World';

let length = newString.length;
let string1 = newString.at(0); //H //at allow negative values e.h getting second from last value
let string2 = newString.charAt(0);//H
let string3 = newString.charCodeAt(0);
let string4 = newString.at(-2);

//getting part of a string
let string5 = newString.slice(0, 5);//including zero , excluding 5
let string6 = newString.slice(5);/// from five to the rest of the string
let string7 = newString.slice(-5); //from the end of the string

let string8 = newString.substring(3, 5); //including 3 excl 5
//start and end values that are less than zero are treated as zero in substring

//substr takes the length of chars you want after that e.g for 5 more characters
let string9 = newString.substr(5, 5);// World
let string10 = newString.substr(5,5);// ' '

//concatination
let string11 = newString.concat(" NOku");

let string12 = newString.trim();// removes white space from both ends
let string13 = newString.trimStart(); //removes space from start
let string14 = newString.trimEnd(); //

let string15 = newString.padStart(4, "0")// adds 4 zeros to start
let string16 = newString.padEnd(4, "0"); //adds 4 zeros to beginning


let string17 = newString.replace('H', "L");

let stringArray = newString.split("");// for converting to array

