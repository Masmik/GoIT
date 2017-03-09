'use strict';
//


$(function () {
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });

    $('select').selectric();

    $(":checkbox").labelauty();


    ////Multilevel Menu

    $('.menu li ul').hide ();
    $('li').hover (
        function () {
            $('ul:first', this).fadeIn ('slow')},
        function () {
            $('ul:first', this).fadeOut ('fast');
        }
    );

});




