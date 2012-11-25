postMessage("I'm working befor postMessage('ali').");
onmessage = function(event) {
  postMessage('Hi '+event.data);
};