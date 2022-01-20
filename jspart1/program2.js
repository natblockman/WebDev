const num1 = 1;
const num2 = 5;
const num3 = "nnn";

if (
  typeof num1 != "number" ||
  typeof num2 != "number" ||
  typeof num3 != "number"
) {
  console.log("Error");
}

let result;

if (num1 >= num2 && num1 >= num3) {
  result = num1;
  console.log("case1");
} else if (num2 >= num1 && num2 >= num3) {
  result = num2;
  console.log("case2");
} else {
  result = num3;
  console.log("case3");
}
console.log(result);
