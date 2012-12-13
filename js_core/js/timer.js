(function runAll() {
    //init();
    //case4();
    case5();
})()

function init(){
    var table = document.createElement("table");
    table.style.borderWidth = "2px";
    document.body.appendChild(table);
}

/**poor implementatio**/
function case1(){
    var table = document.getElementsByTagName("table");
    for ( var i = 0; i < 2000; i++ ) {
        var tr = document.createElement("tr");
        for (var t = 0; t < 6; t++ ) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode("" + t));
            tr.appendChild(td);
        }
        table[0].appendChild(tr);
    }
}


/**use timer to split**/
function case2(){
    var table = document.getElementsByTagName("table");
    var i=0, max = 1999;
    setTimeout(function(){
        for ( var step = i + 500; i < step; i++ ) {
            var tr = document.createElement("tr");
            for (var t = 0; t < 6; t++ ) {
                var td = document.createElement("td");
                td.appendChild(document.createTextNode("" + t));
                tr.appendChild(td);
            }
            table[0].appendChild(tr); 
        }
        
        if(i < max) {
            setTimeout(arguments.callee, 0);
        }
    }, 0)
}

function processArray(items, process, callback){
    var todo = items.concat(); //create a clone of the original
    
    setTimeout(function(){
        process(todo.shift());
        
        if (todo.length > 0){
            setTimeout(arguments.callee, 25);
        } else {
            callback(items);
        }
      }, 25);
}

/**
 * Asynchronous Test
 */
function case4(){
    (function(){
        var queue = [], timer;
        
        this.test = function(fn){
            queue.push( fn );
            resume();
        };
        
        this.pause = function(){
            clearInterval( timer );
            timer = 0;
        };
        
        this.resume = function(){
            if ( !timer ){
                return;
            }
            timer = setInterval(function(){
                if (queue.length) {
                    queue.shift()();
                }else {
                    pause();
                }
            }, 1);
        };
        
    })();
    
    test(function(){
        pause();
        setTimeout(function(){
            console.log("First test completed");
            resume();
        }, 100);
    });
    
    test(function(){
       pause();
       setTimeout(function(){
           console.log("second test completed");
           resume();
       }, 200) 
    });
}

/**
 * the specified interval indicates when the timer's code will be added to the queue, not when the code will actually be executed
 */
function case5(){
    var btn = document.createElement("button");
    btn.setAttribute("value", "Click");
    btn.style.width = "30px";
    btn.style.height = "20px";
    document.body.appendChild(btn);
    btn.onclick = function(){
        var start = Timer.start();
        setTimeout(function(){
            console.log("timer function");
        }, 250);

        for(var i=0;i<100000000;i++){
            var j = j+1;
        }
        Timer.stop();
        var elapse = Timer.getTime();
        console.log("end onclick: " + elapse);
    }
}


var Timer = function() {
    //private variable
    var _data = {};
    
    return {
        start:function(key) {
            _data[key] = new Date();
        },
        stop:function(key) {
            var time = _data[key];
            if(time) {
                _data[key] = new Date() - time;
            }
            
        },
        getTime:function(key) {
            return _data[key];
        }
    };
}();

function test(){
    var items = [123, 789, 323, 778, 232, 654, 219, 543, 321, 160];
    
    function outputValue(value){
        console.log(value);
    };
    
    processArray(items, outputValue, function(){
        console.log("Done!");
    });
};