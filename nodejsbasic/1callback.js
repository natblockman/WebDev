// console.log("เริ่มต้นโหลด")
// setTimeout(()=>{
//     console.log("กำลังดาวน์โหลด")
// },3000)
// console.log("จบการทำงาน")

// callback ฟังก์ชันที่ถูกเรียกใช้เมื่ออีกฟังก์ชันทำงานเสร็จ
// function calculate(x,y,callback){
//     //delay3second
    
//     console.log("กำลังคำนวณ...")
//     setTimeout(()=>{
//         const sum=x+y
//         callback(sum)
//     },3000)
// }

// function display(result){
//     console.log(`ผลบวก = ${result}`)
// }

// const sum=calculate(5,10)
// display(sum)

// เรียกใช้callback function
// calculate(100,50,display)

//เขียนแบบย่อ
// calculate(100,50,function display(result){
//     console.log(`ผลบวก = ${result}`)
// })


//เขียนโปรแกรมดาวน์โหลดไฟล์
const url1="kong.dev/file1.json"
const url2="kong.dev/file2.json"
const url3="kong.dev/file3.json"

function downloading(url,callback){
    console.log(`กำลังโหลด ${url}`)
    setTimeout(()=>{
        callback(url)
    },3000)
}


//callback hell เขียนcallbackซ้อนกันเรื่อยๆ
downloading(url1,function complete(result){
    console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
    downloading(url2,function complete(result){
        console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
        downloading(url3,function complete(result){
            console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
        })
    })
})
