let greetings: string = "Hello, Konichiwa"; // greeting will always accept string
console.log(greetings);

let num: number = 10;
console.log(num);

// num.toUpperCase(); // Typesafety but it will not show error in js.
// greetings = 1; // Error

// number -> both int and float
let userId: number = 1234;
// userId. All the number related functions automatically appears.

// boolean -> true or false
let isLoggedIn: boolean = false;

// type inference
// Intializing during declaration we donot need to provide the type as typescript automatically detects the type.
let num2 = 1234; // num2 will always be a number
// num2 = "Hello World" // Error

// any type (Don't use it)
let var1: any = 123;
var1 = "Hello"; // Allowed

let hero;

function getHero() {
  return "thor";
}

hero = getHero(); // Bad practise

export {};
