/*
let score=4;

if(score>70){
    console.log("เกรด  A");
}
else if(score>60&&score<=70){
    console.log("เกรด  B");
}
else if(score>50&&score<=60){
    console.log("เกรด  C");
}
else if(score>40&&score<=50){
    console.log("เกรด  D");
}else{
    console.log("เกรด  F");
}*/
//if..else แบบลดรูป
//ตัวแปร=(เงือ่นไข)?คำสั่งเมื่อเงื่อนไขเป็นจริง:คำสั่งเมื่อเงื่อนไขเป็นเท็จ;
let score=5;
/*
if(score>=50){
    pass="ผ่านเกณฑ์";
}else{
    pass="ไม่ผ่านเกณฑ์";
}
*/
let pass=score>50?"ผ่านเกณฑ์":"ไม่ผ่านเกณฑ์";
console.log(pass);
