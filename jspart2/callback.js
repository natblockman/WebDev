function add(num1, num2) {
  return num1 + num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
let lastresult;
function saveLastResult(result) {
  lastresult = result;
}
let sumresult = 0;
function sumResult(result) {
  sumresult += result;
}
function calAndlog(n1, n2, operator, finish) {
  const result = operator(n1, n2);
  console.log(result);
  finish(result);
}
calAndlog(1, 2, add, saveLastResult);
calAndlog(4, 5, mul, saveLastResult);
console.log(lastresult);
calAndlog(1, 2, add, sumResult);
calAndlog(4, 5, mul, sumResult);
console.log(sumresult);
