function hello(){
    console.log("hello");
}


var obj = {name:"ss"};

hello.call(obj["name"]);
