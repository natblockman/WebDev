// function แบบเดิม
function fullname1(fname,lname){
    return fname+lname;
}
console.log(fullname1("nat","jan"))

function setAge1(age){
    return "อายุ = "+age;
}
console.log(setAge1(26))

// arrow function
const fullname=(fname,lname)=>fname+lname;
setAge=(age)=>"อายุ = "+age;
console.log(fullname("nat","jan"));
console.log(setAge(26))
