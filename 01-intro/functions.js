"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Similary to static typed language, provide the return type like C++, JAVA etc.
function sum(num) {
    return num + 2;
}
sum(4);
// Automatically inferring val as any therefore no error for toUpperCase
// function getUpper(val) {
//   val.toUpperCase();
// }
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("5");
// signUp having default args
function signUp(username, email, password) {
    if (password === void 0) { password = "1234"; }
    if (username && email && password)
        return true;
    return false;
}
console.log(signUp("Connor", "c@c.com", "C"));
console.log(signUp("Connor", "c@c.com", ""));
// function returning value more than 1 types:
function getValue(val) {
    if (val > 5)
        return true;
    return "200 OK";
}
getValue(29); // type of getValue = true | "200 OK" (union)
// Arrow function in TS.
var getHello = function (s) {
    return "Hello ".concat(s);
};
console.log(getHello("Connor"));
var heroes = ["thor", "captainamerica", "batman"];
// Typescript automatically typeswitching acc to the values
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
// void means that no value.
function consoleError(error) {
    console.log(error);
}
// never means the function never returns.
// Difference between never and void is that function end is reachable and returns void or undefined whereas in never the functions never reachs the end.
// never is generally used for functions which throws error.
// Error Code....
// function neverFunction1(): never {
//   console.log("Hello");
// }
function neverFunction2() {
    throw new Error("This is the error");
}
