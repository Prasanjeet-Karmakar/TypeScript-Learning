// Similary to static typed language, provide the return type like C++, JAVA etc.
function sum(num: number): number {
  return num + 2;
}
sum(4);

// Automatically inferring val as any therefore no error for toUpperCase
// function getUpper(val) {
//   val.toUpperCase();
// }

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("5");

// signUp having default args
function signUp(
  username: string,
  email: string,
  password: string = "1234"
): boolean {
  if (username && email && password) return true;
  return false;
}

console.log(signUp("Connor", "c@c.com", "C"));
console.log(signUp("Connor", "c@c.com", ""));

// function returning value more than 1 types:
function getValue(val: number) {
  if (val > 5) return true;
  return "200 OK";
}

getValue(29); // type of getValue = true | "200 OK" (union)

// Arrow function in TS.
const getHello = (s: string): string => {
  return `Hello ${s}`;
};

console.log(getHello("Connor"));

const heroes = ["thor", "captainamerica", "batman"];

// Typescript automatically typeswitching acc to the values
heroes.map((hero): string => {
  return `hero is ${hero}`;
});

// void means that no value.
function consoleError(error: string): void {
  console.log(error);
}

// never means the function never returns.
// Difference between never and void is that function end is reachable and returns void or undefined whereas in never the functions never reachs the end.
// never is generally used for functions which throws error.

// Error Code....
// function neverFunction1(): never {
//   console.log("Hello");
// }

function neverFunction2(): never {
  throw new Error("This is the error");
}

export {};
