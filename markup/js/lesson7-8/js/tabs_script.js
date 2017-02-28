"use strict";

$(document).ready(function(){

    $('.nav-item').click(function (e) {
        e.preventDefault();
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        $('.content').hide();
        var id = $(this).data('id');
        $('div.content#' + id).show();
    });

    $('.tabs')[0].click();
});


