const number1 = [1, 2, 3, 4, 5, 6];
function multiplyByTwo(num) {
  return num * 2;
}
function getZero() {
  return 0;
}
function isEven(num) {
  return num % 2 == 0;
}
const numberX2 = number1.map(multiplyByTwo);
const number0 = number1.map(getZero);
const number1Even = number1.filter(isEven); //หาจำนวนคู่ทุกตัว
const firstEvenNumber = number1.find(isEven); //find หาแค่ตัวแรกตัวเดียว
const firstEvenNumberIndex = number1.findIndex(isEven); //บอกตำแหน่งว่าอยู่ตำแหน่งไหน
const isEveryNumberIsEven = number1.every(isEven); //ทุกตัวเป็นEvenหรือไม่
console.log(number1);
console.log(numberX2);
console.log(number0);
console.log(number1Even);
console.log(firstEvenNumber);
console.log(firstEvenNumberIndex);
console.log(isEveryNumberIsEven);
