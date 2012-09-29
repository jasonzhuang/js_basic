(function(){
    var codename="hello";
    
    function doSomething(){
        console.log(codename);
        console.log(anoterName == undefined);
    }

    doSomething();
    
    var anoterName = "another";
    
    doSomething();
})();
