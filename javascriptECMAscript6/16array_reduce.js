// Array reduce
// const data=[10,20,30,40,50]

// const mapData=data.map(e=>100)
// console.log(mapData)
// const filterData=data.filter(e=>e>20)
// console.log(filterData)

//array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น)//total=0



// const sum=data.reduce((value,e)=>{
    //เริ่มต้น value=0
//     console.log(value)
//     const total = e+value
    //ครั้งแรกtotal=10+0
    //ครั้งสองtotal=20+10
//     return total
// },0)
// const sum=data.reduce((value,e)=>e+value,0)
// console.log(sum)


const cart=[
    {name:"กระเป๋า",price:500},
    {name:"หนังสือ",price:900},
    {name:"กล้องถ่ายรูป",price:50000}
]
const sum=cart.reduce((value,e)=>e.price+value,0)//e.priceคือobject 0คือค่าเริ่มต้น
console.log(`ลูกค้าต้องชำระเงิน = ${sum} บาท`)