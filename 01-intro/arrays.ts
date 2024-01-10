// const heros = []
const heros: [] = []; // Defining arr which will always be empty.
// heros.push("spiderman"); // Error as when not defined the array is of default type of never.

const superHeros: string[] = []; // Defining array which will take string values.
superHeros.push("spiderman"); // This is allowed

// const power: number[] = [];
// Another type of declaration of array.
const power: Array<number> = [];
power.push(2);

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
allUsers.push({ name: "Connor", isActive: false });

// Defining 2d arrays.
const MLModels: readonly number[][] = [
  [0, 0, 0],
  [1, 2],
];

// MLModels.push([1, 2, 3]);  // Readonly array so can't be modified.
