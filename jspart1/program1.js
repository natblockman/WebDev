//รับค่า num1 เป็นคู่ปริ้น Even คี่ปริ้น Odd
const num1 = "nat";
console.log(num1 % 2);
const isEven = num1 % 2 == 0;
const isOdd = num1 % 2 == 1;
if (isEven) {
  console.log("EVEN");
} else if (isOdd) {
  console.log("ODD");
} else {
  console.log("Don't know");
}
/*if (isOdd) {
  console.log("ODD");
}*/
