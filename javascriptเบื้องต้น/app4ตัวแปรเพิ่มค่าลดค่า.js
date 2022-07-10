let a=5,b=10
//prefixเพิ่มค่า
console.log("ค่าเริ่มต้น =",a)
console.log("เพิ่มแบบprefix(บวกค่าก่อนนำไปใช้งาน) =",++a)
console.log("ค่าปัจจุบัน =",a)

//postfixเพิ่มค่า
console.log("ค่าเริ่มต้น =",a)
console.log("เพิ่มแบบpostfix(นำไปใช้งานก่อนแล้วค่อย+) =",a++)
console.log("ค่าปัจจุบัน =",a)

//prefixลดค่า
console.log("ค่าเริ่มต้น =",b)
console.log("ลดแบบprefix(ลบค่าก่อนนำไปใช้งาน) =",--b)
console.log("ค่าปัจจุบัน =",b)

//postfixลดค่า
console.log("ค่าเริ่มต้น =",b)
console.log("ลดแบบpostfix(นำไปใช้งานก่อนแล้วค่อย-) =",b--)
console.log("ค่าปัจจุบัน =",b)