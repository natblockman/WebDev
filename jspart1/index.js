console.log("Hello world,", "My name is nat");
console.error("Error");
console.warn("Warning");

//ประกาศตัวแปร
var a = 1;
console.log(a);
a = "earth";
console.log(a);
console.log("type of a =", typeof a);

var b;
const c = 4; //const ต้องใส่ค่าและจะเป็นค่านั้นเสมอไม่สามารถแก้ได้

let number = 5.2;
let string1 = "hehe";
let bool1 = true;

let object1 = {
  name: "nat",
  age: 26,
};

let x;
let y = null;

console.log("value of object1 =", object1);
console.log("type of object1 =", typeof object1);

console.log("value of x =", x);
console.log("type of x =", typeof x);

console.log("value of y =", y);
console.log("type of y =", typeof y);

//array
const array1 = [1, 2, 3, 4];
const array2 = ["1", "2", "3", "4"];
const array3 = [1, "2", true];

let circles = ["green-circle", "red-circle", "blue-circle", "black-circle"];
console.log(circles[2]);
//แก้ไขข้อมูล
circles[2] = "yellow circle";

//เพิ่มข้อมูล
const num1 = 20;
circles.push("javascript");
circles.push(num1);

//ลบข้อมูล
circles.pop(); //ลบตัวท้าย
circles[1] = null; //เปลี่ยนข้อมูลช่องที่1เป็นnull
console.table(circles);
