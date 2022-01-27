//importยุคเก่า
//const appVersion = require("./config/appversion");
const { appVersion, license, owner } = require("./config/appversion");
const {
  calculateCircleArea,
  calculateSquareArea,
  getName,
} = require("./util/calculatearea");
function greeting() {
  console.log("hello", appVersion, license, owner);
}
greeting();
const a1 = calculateCircleArea(4);
const a2 = calculateSquareArea(5);
const b1 = getName();
console.log(a1, a2);
console.log(b1);
