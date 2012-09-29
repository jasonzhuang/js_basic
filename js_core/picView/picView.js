$(".zoomple").mousemove(function(event){
    showPreview(event.clientX, event.clientY);
    cropPreview(event.clientX, event.clientY);
});

$(".zoomple").mouseout(function(){
    hidePreview();
});


function showPreview(positionX, positionY) {
    $(".preview").css("display", "block");
}

function hidePreview(){
    $(".preview").css("display", "none"); 
}

function cropPreview(positionX, positionY) {
    $("#previewImg").css({"left":-positionX, "top":-positionY +50});
}
