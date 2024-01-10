"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User1 = {
    name: "connor",
    email: "c@c.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return {};
}
// function returning an object.
function createUser2() {
    return { name: "reactjs", price: 399 };
}
// Wierdness of typescript same to JS.
function createUser3(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser3({name: 'Connor', isPaid: false, email: 'H@h.com'}) // shows error as email is not to be accepted.
var user = {
    name: "Connor",
    isPaid: false,
    email: "c@c.com",
};
createUser3(user); // Working fine as user contains email attribute.
createUser({ name: "Connor", isPaid: true });
// let user1: User = {
//     name: 'Connor',
//     email: 'c@c.com'
// } // isActive is not provided so typescript automatically checks the attributes
function createUser4() {
    return { name: "Connor", email: "c@c.com", isActive: false };
}
var myUser = {
    _id: 1234,
    name: "Connor",
    email: "c@c.com",
    isActive: false,
};
myUser.name = "C"; // Allowed
