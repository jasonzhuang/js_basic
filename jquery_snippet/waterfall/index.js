/**
 * Created with JetBrains WebStorm.
 * User: yougen
 * Date: 14-5-25
 * Time: 下午8:24
 * To change this template use File | Settings | File Templates.
 */
$(window).on("load", function(){
    waterfall();
    $(window).on("scroll", function(){
        console.info("trigger scroll");
        var mockData = {"data": [{"src": "0.jpg"},{"src": "1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"}]};
        if(needLoadMore()){
            $.each(mockData.data, function(index, val){
               var box =  $("<div>").addClass("box").appendTo($("#main"));
               var pic = $("<div>").addClass("pic").appendTo($(box));
               $("<img>").attr("src", "images/" + val.src).appendTo($(pic));
            });
            waterfall();
         }
    });

});

function needLoadMore(){
   var lastbox = $("#main").find('.box').last();
   var lastboxDis = lastbox.offset().top + Math.floor(lastbox.outerHeight() /2);
   var scrollTop = $(window).scrollTop();
   var viewHeight = $(window).height();
   return lastboxDis < viewHeight + scrollTop;
}

function waterfall(){
    // calculate items count in one line
    var boxs =  $(".box");
    var boxWidth = boxs.outerWidth();
    var width = $(document).width();
    var cols = Math.floor(width/boxWidth);
    // set container width
    $("#main").width(boxWidth*cols).css("margin: 0 auto");
    // set images position
    var hArray = [];
    boxs.each(function(index, val){
        if(index < cols){
            hArray.push($(this).outerHeight());
        }else {
            var minH = Math.min.apply(null, hArray);
            var minIndex = $.inArray(minH, hArray);
            $(this).css({
                position: 'absolute',
                top: minH + 'px',
                left: minIndex * boxWidth + 'px'
            });
            hArray[minIndex] += $(this).outerHeight();
        }
    });
}