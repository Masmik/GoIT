'use strict';

function loadMasonry() {

    var grid = document.querySelector('.grid');
    var msnry = new Masonry( grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
    });

    var searchWords = ['cat', 'dog', 'pigs', 'sun', 'smile', 'egypt', 'sea', 'sky', 'tree', 'sand', 'space'];

    var searchWordIndex = Math.floor(Math.random() * (searchWords.length - 1));
    search(searchWords[searchWordIndex]);
    search_partner();

    function mansory_build(data) {
        $('.grid-item').each(function (i) {
            $(this).css('backgroundImage', 'url(' + ((data.hits)[i].webformatURL) + ')');
            $('.item__text:nth-child(' + i + ')').html(data.hits[i].tags.toUpperCase().split(',')[0]);
        });
    }


    function search(request) {
        $.ajax({
            url: 'https://pixabay.com/api/?key=5270170-c6e51883c4d17561ecf30e5fa&q=' + request + '&image_type=photo&min_width=260&per_page=7',
            dataType: 'json',
            method: 'GET',
            success: function (data) {
                if (data.length == 0) {
                    console.log('pixplorer не вернул ни одной картинки');
                    return;
                }
                else {
                    mansory_build(data);
                    // console.log(data);
                }
            }
        });
    }

    console.log($('.search-partners_button'));
    function search_partner() {
        $('.search-partners_button').click(function (e) {
            e.preventDefault();
            search($('#search_query').val());
        });
    }
};

