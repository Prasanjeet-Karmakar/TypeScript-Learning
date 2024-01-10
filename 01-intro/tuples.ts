// Tuples are usually used when we want to data in a specific format like in array the 1st element should be string, 2nd be number.
var user: [string, number, boolean] = ["Connor", 123, false];

// user = ["Connor", false, 23]; // Not allowed
user = ["Edward", 23, true]; // Allowed

type rgb = [number, number, number]; // rgb will always consist of 3 numbers.

let color1: rgb = [234, 123, 222];

color1.push(233); // One of the defects of tuple.
console.log(color1); // (234, 123, 222, 233) while it should not be allowed.
