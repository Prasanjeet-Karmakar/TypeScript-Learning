"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generics are used when we want to create a component supporting different types.
// It allows the reusable feature of the component.
// Below is the usage of generic 'array'.
// It is similar to generics in JAVA and templates in C++.
const score = [];
const names = [];
// We have to use conditions to check types each time.
function identityOne(val) {
    return val;
}
// Any solve the problems but TS has no information regarding the val.
// Here our function can take number as an input and can return string.
function identityTwo(val) {
    return val;
}
// Defining generics.
// Here the type of input and output will be same.
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("3");
identityThree(true);
function identityFour(val) {
    return val;
}
// When not using primitive type we have to use <> for generics.
identityFour({ brand: "lifelong", type: 3 });
function getSearchProducts(products) {
    // do some database operations (Some situational).
    const myIndex = 3;
    return products[myIndex];
}
// <T,> can also be used to define generics and are mostly used by developers using React to differentiate between JSX or components and generics.
const getProducts = (products) => {
    return products[0];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
