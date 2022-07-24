// block scope (let/const) ทำงานภายในเขตพื้นที่

// การเขียนแบบดั้งเดิม ทำงานนอกขอบเขตพื้นที่ได้ ทะลุ{} ไม่ดีเพราะเปิดเผยข้อมูลได้ เป็น global variable ตลอด
var x=10;
var y="abc"
// ===ทั้งค่าและชนิดข้อมูลตรงกัน
// if(x===10){
//  var z=500
//  console.log("z ใน =",z)
// }
// console.log("z นอก =",z)
let z=50;
const a=11;
if(x===10){
    let z=500
    console.log("z ใน =",z)
}
console.log("z นอก =",z)
