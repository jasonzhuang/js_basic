/**
 * worker can't access DOM
 *  
 */
function messageHandler(e) {
    var initData = Number(e.data);
    var result = initData + 200;
    var sum = 0;
    for(var index=1; index<100000; index++) {
        sum = sum +1 ;
    }
    postMessage("worker says: the sum of " + e.data  + " and 200 is " + result + ", and worker result is: " + sum);
    postMessage("Finish task");
}

addEventListener("message", messageHandler, true);