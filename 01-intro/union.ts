// Union of types when a particular value can be of one of the various types.

var score: number | string = 33;
score = 32;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

// Union of two types.
var name1: User | Admin = {
  name: "Connor",
  id: 1234,
  username: "c@c.com",
};

function getId(id: number | string) {
  console.log(`The ID is ${id}`);
  if (typeof id === "string") {
    id.toLowerCase();
  }
  // id.toLowerCase(); // Not allowed since both number and string does not support toLowerCase().
}

getId(132);
getId("123");

const data: (number | string)[] = [1, 2, 3, "s"]; // Array consisting of different elements
var data2: number[] | string[]; // data2 can have elements all number or all string.

let seatAllotment: "aisle" | "middle" | "window"; // Seat Allotment will only have these 3 values.

export {};
