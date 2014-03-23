/**
 * Created with JetBrains WebStorm.
 * User: yougen.zhuangyg
 * Date: 14-3-23
 * Time: 下午2:58
 * To change this template use File | Settings | File Templates.
 */

$(function(){
    // for testimonials carousel
    var $txtcarousel = $('#testimonial-list'),
        txtcount = $txtcarousel.children().length,
        wrapwidth = (txtcount * 415), // 415 = 400px(width) + 15px(margin)
        animtime = 750;
    $txtcarousel.css('width',wrapwidth);

    // prev & next btns for testimonials
    $('#prv-testimonial').on('click', function(){
        var $last = $('#testimonial-list li:last');
        $last.remove().css({ 'margin-left': '-415px' });
        $('#testimonial-list li:first').before($last);
        $last.animate({ 'margin-left': '0px' }, animtime);
    });

    $('#nxt-testimonial').on('click', function(){
        var $first = $('#testimonial-list li:first');
        $first.animate({ 'margin-left': '-415px' }, animtime, function() {
            $first.remove().css({ 'margin-left': '0px' });
            $('#testimonial-list li:last').after($first);
        });
    });


    // for client list carouse
    var $clientcarousel = $('#clients-list');
    var clients = $clientcarousel.children().length;
    var clientwidth = (clients * 140);
    var rotating = true;
    var clientspeed = 1800;
    var seeclients = setInterval(rotateClients, clientspeed);

    // set width is necessary, for the list in one line
    $clientcarousel.css('width',clientwidth);
    $(document).on({
        mouseenter: function() {
            rotating = false; // turn off rotation when hovering
        },
        mouseleave: function(){
            rotating = true;
        }
    }, '#clients');

    function rotateClients() {
        if(rotating !== false) {
            var $first = $('#clients-list li:first');
            $first.animate({ 'margin-left': '-140px' }, 600, function() {
                $first.remove().css({ 'margin-left': '0px' });
                $('#clients-list li:last').after($first);
            });
        }
    }
});
