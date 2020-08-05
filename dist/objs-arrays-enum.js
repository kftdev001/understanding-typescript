"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role["READ_ONLY"] = "RD";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Kousei.f",
    age: 37,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// person.role.push("admin");
// person.role[1] = 10;
let favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
console.log(person.role);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
//# sourceMappingURL=objs-arrays-enum.js.map