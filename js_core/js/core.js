/*
 *1. When a function is called with the word new in front of it, its "this" variable will point at a new object
 *2. "new" key word create "constructor" property, points at the constructor function, and "construtor" is a property in prototype
 *3. for hidden properties, propertyIsEnumerable return false
 */
console.log("This is core.js");

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

/**
 * Every function in JavaScript is actually a Function object
 */
var foo = function() {
    return ".....";
}

function inspect(){
    console.log(foo.constructor.prototype);
    console.log(foo.constructor);
    
    console.log(killerRabbit.constructor.prototype);
    console.log(blackRabbit.constructor.prototype);
    console.log(killerRabbit.constructor);//points at the Rabbit function
    console.log(blackRabbit.constructor);//points at the Object function
    console.log(Rabbit.prototype.propertyIsEnumerable("construtor"));//false
    console.log(Rabbit.prototype.propertyIsEnumerable("name"));//false
    console.log(Rabbit.prototype.propertyIsEnumerable("legs"));//true
}

/*
 * scope test
 */
function scopeTest(){
    var scope="global";
    
    console.log(scope);//output : "undefined"
    var scope="local";
    console.log(scope);//output : local
};
