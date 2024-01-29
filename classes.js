//Class is a template for creating objects.
class Student {
  constructor(firstName, lastName, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.city = city
    console.log("object created");
  }

  display(){
    console.log(`${this.firstName}:${this.lastName}:${this.city}`)
  }
}
let student1 = new Student("RAM","Bohra","Narnaul")
let studnet2 = new Student("Shyam","Sharma","Lucknow")
studnet2.display();
student1.display();