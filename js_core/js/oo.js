function Person(){
    this._name = null;
    
    this.__defineGetter__("name", function(){
        return this._name;
    });
    
    this.__defineSetter__("name", function(value){
        if(typeof value == "string") {
            this._name = value;
        }
    });
}

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
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.school = school;
}

var person1 = new Person("����", 60);
var student = new Student("С��", 20,"��һ", "���");
person1.print();
person1.print.apply(student,['age']);
person1.print.call(student,'grade','age');


