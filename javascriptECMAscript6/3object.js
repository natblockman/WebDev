// Object
// const customer={
//     customerName:"ณัฐภัทร",
//     age:26,
//     address:"แพร่"
// }
// console.log(customer)

//ตัวแปรเก็บข้อมูล
const customerName="nattapat"
const age=26;
const address="แพร่"

const customer={
        //  customerName:customerName,
        //  age:age,
        // address:address
        customerName,
        age,
        address,
        showData(){
            console.log("ข้อมูลลูกค้า = "+customerName)
        }
     }
customer.showData();

    