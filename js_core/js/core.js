/*
 *1. When a function is called with the word new in front of it, its "this" variable will point at a new object
 *2. "new" key word create "constructor" property, points at the constructor function.
 *3. for hidden properties, propertyIsEnumerable return false
 */
(function runAll(){
    //case1();
    //case2();
    //case3();
    case4();
})();

function case1(){
    function Rabbit(name) {
        this.name = name;
        this.speak = function(content) {
            return name + " says: " + content;
        }
    }
    
    var killerRabbit = new Rabbit("black");
    // console.log(killerRabbit.speak("Hello!!!!"));
    
    function makeRabbit(adjective) {
      return {
        adjective: adjective,
        speak: function(content) {/*etc*/}
      };
    }
    
    var blackRabbit = makeRabbit("black");
    
    Rabbit.prototype.legs = "4";
    Rabbit.prototype.say = function(){return "hello"};
    console.log(killerRabbit.constructor.prototype);
    console.log(blackRabbit.constructor.prototype);
    console.log(killerRabbit.constructor);//points at the Rabbit function
    console.log(blackRabbit.constructor);//points at the Object function
    console.log(Rabbit.prototype.propertyIsEnumerable("construtor"));//false
    console.log(Rabbit.prototype.propertyIsEnumerable("name"));//false
    console.log(Rabbit.prototype.propertyIsEnumerable("legs"));//true
}

function case2(){
    function Person(){
        console.log("====Person====");
    }
    
    var person = new Person();
    console.log(person.prototype);//undefined, prototype is in function
    console.log(person.__proto__);
    console.log(Person.prototype);
}

function case3() {
    var scope="global";
    
    console.log(scope);//output : "undefined"
    var scope="local";
    console.log(scope);//output : local
}

/**
 *
 * Since the this object is bound at runtime, calling Person() directly maps this to the global object ( window ) 
 * for...in iterates over the enumerable properties of an object 
 */
function case4() {
    function Person(name,age){
        this.name = name;
        this.age = age;
        this.print = function(name) {
            
        }
    }
    
    function Student(name,age,title){
        Person.call(this, name, age);
        this.title = title;
    }
    
    Person.prototype.location = "hahah";
    Student.prototype = new Person();
    Student.prototype.constructor = Student;
    
    var person = Person("person",25);
    console.log("window.name: " + window.name);
    
    var student = new Student("zokas","20", "engineer");
    for (var prop in student) {
        console.log(prop);
    }
}
