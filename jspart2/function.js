const a = 4;
const b = 7;
function checkEvenOrOdd(number) {
  const isEvent = number % 2 == 0;
  if (isEvent) {
    return "EVEN";
  } else {
    return "ODD";
  }
}
const aa = checkEvenOrOdd(a);
const bb = checkEvenOrOdd(b);
console.log("aa >> ", aa);
console.log("bb >> ", bb);
