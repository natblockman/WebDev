// confirm มีค่าเป็น true เมื่อผู้ใช้คลิก ok เป็น false เมื่อกด cancel
function deleteData(){
    let result=confirm("คุณต้องการลบข้อมูลหรือไม่ ?");
    // console.log(result)
    if(result){
        console.log("ลบข้อมูลเรียบร้อย")
    }else{
        console.log("ยกเลิกการลบข้อมูล")
    }
}