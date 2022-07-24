// ฟังก์ชันไม่มีการรับค่า
function helloworld(){
    console.log('Hello World');
}
helloworld();

function message(){
    alert("แจ้งเตือนโอนเงิน");
}

function displayname(){
    document.write("nattapat");
}

// ฟังก์ชันที่มีการรับค่า
// x คือ parameter
function shownumber(x){
    console.log("เลขที่ส่งมาคือ =",x);
}
// 5,10,number คือ argument
shownumber(5);
shownumber(10);

let number="nat";
shownumber(number);

function fullname(fname,lname,city){
    console.log("ชื่อจริง ",fname,"นามสกุล ",lname,"ที่อยู่",city);
}
fullname("nattapat","jantarasugree","Phrae");

function summation(x,y){
    let total=x+y;
    console.log("ผลรวม ",total);
}
summation(231,985);

// function ที่มีการส่งค่า
function getcomputerip(){
    return "127.0.0.1";
}
let myip=getcomputerip();
console.log("ip =",myip);

function getnumber(){
    return 100*100;
}
let total=getnumber();
console.log("ผลคูณ100*100 =",total);

function getAddress(){
    let city="แพร่";
    return city;
}
console.log("ที่อยู่ ",getAddress());


// function ที่มีการรับค่าและreturn ค่า
function setsalary(salary){
    let bonus =1000;
    return salary+bonus;
}
let totals=setsalary(15000)
totals-=500
console.log("เงินเดือน+โบนัส =",totals)

//function ที่มีการกำหนดค่าเริ่มต้น
function fullName(fname="nattapat",lname="jantarasugree",city="phrae"){
    console.log("ชื่อ",fname,"นามสุกล",lname,"จังหวัด",city)
}
fullName();

// วิธีประกาศ Function 4 รูปแบบ
// Function Declaration
function square1(x){
    return x*x;
}
let a=square1(5);
console.log(a);

//Fuction Excpression
const square2=function(x){
    return x*x;
}
let b=square2(5);
console.log(b);

//Arrow Function Expression
const square3=(x)=>{
    return x*x;
}
console.log(square3(5));

//Concise Arrow Function Expression
const square4=x=>x*x;
console.log(square4(5));