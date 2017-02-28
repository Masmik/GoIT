"use strict";

$(document).ready(function(){

    $('.tabs').click(function (e) {
        e.preventDefault();
        $('.tabs').removeClass('active');
        $(this).addClass('active');
        $('.content').hide();
        var id = $(this).data('id');
        $('div.content#' + id).show();
    });

    $('.tabs')[0].click();
});


