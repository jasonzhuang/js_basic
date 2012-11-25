function Person(name,age){
    this.name = name;
    this.age = age;
    this.print = function(key){
        if(!!key){
            console.log(key+':'+this[key]);
            return;
        }
        for(var o in this){
            console.log(o+":"+this[o]);
        }
    }
}

function Student(name,age,grade,school){
    Person.call(this, name, age);
    this.grade = grade;
    this.school = school;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

var person = new Person("person", 60);
var student = new Student("student", 20,"2", "zju");
console.log(Person.prototype);
console.log(person.name);
console.log(Student.prototype);
console.log(student.name);



