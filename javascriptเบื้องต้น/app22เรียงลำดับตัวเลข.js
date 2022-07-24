let point=[20,-5,2,40,100,-500,150];

console.log(point);

//น้อยไปมาก
//aคือค่าลบจะเรียงก่อน bคือค่าบวกจะเรียงทีหลัง
point.sort(function(a,b){
    return a-b;
});
console.log(point);

//มากไปน้อย
//bคือค่าบวกจะเรียงก่อน aคือค่าลบจะเรียงทีหลัง
point.sort(function(a,b){
    return b-a;
});
console.log(point);