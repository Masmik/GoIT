'use strict';
//


$(function () {
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });

    $('select').selectric();

    $(".js-custom :checkbox").labelauty();



    ////Multilevel Menu

    $('.menu li ul').hide ();
    $('.dropdown').hover (
        function () {
            $('ul:first', this).fadeIn ('slow',function(){
                $(this).css( "background-color", "#7abbff" );
            })},
        function () {
            $('ul:first', this).fadeOut ('slow');
        }
    );
});




