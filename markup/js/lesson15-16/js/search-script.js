'use strict';

$(function () {

    var searchText = $('input[name="search-text"]');

    $('.submit-button').click(function (e) {
        e.preventDefault();
        if (searchText.val().length == 0) {
            console.log("Введите поисковый запрос");
        }
        startSearch();
    });

    $('.search-field').keypress(function (e) {
        if (e.keyCode === 13) {
            if (searchText.val().length == 0) {
                console.log("Введите поисковый запрос");
            }
            startSearch();
        }

    });


    function startSearch() {
        var key = 'AIzaSyDIc4WLym0E8jD3CsbFUcwnoX0GgJpNKXI';
        var cx = '003902236944994422703%3Astfmb841s0e';

        var url = 'https://www.googleapis.com/customsearch/v1?' +
            'q=' + searchText.val() +
            '&cx=' + cx +
            '&key=' + key +
            '&callback=GoogleCallback';

        $.ajax({
            url: url,
            dataType: 'script'
        });
    }

});

function GoogleCallback(result) {
    if (result.items.length ==0) {
        return;
    }

    var ul = document.createElement("ul");
    $.each(result.items, function (i, item) {
        var li = document.createElement("li");
        li.innerHTML = '<a href="' + item.link +'" title="' + item.link + '" target="_blank">' + item.title + "</a>" + "<br/><span>" + item.link + "</span><br/>" + item.snippet;
        ul.appendChild(li);
    });
    $('.results').html(ul);
}
