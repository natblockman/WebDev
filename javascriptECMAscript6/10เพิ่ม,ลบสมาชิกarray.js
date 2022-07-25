//push,pop,shift,unshift
const data=[10,20,30]
console.log(data)
// เพิ่มสมาชิกด้านหลัง
data.push(500,700)
data.push([1000,2000])
console.log(data)
//ลบสมาชิกด้านหลัง
data.pop()
console.log(data)
//ลบสมาชิกด้านหน้า
data.shift()
console.log(data)
//เพิ่มสมาชิกด้านหน้า
data.unshift(123)
console.log(data)