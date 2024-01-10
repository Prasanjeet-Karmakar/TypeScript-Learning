"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    if (typeof val === "string")
        return val.toLowerCase();
    return val + 3;
}
function provideId(id) {
    return id ? id === null || id === void 0 ? void 0 : id.toLowerCase() : console.log("Please provide id");
}
console.log(provideId(null));
// Here strs will be truthy value even for empty string.
// So that case should also be handled.
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string")
            console.log(strs);
    }
}
function isAdmin(account) {
    if ("isAdmin" in account)
        return account.isAdmin;
    return false;
}
function logValue(x) {
    if (x instanceof Date)
        console.log(x.toUTCString);
    else
        console.log(x.toUpperCase());
}
// isFish returning a boolean and not the type of the pet.
// function isFish(pet: Fish | Bird) {
//   return (pet as Fish).swim !== undefined;
// }
// Using type predicates.
function isFish(pet) {
    return pet.swim != undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food"; // Although this should be 100% fish but still it is showing that pet can be both Fish or Bird.
    }
    return "bird food";
}
function getTrueShape(shape) {
    if (shape.kind === "circle")
        return Math.PI * shape.radius ** 2;
    //   return shape.side ** 2;
}
// Exhaustive checking:
// Dynamic updation of types.
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.breadth * shape.length;
        default:
            const _defaultforshape = shape; // When Rectangle case is not defined it throws an error to show that all the types have not been implemented.
            return _defaultforshape;
    }
}
