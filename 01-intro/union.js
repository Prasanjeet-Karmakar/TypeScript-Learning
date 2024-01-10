"use strict";
// Union of types when a particular value can be of one of the various types.
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 32;
score = "55";
// Union of two types.
var name1 = {
    name: "Connor",
    id: 1234,
    username: "c@c.com",
};
function getId(id) {
    console.log("The ID is ".concat(id));
    if (typeof id === "string") {
        id.toLowerCase();
    }
    // id.toLowerCase(); // Not allowed since both number and string does not support toLowerCase().
}
getId(132);
getId("123");
var data = [1, 2, 3, "s"]; // Array consisting of different elements
var data2; // data2 can have elements all number or all string.
var seatAllotment; // Seat Allotment will only have these 3 values.
