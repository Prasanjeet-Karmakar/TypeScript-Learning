interface User {
  readonly _id: number;
  email: string;
  userid: number;
  googleId?: string;
  startTrial: () => string;
  endTrial(): string; // Another way of defining function.
  getCoupon(couponname: string, value: number): number;
}

// Reopening of interfaces -> adding more properties to the interface.

interface User {
  githubToken: string;
}

const connor: User = {
  _id: 24231,
  email: "h@h.com",
  userid: 123,
  startTrial: () => {
    return "trial started";
  },
  endTrial: () => {
    return "trial ended";
  },
  getCoupon: (name: "connor10") => {
    return 10;
  },
  githubToken: "1234ssfdf",
};

// inheritance in interfaces.
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const h: Admin = { ...connor, role: "admin" };
// console.log(h);

// connor['_id'] = 123 // Not allowed.
export {};
