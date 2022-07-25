//การ Loop Array

const data=[10,20,30,40,50]

// for(let i=0;i<data.length;i++){
//     if (data[i]>=30) break;
//     console.log(`ลำดับที่ ${[i]} = ${data[i]}`)
// }

//วบลูปสมาชิกแต่ละตัว ไม่สามาถใช้ break,continue
// let sum=0
// data.forEach(element => {
//      if (element>=30){
//          console.log('Hello')
//     }
//      console.log(`สมาชิกใน array data = ${element}`)

//     sum +=element
//     console.log(`ผลรวม = ${sum}`)
// });

for (const element of data) {
    console.log(`สมาชิก array data = ${element}`)
}