"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello, Konichiwa"; // greeting will always accept string
console.log(greetings);
var num = 10;
console.log(num);
// num.toUpperCase(); // Typesafety but it will not show error in js.
// greetings = 1; // Error
// number -> both int and float
var userId = 1234;
// userId. All the number related functions automatically appears.
// boolean -> true or false
var isLoggedIn = false;
// type inference
// Intializing during declaration we donot need to provide the type as typescript automatically detects the type.
var num2 = 1234; // num2 will always be a number
// num2 = "Hello World" // Error
// any type (Don't use it)
var var1 = 123;
var1 = "Hello"; // Allowed
var hero;
function getHero() {
    return "thor";
}
hero = getHero(); // Bad practise
