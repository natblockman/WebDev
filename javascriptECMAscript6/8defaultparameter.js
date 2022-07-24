// Default parameter
getDataCustomer=(customerName,customerAddress="กรุงเทพฯ")=>{
    // if(!customerAddress){
    //     customerAddress="กรุงเทพ"
    // }

    const address=`ชื่อลูกค้า : ${customerName}
    ที่อยู่ ${customerAddress}`
    return address
}

console.log(getDataCustomer("ณัฐภัทร","แพร่"))
console.log(getDataCustomer("โจโจ้")) 