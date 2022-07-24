// Spread Operator

const newArr=[100,200,300]
// นำสมาชิกในnewArrมากระจายใส่ในdata หรือSpread Operator
const data=[10,20,...newArr]
console.log(data)

const color=["red","green","blue"]
const allColor=["yellow","black","white",...color]
const newColor=["grey","aqua"]
allColor.push(...newColor)
console.log(allColor)