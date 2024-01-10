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
  readonly city: string = "Ranchi";
  static _objectCount = 0;
  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {
    User._objectCount++;
  }

  // Getters and setters, generally used for encapsulation.
  get getEmail(): string {
    return this.email;
  }

  // Setter does not require any return type not even void.
  set setEmail(email: string) {
    this.email = email;
  }
}

const connor = new User("c@c.com", "connor", 2342);
// connor.city // Not allowed.

class SubUser extends User {
  isFamily: boolean = true;
  changeUserId() {
    // this.userId = 134 // Not allowed as userId is private.
  }
}
