// Generics are used when we want to create a component supporting different types.
// It allows the reusable feature of the component.
// Below is the usage of generic 'array'.
// It is similar to generics in JAVA and templates in C++.
const score: Array<number> = [];
const names: Array<string> = [];

// We have to use conditions to check types each time.
function identityOne(val: boolean | number): boolean | number {
  return val;
}

// Any solve the problems but TS has no information regarding the val.
// Here our function can take number as an input and can return string.
function identityTwo(val: any): any {
  return val;
}

// Defining generics.
// Here the type of input and output will be same.
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);
identityThree("3");
identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

// When not using primitive type we have to use <> for generics.
identityFour<Bootle>({ brand: "lifelong", type: 3 });

function getSearchProducts<T>(products: T[]): T {
  // do some database operations (Some situational).
  const myIndex = 3;
  return products[myIndex];
}

// <T,> can also be used to define generics and are mostly used by developers using React to differentiate between JSX or components and generics.
const getProducts = <T>(products: T[]): T => {
  return products[0];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, {})
// Generics in classes.
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

export {};
