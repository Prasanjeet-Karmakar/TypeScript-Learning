"use strict";
// Classes in TS.
// Access modifiers, public is automatically implemented.
// class User {
//   // new is TS, not required in JS.
//   email: string;
//   name: string;
//   private city: string = ""; // Default value.
//   constructor(email: string, name: string) {
//     // Classic JS.
//     this.email = email;
//     this.name = name;
//   }
// }
// Another less clustered way to define class.
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Ranchi";
        User._objectCount++;
    }
    // Getters and setters, generally used for encapsulation.
    get getEmail() {
        return this.email;
    }
    // Setter does not require any return type not even void.
    set setEmail(email) {
        this.email = email;
    }
}
User._objectCount = 0;
const connor = new User("c@c.com", "connor", 2342);
// connor.city // Not allowed.
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeUserId() {
        // this.userId = 134 // Not allowed as userId is private.
    }
}
