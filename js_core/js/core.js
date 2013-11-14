(function runAll(){
    //case1();
    //case3();
    //case4();
    case5();
    //case8();
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


/**
 * use instanceof
 *  
 */
function case3(){
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
    console.log(employee.__proto__);
    console.log(employee.construtor);
    console.log(employee instanceof Employee);//false
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
        Person.call(this, name, age);///Note the difference bwteen having this line and not
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
    
    console.log("============");
    console.log(student);
}

/**
 * parasitic constructor pattern
 * in the construtor, return an object
 * 
 */
function case5(){
    function Person(age,job) {
        var o = new Object();
        o.age = age;
        o.job = job;
        o.sayJob = function(){
            console.log(this.job);
        };
        return o;//Notice it
    }
    
    var person = new Person(29,"engineer");
    person.sayJob();
    //they're different
    console.log(person.__proto__.constructor);
    console.log(Person.prototype);
}

/**
 * prototype issue
 * 
 */
function case6(){
    function SuperType(){
        this.colors = ["red","green","blue"];
    }
    
    function SubType(){
        
    }
    
    SubType.prototype = new SuperType();
    var instance1 = new SubType();
    instance1.colors.push("white");
    console.log(instance1.colors);
    console.log(instance1);
    
    var instance2 = new SubType();
    console.log(instance2.colors);
}

/**
 * setTimeout(), even though the interval is 300m, but still wait for the loop complete
 * conclusion: the delay does not means execute the function after the specific time. It
 * means the function will add to the queue after specific time.
 * 
 * Note the variable location, put the n in line1 and line2, have different result
 */
function case8(){
    var n = 8 //line1
    
    for (var i=0;i<100;i++) {
        console.log("I'm: " + i);
    }
    
    setInterval(function(){
        console.log("in ther interval, n is " + n);
        --n;
    }, 300);

    setTimeout(function showIt(){
        //var n = 8; //line2
        console.log("n is " + n);
        --n;
        setTimeout(showIt, 300);
    }, 300);
}

