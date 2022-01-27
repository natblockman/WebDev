//for ใช้ตอนรู้จำนวนครั้งชัดเจน
/*for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log("i : >> ", i);
  }
}*/

/*for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 5; j++) {
    if (i % 2 == 0 && j % 2 == 0) {
      console.log("i : >> ", i, "j : >>", j);
    }
  }
}*/

/*const numbers = ["a", "b", "c"];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
for (str of numbers) {
  console.log(str);
}*/
/*
const student = {
  name: "nat",
  age: 26,
  firstname: "nattapat",
};*/

/*const keys = Object.keys(student);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(student[key]);
}*/
/*for (aaa in student) {
  console.log(student[aaa]);
}*/
//console.log(keys);

//while ไม่รู้จำนวนครั้งชัดเจน
/*let a = 0;
while (a < 10) {
  console.log(a);
  a++;
}*/

/*let a = 20;
while (a != 10) {
  console.log(a);
  if (a > 10) {
    a--;
  } else if (a < 10) {
    a++;
  }
}*/

//หาค่ามากสุด
const a = [2, 34424, -23, 123, 233];
let result;
let maxNumber = a[0];
//global scope
for (let i = 0; i < a.length; i++) {
  //local scope
  console.log(a[i], maxNumber); //เปรียบเทียบmaxnumber
  if (a[i] > maxNumber) {
    //block scope
    maxNumber = a[i];
  }
}
result = maxNumber;
console.log(result);
