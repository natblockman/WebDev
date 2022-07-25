//array filter
// const data=[10,20,30,40,50]

// const a=data.filter(e=>{
//     return e>20
// })
// const a=data.filter(e=>e>20)
// console.log(a)



const data=[
    {name:"nat",salary:25000,department:"programmer"},
    {name:"jojo",salary:15000,department:"IT support"},
    {name:"bell",salary:35000,department:"assistant Manager"},
    {name:"jack",salary:45000,department:"Manager"},
    {name:"joy",salary:55000,department:"CEO"},
]

const b=data.filter(e=>{
    return e.salary>20000
}).filter(e=>e.department==="programmer")
console.log(b)
