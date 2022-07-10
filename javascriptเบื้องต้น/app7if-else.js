
/*age=20

let result=(age==15);
if(result){
    console.log("อายุ15ปี");
}

if(age>=15&&age<=25){
    console.log("อายุระหว่าง15-25ปี");
}*/

let balance =1000;
let withdraw =1500;

if(withdraw<=balance){
    console.log("ดำเนินการถอนเงิน = ",withdraw)
    balance=balance-withdraw;
    console.log("ยอดเงินคงเหลือ = ",balance)
}else{
    console.log("ไม่สามารถถอนเงินได้")
}