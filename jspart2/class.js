class Student {
  //class มีattribute กับ construtor
  //attribute
  name;
  age;
  title;
  //con
  constructor(t, n, a) {
    this.name = n;
    this.age = a;
    this.title = t;
  }
  //method
  GetGreetingText(prefix) {
    return prefix + "hello " + this.title + this.name + this.age;
  }
}
/*const student2 = { name: "Earth", age: "20", title: "Mr" };*/
const student1 = new Student("Mr", "Earth", 20);
const student2 = new Student("Mr", "Aek", 21);
const student3 = new Student("Mrs", "Fah", 22);
/*
console.log(student1);
console.log(typeof student1);
console.log(student1 instanceof Student);
console.log(student2 instanceof Student); //student2เป็นตัวอย่างของStudentรึป่าว
*/
console.log(student1.GetGreetingText("hello "));
console.log(student2.GetGreetingText("hi "));
console.log(student3.GetGreetingText("hey "));
