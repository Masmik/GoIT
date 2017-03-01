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

    function addTooltip(uniqId, tip) {
        $('.tooltip-collection').append('<div class="tooltip" id="special-' + uniqId + '">' + tip + '</div>');
    }

    //Для всех элементов с класом hint создать свой tip с текстом с атрибута и уникальным классом для связи
    $('.hint').each(function () {

        //Создание уникального индификатора
        var uniqId = Math.floor(Math.random() * 100000) + 1;
        $(this).data('id', uniqId);

        var tip = $(this).attr('title');

        addTooltip(uniqId, tip);
    });

    //Добавить ивент листнер

    $('.hint').mouseover(function (e) {
        showToolTip(this);
    }).mouseout(function (e) {
        hideToolTip(this);
    });


    $('.btn').on('click', function (e) {
        e.preventDefault();
        $('.hint').each(function () {
            showToolTip(this);
        });
    });

    function showToolTip(el) {

        //Определить координаты элемента//
        var elementCoordinates = $(el).offset();

        //Определить размеры элемента/
        var elementWidth = $(el).outerWidth();
        var elementHeight = $(el).outerHeight();
        //Определить высоту tooltip/

        var tooltipHeight = $('.tooltip').outerHeight();
        //Обсчет координат для позиционирования tooltip

        var horizontalCoordinate = elementCoordinates.left + elementWidth + 5;
        var verticalCoordinate = elementCoordinates.top + (elementHeight / 2) - (tooltipHeight / 2);
        var uniqId = $(el).data('id');

        //Спозиционировать tooitip
        $('.tooltip#special-' + uniqId).css({
            top: verticalCoordinate,
            left: horizontalCoordinate
        }).removeClass('hide-tooltip').addClass('show-tooltip');
    }

    function hideToolTip(el) {
        var uniqId = $(el).data('id');
        $('.tooltip#special-' + uniqId).removeClass('show-tooltip').addClass('hide-tooltip');
    }

});

