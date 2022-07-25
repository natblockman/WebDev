// DOM Document Object Model
// let a=document.getElementsByTagName('p')
const titleEL=document.getElementById('title')
// console.log(a);


// let b=document.getElementById('demo')
// อ้างอิงผ่าน id
// const b=document.querySelector('#demo');

// console.log(b);

// เปลี่ยนแปลงข้อความ
// b.innerText="สอน javascript เบื้องต้น"

let x=10;
let y=20;

// querySelector การอ้างอิง ส่วนใหญ่ใช้ผ่าน class และระบุตัวแปรเป็นconst
// อ้างอิงผ่านclass 
// const c=document.querySelector('.myjs');
const contentEL=document.querySelector('.content');
// อ้างอิงผ่านtag
// const d=document.querySelectorAll('p');
const allEL=document.querySelectorAll('p');

// function displaytext(){
//     // b.innerHTML="<strong>สอน javascript เบื้องต้น</strong><br>"
//     // b.innerHTML="แสดงข้อมูลในตัวแปร = "+x+" และตัวแปร = "+y;
//     b.innerHTML=`แสดงข้อมูลตัวแปร x = ${x} และตัวแปร y = ${y}`
// }

// console.log(c);
// console.log(d);


function displaytext(){
     titleEL.style.color="red";
     titleEL.style.backgroundColor="yellow";
     titleEL.style.fontSize="60px";

    // เปลี่ยชื่อคลาส
    // contentEL.setAttribute('class','Nat')
    // box.setAttribute('class','dark')
}


const box=document.querySelector('.box')

function lightMode(){
    box.setAttribute('class','light')
}
function darkMode(){
    box.setAttribute('class','dark')
}