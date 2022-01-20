let mymoney = 50;
let walletbalances = 593.5;
let bookName = "Harry Potter";
let idcard = "194028829408";
var product = {
  type: "monitor",
  series: "U2701203",
  price: 1599,
};
let studentA = {
  name: "Earth",
  age: 12,
  sex: "male",
};
let studentB = {
  name: "Javascript",
  age: "100",
  sex: null,
};
let classroom = {
  name: "MernCourse",
  students: [studentA, studentB],
};

console.log(classroom);

const sum = 1 + 2.31;
console.log(sum);
const sumA = 1 + 2 ** 2 + true + 4.31 / 3;
console.log(sumA);
console.log(sum - sumA);
const str = "4";
console.log(mymoney * str);
console.log(19 % 4); //%หารเอาเศษ
mymoney--;
console.log(mymoney);
var a = 1;
console.log(a.toFixed(2)); //ทศนิยม2ตำแหน่ง
var b = 958615414;
console.log(b.toLocaleString());
console.log(classroom.name.length);
