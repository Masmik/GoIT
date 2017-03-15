'use strict';

$(function(){

//$('body').carousel();

    var html = $('#test').html();

    var data = {
        name: 'Масливец Татьяна',
        className: [
            'content',
            'personal_info',
            'my_photo',
            'study_goals',
            'contact_info',
            'tel_number',
            'fb',
            'fb_profile',
            'feedback'
        ],
        url: 'img/My_photo.jpg',
        position: 'Аккаунт-менеджер в Grape Ukraine',
        goal:'Хочу учить фронтенд, потому что:',
        items: [
            {
            content: 'Делать что-то своими руками - это удовольствие'
            },
            {
            content:'Можно сразу увидеть результат своей работы'
            },
            {
            content:'Необходимо всегда изучать что-то новое'
            }
        ],
        phone: 'Мой контактный телефон',
        number: '+380631870183',
        fb: 'Мой профиль в Facebook:',
        fbLink:'https://www.facebook.com/t.mykhailiuk',
        fbText: 'facebook.com',
        feedback: 'Мой фидбек',
        feedbacText: 'Знаю, когда у клиента бывает 100500 правок )'
    };

    var content = tmpl(html, data);

    $('body').append(content);

});
