// null คือไม่มีค่าอะไรเลย ไม่เท่ากับ0

//undefined คือไม่กำหนดค่าเริ่มต้น

//NaN คือ not a number หมายถึงตัวแปรที่ไม่ใช่ตัวเลขไปคำนวณทางคณิตศาสตร์

let a;
let b=null;
let c=10-"a"
console.log(a);
console.log(b);
console.log(c);
// b is false(null=false)
if(!b){
    console.log("b is null")
}else{
    console.log("b not null")
}