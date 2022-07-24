// Destructering การสลายโครงสร้าง คือ การกำหนดค่าที่อยู่ใน array or object ให้กับตัวแปรโดยใช้วิธีจับคู่ตัวแปรกับค่าใน array or object

//array
const colors=["green","red","yellow"]
// const green=colors[0]
// const red=colors[1]
// const yellow=colors[2]

// Destructering
const [green,red,yellow]=colors
// const [,,yellow]=colors ต้องการแค่สีเหลือง

console.log(green)
console.log(red)
console.log(yellow)

// object
const product={
    productName:"computer",
    price:30000,
    stock:10
}
// ซ้ายคือชื่อproperty ขวาคือค่าที่จัดเก็บ
// const{"productName":productName,"price":price,"stock":stock}=product
// const{productName:productName,price:price,stock:stock}=product
const{productName:n,price:p,stock:s}=product


// console.log(productName)
// console.log(price)
// console.log(stock)

console.log(n)
console.log(p)
console.log(s)