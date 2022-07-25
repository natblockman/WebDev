//ค้นหาข้อมูลใน array
//indexOf(ข้อมูล) => ผลการค้นหาได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
//findIndex(ข้อมูล) => ผลการค้นหาได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1



const color=["red","green","blue","yellow","white","black"]

const index1=color.indexOf("white")
console.log(index1)

const index2=color.find(element=>element==="green")
console.log(index2)

const index3=color.findIndex(element=>element==="green")
console.log(index3)
