const textAll=document.querySelectorAll('p');
let message=textAll[1].innerHTML;
console.log(textAll[0].innerHTML);
console.log(message);
let count=1;

const menu=document.getElementById('menu');
const item=document.getElementById('item-3')

const itemB=document.getElementById('item-2')
const newItem=document.createElement("li");
newItem.innerText="X";
// สร้างelement li
// const item=document.createElement('li');

function addItem(){
    const item=document.createElement('li');
    item.innerText='Item '+(count++);
    menu.appendChild(item);
}

// menu.removeChild(item);
function deleteItem(){
    menu.removeChild(item);
}

// แทนที่
function replaceItem(){
menu.replaceChild(newItem,itemB);
}