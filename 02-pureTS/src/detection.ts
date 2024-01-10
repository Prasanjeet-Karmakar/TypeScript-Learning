function detectType(val: number | string) {
  if (typeof val === "string") return val.toLowerCase();
  return val + 3;
}

function provideId(id: string | null) {
  return id ? id?.toLowerCase() : console.log("Please provide id");
}

console.log(provideId(null));

// Here strs will be truthy value even for empty string.
// So that case should also be handled.
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") console.log(strs);
  }
}

// Using 'in' for type narrowing.
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(account: User | Admin): boolean {
  if ("isAdmin" in account) return account.isAdmin;
  return false;
}

function logValue(x: Date | String) {
  if (x instanceof Date) console.log(x.toUTCString);
  else console.log(x.toUpperCase());
}

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

// isFish returning a boolean and not the type of the pet.
// function isFish(pet: Fish | Bird) {
//   return (pet as Fish).swim !== undefined;
// }

// Using type predicates.
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim != undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food"; // Although this should be 100% fish but still it is showing that pet can be both Fish or Bird.
  }
  return "bird food";
}

// Discriminated Unions.
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  breadth: number;
}

type Shape = Circle | Square | Rectangle;
function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
  //   return shape.side ** 2;
}

// Exhaustive checking:
// Dynamic updation of types.
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.breadth * shape.length;
    default:
      const _defaultforshape: never = shape; // When Rectangle case is not defined it throws an error to show that all the types have not been implemented.
      return _defaultforshape;
  }
}

export {};
