//array map นำข้อมูลมาเปลี่ยนแปลงค่าโดยไม่กระทบตัวแปรเดิมและนำไปใช้งาน

// const number=[10,20,30,40]
// console.log(`array = ${number}`)
// const result=number.map(e=>{
//     const a=e*2
//     return a
// })


// const result1=number.map(e=>e**2)
// console.log(`array map =${result1}`)

// const data=["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากาศดี","หมอก"]
// console.log(data)
// const result2=data.map((e,i)=>{
//     return `วันที่ ${i+1},สภาพอากาศ = ${e}`
// })
// console.log(result2)

const data=[
    {day:"01/04/2565",weather:"แดดร้อน",temp:35},
    {day:"02/06/2565",weather:"ฝนตก",temp:30},
    {day:"03/08/2565",weather:"หมอก",temp:25}
]

const result=data.map(e=>{
    return e.weather
})

console.log(result)