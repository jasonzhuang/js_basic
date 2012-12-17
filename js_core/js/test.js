var you = {
  type: "person",
  test: function() {
    console.log( this.type + " " );
  }
};

var youClick = $.proxy( you.test, you );
console.log(youClick);


var content = $('<div class="g-sorry">\
                  <div class="m-title">\
                      <button id="closeBtn" class="closeWindow" hidefocus></button>\
                  </div>\
                </div>\
                ');
console.log(content);