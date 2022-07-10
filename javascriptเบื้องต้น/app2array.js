//array
//วิธีที่1
let number=Array(1,200,"3",4.5,true);
console.log(number);
//index สมาชิกตัวแรกเริ่มต้นที่เลข0หมายถึงสมาชิกตัวแรก
console.log("ตัวแรก =",number[0]);
console.log("ตัวที่สี่ =",number[3]);
document.write(number[0]+"<br>");

//วิธีที่2
let color=["แดง","น้ำเงิน","เขียว","ฟ้า"];
color[1]="เหลือง"
console.log(color[1]);