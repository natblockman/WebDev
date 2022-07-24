summation=(x,y)=>{
    return x+y;
}
console.log(summation(15,100))

// rest parameter ใช้ในการส่ง parameter เข้าไปใช้งานใน function
summation2=(...numberArr)=>{
    let total=0
    for(let number of numberArr) total+=number
    return total
}
console.log(summation2(205,80,985,56))
