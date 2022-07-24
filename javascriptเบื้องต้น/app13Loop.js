//while เงื่อนไขเป็นค่อยทำ
/*let count=1;
while(count<=5){
    console.log("ผลิตสินค้าชิ้นที่ = ",count);
    if(count==4){
        break;
    }
    count++;
}*/

//for
/*for(let i=1;i<=10;i+=3){
console.log("Hello =",i);
}*/

//DO WHILE ต่างจากwhileตรงลองทำก่อน1ครั้ง

let count=1;
do{
    console.log(count);
    count++;
}while(count<=5);

// break and continue
   
for(let count=1;count<=10;count++){
    // หยุดรอบที่5
    if(count==5)break;
    console.log(count)
}

for(let count=1;count<=10;count++){
    // ข้ามรอบที่5
    if(count==5)continue;
    console.log(count)
}
console.log('จบโปรแกรม')