const User1 = {
  name: "connor",
  email: "c@c.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }): {} {
  return {};
}

// function returning an object.
function createUser2(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

// Wierdness of typescript same to JS.
function createUser3({ name: string, isPaid: boolean }) {}

// createUser3({name: 'Connor', isPaid: false, email: 'H@h.com'}) // shows error as email is not to be accepted.
let user = {
  name: "Connor",
  isPaid: false,
  email: "c@c.com",
};
createUser3(user); // Working fine as user contains email attribute.

createUser({ name: "Connor", isPaid: true });

// type aliases -> similar to struct in C.
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// let user1: User = {
//     name: 'Connor',
//     email: 'c@c.com'
// } // isActive is not provided so typescript automatically checks the attributes

function createUser4(): User {
  return { name: "Connor", email: "c@c.com", isActive: false };
}

// console.log(createUser4());

type UserAPI = {
  readonly _id: number; // readonly is exclusive in TS as there is no stopping it in JS.
  name: string;
  email: string;
  isActive: boolean;
  creditDetails?: number; // optional key
};

let myUser: UserAPI = {
  _id: 1234,
  name: "Connor",
  email: "c@c.com",
  isActive: false,
};

myUser.name = "C"; // Allowed
// myUser._id = 23421 // Not Allowed as it is read only.

// Union of types
type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carDate: string;
};

// Combining different types
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
