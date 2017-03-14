'use strict';

(function($) {


    $.fn.carousel = function(){
    var leftArrow = $('.carousel-arrow-left');
    var rightArrow = $('.carousel-arrow-right');
    var elementList = $('.carousel-list');


    var pixelsOffset = 125;
    var currentValue = 0;
    var elementsCount = elementList.find('li').length;

    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;


    leftArrow.click(function(){
        if(currentValue != maximumOffset){
        currentValue += 125;
        elementList.animate({left: currentValue + "px"}, 500);
        }
    });
    rightArrow.click(function(){
        if(currentValue != minimumOffset){
        currentValue -= 125;
        elementList.animate({left: currentValue + "px"}, 500);
        }
    });

        return this;
    }

        })(jQuery);
