let colors=["แดง","ขาว","ฟ้า","เหลือง","ม่วง"]
let count = colors.length;
let first=colors[0]
let last=colors[colors.length-1]

console.log(count);
console.log("Before =",colors)
console.log("first =",first);
console.log("last =",last);

// sort เรียงลำดับตามพยัญชนะและสระ
let result=colors.sort();
console.log("After =",result);

let fruits=["มะม่วง","แอปเปิ้ล","กล้วย","ทุเรียน"]
console.log(fruits.sort())
// reverse เรียงจากหลังมาหน้า เรียงสระตามด้วยพยัญชนะ
console.log(fruits.reverse())

// เพิ่มสมาชิก
colors.push("เทา");
console.log("เพิ่มสีเทา ",colors);

let number=[20,300,50,40];
console.log(colors.sort());