
function Employee(name, age){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function(){
        return this.name;
    }
    return o;
}

var employee = new Employee("Nicholas", 29);
// console.log(employee.sayName());
// console.log(employee.__proto__);
// console.log(employee.construtor);
// console.log(employee instanceof Employee);//false


function Person(){
}

Person.prototype = {
    //constructor:Person,
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName : function () {
        alert(this.name);
    }
};

var person = new Person();
console.log(person.__proto__);
console.log(person.constructor);//Object
console.log(Person.prototype.constructor);//Object
console.log(person instanceof Person);//true, because Person.prototype is in person's prototype chain
