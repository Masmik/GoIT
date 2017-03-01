'use strict';


$(function () {
    //Создание отдельного абсолютно спозиционированого блока
    $('body').append('<div class="tooltip-collection"></div>');
    $('.tooltip-collection').css(
        {
            'position': 'absolute',
            'left': '0',
            'top': '0',
            'width': '0',
            'height': '0'
        }
    );

    function addTooltip(uniqId, tip){
        $('.tooltip-collection').append('<div class="tooltip" id="special-' + uniqId + '">'+tip+'</div>');
    }
    //Для всех элементов с класом hint создать свой tip с текстом с атрибута и уникальным классом для связи
    $('.hint').each(function () {

        //Создание уникального индификатора
        var uniqId = Math.floor(Math.random() * 100000) + 1;
        console.log(uniqId);

        $(this).attr('id', 'special-' + uniqId);


        var tip = $(this).attr('title');
        console.log(tip);

        addTooltip(uniqId, tip);
    });

    //Добавить ивент листнер

    $('.hint').mouseover(function(e) {

        //Определить координаты элемента//
            var elementCoordinates = $(this).offset();
            console.log(elementCoordinates);

        //Определить размеры элемента/

        var elementWidth = $(this).width();
        console.log(elementWidth);

        var elementHeight = $(this).height();
        console.log('elh',elementHeight);

        //Определить высоту tooltip/
        var tooltipHeight = $('.tooltip').height();
        console.log(tooltipHeight);

        //Обсчет координат для позиционирования tooltip

        var horizontalCoordinate = elementCoordinates.left + elementWidth + 25;
        console.log(horizontalCoordinate);

        var verticalCoordinate = elementCoordinates.top + (elementHeight/2) - (tooltipHeight/2);
        console.log(verticalCoordinate);

        //Спозиционировать tooitip
        $('tooltip').css({
            'top': verticalCoordinate,
            'left': horizontalCoordinate

        });




    });


});

