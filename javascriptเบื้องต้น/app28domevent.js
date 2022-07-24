// อ้างอิง
const menu=document.getElementById('menu');
const btn=document.getElementById('btn');

function welcome(){
    alert("ยินดีต้อนรับเข้าสู่หน้าเว็บของเรา")
}

function hightlight(obj){
    obj.style.background="yellow";
}
function unhightlight(obj){
    obj.style.background="red";
}

// function getMenu(){
//     // const menu=document.getElementById('menu');
//     const display=document.getElementById('display');
//     console.log(menu.value.toUpperCase())
//      display.innerText=menu.value;
// }

// event
menu.addEventListener('change',getMenu)
btn.addEventListener('click',showWelcome)
const display=document.getElementById('display');

function getMenu(){
    display.innerText=menu.value;
    // console.log(menu.value);
}

function showWelcome(){
    alert('ยินดีต้อนรับเข้าสู่หน้าเว็บ')
}

