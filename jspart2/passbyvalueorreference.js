/*const a = 1;
let b = a;
b = 5;
console.log(a);
console.log(b);*/
//const a = [1, 2, 3];
//let b=a;//เปลี่ยนค่าในaด้วย
//let b = [...a];//copy array โดยไม่เปลี่ยนค่าในa
//b[1] = 99;
/*const a = {
  name: "nat",
};
const b = { ...a }; //copy objectโดยไม่เปลี่ยนค่าในa
b.name = "javascript";
console.log("a >> ", a);
console.log("b >> ", b);*/
/*function add(a, b) {
  return a + b;
}
const sum = add(10, 20);
console.log(sum);*/
/*
function addAge(student1, student2) {
  const result = { age: student1.age + student2.age };
  return result;
}
const a = {
  age: 10,
};
const b = {
  age: 20,
};
const sum = addAge(a, b);
console.log(a, b);
console.log(sum);
*/
//global scope
const a = 20;
/*
function addAge(student1, student2) {
  //local scope
  var num1 = 5;
  const num2 = 6;
  let num3 = 7;
  return 1;
}*/
/*if (1 > 0) {
  //block scope
  var num1 = 5; //varประกาศในblock scopeได้
  const num2 = 6;
  let num3 = 7;
}

console.log(num1);*/ //ใช้ var จาก block scopeได้
//console.log(num2);//error
//console.log(num3);//error
/*
//global
let num1 = 5;
function addABWithNum1(a, b) {
  //function scope
  return a + b + num1;
}
const result = addABWithNum1(1, 2);
console.log(result);*/

function getPrintName() {
  const name = "nat";
  function printName() {
    console.log(name);
  }
  return printName;
}
const fn1 = getPrintName();
console.log(fn1);
fn1();
