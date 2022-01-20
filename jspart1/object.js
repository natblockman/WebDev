let person = {
  name: "nat", //name,age,height คือ property
  age: 26,
  height: 165,
};
console.log(person);
console.log(person.height);

let myname = person.name;
let myname2 = person["name"];

console.log(myname, myname2);
