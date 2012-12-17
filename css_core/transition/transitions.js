/**
 * Notice the toggle code
 *  
 */
function runDemo() {
  var el = updateTransition();
   
  // Set up an event handler to reverse the direction
  // when the transition finishes.
   
  el.addEventListener("transitionend", updateTransition, true);
}

function updateTransition() {
  var el = document.querySelector("div.slideLeft");
   
  if (el) {
    el.className = "slideRight";
  } else {
    el = document.querySelector("div.slideRight");
    el.className = "slideLeft";
  }
   
  return el;
}