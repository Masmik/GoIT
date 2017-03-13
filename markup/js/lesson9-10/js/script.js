'use strict';
//


$(function () {
    $('.jcarousel').jcarousel({});

    $('select').selectric();

    $(".js-custom :checkbox").labelauty();


    ////Multilevel Menu

    $('.menu li ul').hide();
    $('.dropdown').hover(
        function () {
            $('ul:first', this).stop().fadeIn('slow', function () {
                $(this).css("background-color", "#7abbff");
            })
        },
        function () {
            $('ul:first', this).stop().fadeOut({duration: 'slow', queue: false});
        }
    );
});




