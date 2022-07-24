let product={
    name:"mouse",
    price:1500,
    color:"black",
    category:"computer",
    size:"M",
    displayProduct:function(){
        return "ชื่อสินค้า = "+this.name+" ราคา = "+this.price+" หมวดหมู่ = "+this.category;
    },
    discount:function(){
        return this.price-1000;
    },
    getColor:function(){
        return this.color;
    }
}

// console.log(product.displayProduct());
console.log(product.discount());
console.log(product.getColor());
// document.write(product.displayProduct());

// Object
// console.log("ชื่อสินค้า",product.name);
// console.log("ราคา",product.price);
// console.log("หมวดหมู่",product["category"]);

// Array ต้องจำตำแหน่งของแต่ละส่วนไม่มีหมวดหมู่ propertyname
// let item=["เมาส์",1500,"black","computer","M"]
// console.log("ชื่อสินค้า",item[0]);
// console.log("ราคา",item[1]);
// console.log("หมวดหมู่",item[3]);

// Array มี index เป็นตัวเลข ใช้[] Object กำหนดเป็นชื่อ ใช้ {}