let colors=["แดง","ขาว","ฟ้า","เหลือง","ม่วง","ชมพู","เทา","ดำ","ส้ม"]
console.log(colors)
console.log(typeof(colors));

let x=colors.toString();
console.log(x);

// เปลี่ยน,เป็น-
x=colors.join("-");
console.log(x);

// popเอาสมาชิกตัวท้ายสุดออก
colors.pop();
console.log(colors)

let y=colors.pop();
console.log(y)