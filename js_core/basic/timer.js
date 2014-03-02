(function runAll() {
    //case1();
    case2();
})()

function init(){
    var table = document.createElement("table");
    table.style.borderWidth = "2px";
    document.body.appendChild(table);
}

/**poor implementation**/
function case1(){
    init();
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
    init();
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
