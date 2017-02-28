'use strict';


$(function () {

    function createTooltips() {


    }


    $('body').append('<div class="tooltip"><div class="tipBody"></div></div>');
    var tip;
    $('.hint').mouseover(function (e) {
        tip = $(this).attr('title');
        $(this).attr('title', '');
        $('.tooltip').fadeTo('slow', 0.9).children('.tipBody').html(tip);
    }).mousemove(function (e) {

        $('.tooltip').css('top', e.pageY + 10); // mouse follow!
        $('.tooltip').css('left', e.pageX + 20);

    }).mouseout(function (e) {
        $('.tooltip').hide(); // mouseout: HIDE Tooltip (do not use fadeTo or fadeOut )
        $(this).attr('title', tip); // reset title attr
    });

    $("<button>").on("click", function () {
        $('.tooltip').show();
    })

});

