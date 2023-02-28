function Student(name, age, hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby
}

let s1 = new Student("vaibhab", 19, "Football")
let s2 = new Student("garvit", 19, "paisa")

Student.prototype.print = function(){
    console.log("Name:", this.name);
    console.log("age:", this.age);
    console.log("hobby:", this.hobby);
}


console.log(s1);
console.log(s2);

console.log(s1.__proto__ = Student);
console.log(s1.__proto__ = Student.prototype);


s1.print();