// const person: {
//   name: string;
//   age: number;
// } = {

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple type
// } = {
//   name: "Kousei.f",
//   age: 37,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"]
// };

enum Role {
  ADMIN,
  READ_ONLY = 'RD',
  AUTHOR = 2,
}

const person = {
  name: "Kousei.f",
  age: 37,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: any[];
favoriteActivities = ["Sports"];

console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
