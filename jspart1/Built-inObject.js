let a = "1";
const num = Number("1");
const b = String(123);
console.log(num, typeof b);
const c = Boolean(123);
console.log(c);
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
const d = [];
console.log(Boolean(d));
//JSON
const e = {
  name: "nat",
};
console.log(e, JSON.stringify(e), JSON.parse(c)); //แปลงobjectเป็นstring

const pi = Math.PI;
const r = 7;
const area = pi * r ** 2;
console.log(area);
console.log(Math.round(area));
console.log(Math.ceil(area)); //ปัดเศษขึ้น
console.log(Math.floor(area)); //ปัดเศษลง

const d1 = new Date();
console.log(d1);
const d2 = new Date("2020-01-01");
console.log(d2);
