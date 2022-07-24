// local variable ทำงานในขอบเขต ส่วนใหญ่ทำในfunction
function display(){
    let b=50
    console.log("local variable",b)
}
display();

//global variable ทำงานจนถึงบรรทัดสุดท้าย
let a=100
console.log("global variable ",a)