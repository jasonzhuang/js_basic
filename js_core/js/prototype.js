function Rectangle(w,h)
{
    this.width=w;
    this.height=h;
}
Rectangle.prototype.equals = function(another) {
    return this.width == another.width && this.height == another.height;
}

Rectangle.prototype.toString = function() {
    return "{" + this.width + "," + this.height + "}";
}
Rectangle.prototype.area=20;
var rect1=new Rectangle(2,4);

//=============inherience ============================
function PositionedRectangle(x,y,w,h) {
    //First, invoke the superclass constructor
    Rectangle.call(this,w,h);
    this.x=x;
    this.y=y;
}

//To subclass Rectangle, we must explicitly create our prototype object
PositionedRectangle.prototype = new Rectangle();

delete PositionedRectangle.prototype.height;
delete PositionedRectangle.prototype.width;

function inspect() {
//Since the prototype object was created with Rectangle() constrcutor, it has a construtor property that refers to that constructor.
//But we want PositionedRectangle objects to have a different constructor property, so we've got to reassign this default constructor property
var r = new PositionedRectangle(10,300,2,5);
console.log(r.constructor == PositionedRectangle);//false
console.log(r.constructor == Rectangle);//true
console.log(r instanceof Rectangle);
console.log(r instanceof PositionedRectangle);
PositionedRectangle.prototype.constructor = PositionedRectangle;
var r2 = new PositionedRectangle(10,300,2,5);
// console.log(r2.constructor == PositionedRectangle);
// console.log(r2.constructor == Rectangle);
// console.log(r2 instanceof Rectangle);
// console.log(r2 instanceof PositionedRectangle);
};

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
