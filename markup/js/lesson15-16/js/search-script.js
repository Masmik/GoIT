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
            console.log('kasjdgk');
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
            dataType: 'script',
            success: function (data) {

                console.log('data', data, typeof data);

                if (data == null || typeof data.results == 'undefined') {
                    return
                }

                var ul = document.createElement("ul");
                $.each(data.results, function (i, val) {
                    var li = document.createElement("li");
                    li.innerHTML = '<a href="' + +'" title="' + val.url + '" target="_blank">' + val.title + "</a>" + "<span>" + val.url + "</span>" + val.content;
                    ul.appendChild(li);
                });
                $('.results').html(ul);
            },
            complete: function (data, status) {
                console.log(data);
                console.log(status);
            }
        });
    }

});

function GoogleCallback(result) {
    console.log('arguments', arguments);
    console.log(result);
}

// API callback
var GoogleCallbackPayload = {
    "kind": "customsearch#search",
    "url": {
        "type": "application/json",
        "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&cref={cref?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
    },
    "queries": {
        "request": [
            {
                "title": "Google Custom Search - test",
                "totalResults": "28500",
                "searchTerms": "test",
                "count": 10,
                "startIndex": 1,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "003902236944994422703:stfmb841s0e"
            }
        ],
        "nextPage": [
            {
                "title": "Google Custom Search - test",
                "totalResults": "28500",
                "searchTerms": "test",
                "count": 10,
                "startIndex": 11,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "003902236944994422703:stfmb841s0e"
            }
        ]
    },
    "context": {
        "title": "myEngineHabr"
    },
    "searchInformation": {
        "searchTime": 0.919384,
        "formattedSearchTime": "0,92",
        "totalResults": "28500",
        "formattedTotalResults": "28 500"
    },
    "items": [
        {
            "kind": "customsearch#result",
            "title": "Быстрый старт с Google Test / Блог компании Инфопульс ...",
            "htmlTitle": "Быстрый старт с Google \u003cb\u003eTest\u003c/b\u003e / Блог компании Инфопульс ...",
            "link": "https://habrahabr.ru/company/infopulse/blog/164471/",
            "displayLink": "habrahabr.ru",
            "snippet": "31 дек 2012 ... Google Test — это фреймворк от Google для юнит-тестирования кода на С++\n. Общей архитектурой он слегка напоминает ...",
            "htmlSnippet": "31 дек 2012 \u003cb\u003e...\u003c/b\u003e Google \u003cb\u003eTest\u003c/b\u003e — это фреймворк от Google для юнит-тестирования кода на С++\u003cbr\u003e\n. Общей архитектурой он слегка напоминает&nbsp;...",
            "cacheId": "BwqEuBGirqsJ",
            "formattedUrl": "https://habrahabr.ru/company/infopulse/blog/164471/",
            "htmlFormattedUrl": "https://habrahabr.ru/company/infopulse/blog/164471/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "width": "313",
                        "height": "161",
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0rasLtPPaHq-BDZ8C7u7ZzXxtVB-v5eByvLAbg9HKrrYA2rsAE8LxqTo0"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=1024",
                        "fb:app_id": "444736788986613",
                        "og:type": "article",
                        "og:url": "https://habrahabr.ru/company/infopulse/blog/164471/",
                        "og:title": "Быстрый старт с Google Test",
                        "og:image": "https://habrastorage.org/storage2/572/b0d/701/572b0d701e7d9712106546aafaf9ab8f.jpg",
                        "og:description": "Google Test — это фреймворк от Google для юнит-тестирования кода на С++. Общей архитектурой он слегка напоминает общепринятые boost::test и CppUnit, хотя...",
                        "twitter:card": "summary",
                        "twitter:site": "@habrahabr",
                        "al:android:url": "habrahabr://post/164471",
                        "al:android:app_name": "Habrahabr",
                        "al:android:package": "ru.habrahabr",
                        "al:windows_phone:url": "habrahabr://post/164471",
                        "al:windows_phone:app_name": "Habrahabr",
                        "al:windows_phone:app_id": "460a6bd6-8955-470f-935e-9ea1726a6060",
                        "yandex-verification": "71593b225aeafc4e",
                        "referrer": "unsafe-url",
                        "pocket-site-verification": "ed24b2b9721edf0a282c5b4a3232c4",
                        "apple-mobile-web-app-title": "Хабрахабр",
                        "application-name": "Хабрахабр",
                        "msapplication-tilecolor": "#FFFFFF",
                        "msapplication-tileimage": "mstile-144x144.png"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://habrastorage.org/storage2/572/b0d/701/572b0d701e7d9712106546aafaf9ab8f.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Google testing framework (gtest) / Хабрахабр",
            "htmlTitle": "Google testing framework (gtest) / Хабрахабр",
            "link": "https://habrahabr.ru/post/119090/",
            "displayLink": "habrahabr.ru",
            "snippet": "11 май 2011 ... Когда вставал вопрос о тестировании кода, я не задумываясь использовал \nboost::test. Для расширения кругозора попробовал Google ...",
            "htmlSnippet": "11 май 2011 \u003cb\u003e...\u003c/b\u003e Когда вставал вопрос о тестировании кода, я не задумываясь использовал \u003cbr\u003e\nboost::\u003cb\u003etest\u003c/b\u003e. Для расширения кругозора попробовал Google&nbsp;...",
            "cacheId": "EUVH1dtFtaIJ",
            "formattedUrl": "https://habrahabr.ru/post/119090/",
            "htmlFormattedUrl": "https://habrahabr.ru/post/119090/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "width": "168",
                        "height": "111",
                        "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-hs8yfItQiHFmMYHUmIKPwrGfpnO_rLR2dNAOPCeVBgGfSWPGPnNQWYc"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=1024",
                        "fb:app_id": "444736788986613",
                        "og:type": "article",
                        "og:url": "https://habrahabr.ru/post/119090/",
                        "og:title": "Google testing framework (gtest)",
                        "og:image": "https://habrastorage.org/storage/1e47a3d4/0d9c5cc7/2a3df7b2/a7e2f4a7.jpg",
                        "og:description": "Когда вставал вопрос о тестировании кода, я не задумываясь использовал boost::test. Для расширения кругозора попробовал Google Test Framework. Помимо всяких...",
                        "twitter:card": "summary",
                        "twitter:site": "@habrahabr",
                        "al:android:url": "habrahabr://post/119090",
                        "al:android:app_name": "Habrahabr",
                        "al:android:package": "ru.habrahabr",
                        "al:windows_phone:url": "habrahabr://post/119090",
                        "al:windows_phone:app_name": "Habrahabr",
                        "al:windows_phone:app_id": "460a6bd6-8955-470f-935e-9ea1726a6060",
                        "yandex-verification": "71593b225aeafc4e",
                        "referrer": "unsafe-url",
                        "pocket-site-verification": "ed24b2b9721edf0a282c5b4a3232c4",
                        "apple-mobile-web-app-title": "Хабрахабр",
                        "application-name": "Хабрахабр",
                        "msapplication-tilecolor": "#FFFFFF",
                        "msapplication-tileimage": "mstile-144x144.png"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://habrastorage.org/storage/1e47a3d4/0d9c5cc7/2a3df7b2/a7e2f4a7.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Time for Coded UI Tests / Хабрахабр",
            "htmlTitle": "Time for Coded UI \u003cb\u003eTests\u003c/b\u003e / Хабрахабр",
            "link": "https://habrahabr.ru/post/97012/",
            "displayLink": "habrahabr.ru",
            "snippet": "21 июн 2010 ... В данной статье я постараюсь детально рассказать о работе с Coded UI Test\n, одним из множества нововведений Visual Studio 2010, ...",
            "htmlSnippet": "21 июн 2010 \u003cb\u003e...\u003c/b\u003e В данной статье я постараюсь детально рассказать о работе с Coded UI \u003cb\u003eTest\u003c/b\u003e\u003cbr\u003e\n, одним из множества нововведений Visual Studio 2010,&nbsp;...",
            "cacheId": "0jwLfUI5KF8J",
            "formattedUrl": "https://habrahabr.ru/post/97012/",
            "htmlFormattedUrl": "https://habrahabr.ru/post/97012/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "width": "279",
                        "height": "181",
                        "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDVRDWUqYEpSXUdkdqD8k-gICVmsvFUgF-82ZgX7kezOyMnHb9LvLz0Zjs"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=1024",
                        "fb:app_id": "444736788986613",
                        "og:type": "article",
                        "og:url": "https://habrahabr.ru/post/97012/",
                        "og:title": "Time for Coded UI Tests",
                        "og:image": "https://habrastorage.org/storage/habraeffect/5a/0b/5a0b956d32d2004c30d21e71dc6c6d89.png"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://habrastorage.org/storage/habraeffect/5a/0b/5a0b956d32d2004c30d21e71dc6c6d89.png"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Лаборатория тестирования на проникновение «Test lab v.10 ...",
            "htmlTitle": "Лаборатория тестирования на проникновение «\u003cb\u003eTest\u003c/b\u003e lab v.10 ...",
            "link": "https://habrahabr.ru/company/defconru/blog/314842/",
            "displayLink": "habrahabr.ru",
            "snippet": "16 ноя 2016 ... Test lab v.10. 25 ноября 2016 г. в 21:00 (МСК) будет запущена новая, 10-я по \nсчету лаборатория тестирования на проникновение ...",
            "htmlSnippet": "16 ноя 2016 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eTest\u003c/b\u003e lab v.10. 25 ноября 2016 г. в 21:00 (МСК) будет запущена новая, 10-я по \u003cbr\u003e\nсчету лаборатория тестирования на проникновение&nbsp;...",
            "cacheId": "ltjK_3loK58J",
            "formattedUrl": "https://habrahabr.ru/company/defconru/blog/314842/",
            "htmlFormattedUrl": "https://habrahabr.ru/company/defconru/blog/314842/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "width": "385",
                        "height": "131",
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSaYtJBqAzi4-s9VgRJs1Jo1a4IWjjBb7riW-YczfwD2Yw969x6ur3-f8A"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=1024",
                        "fb:app_id": "444736788986613",
                        "og:type": "article",
                        "og:url": "https://habrahabr.ru/company/defconru/blog/314842/",
                        "og:title": "Лаборатория тестирования на проникновение «Test lab v.10» — за гранью хакерских возможностей",
                        "og:image": "https://habrastorage.org/files/e4f/a7f/4a7/e4fa7f4a745241a5a75a41987a2aca68.png",
                        "og:description": "В отличие от CTF, лаборатории Pentestit представляют собой копию реальной структуры компаний с единым сюжетом и взаимосвязанными узлами.  Test lab v.10 25...",
                        "twitter:card": "summary",
                        "twitter:site": "@habrahabr",
                        "al:android:url": "habrahabr://post/314842",
                        "al:android:app_name": "Habrahabr",
                        "al:android:package": "ru.habrahabr",
                        "al:windows_phone:url": "habrahabr://post/314842",
                        "al:windows_phone:app_name": "Habrahabr",
                        "al:windows_phone:app_id": "460a6bd6-8955-470f-935e-9ea1726a6060",
                        "yandex-verification": "71593b225aeafc4e",
                        "referrer": "unsafe-url",
                        "pocket-site-verification": "ed24b2b9721edf0a282c5b4a3232c4",
                        "apple-mobile-web-app-title": "Хабрахабр",
                        "application-name": "Хабрахабр",
                        "msapplication-tilecolor": "#FFFFFF",
                        "msapplication-tileimage": "mstile-144x144.png"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://habrastorage.org/files/e4f/a7f/4a7/e4fa7f4a745241a5a75a41987a2aca68.png"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "И еще немного про сервис тестирования iOS-приложений Test ...",
            "htmlTitle": "И еще немного про сервис тестирования iOS-приложений \u003cb\u003eTest\u003c/b\u003e ...",
            "link": "https://habrahabr.ru/post/133559/",
            "displayLink": "habrahabr.ru",
            "snippet": "28 ноя 2011 ... Спасибо Shmatlay за сегодняшний обзор сервиса Test Flight. Поскольку в \nнашей компании мы им тоже пользуемся и достаточно ...",
            "htmlSnippet": "28 ноя 2011 \u003cb\u003e...\u003c/b\u003e Спасибо Shmatlay за сегодняшний обзор сервиса \u003cb\u003eTest\u003c/b\u003e Flight. Поскольку в \u003cbr\u003e\nнашей компании мы им тоже пользуемся и достаточно&nbsp;...",
            "cacheId": "_orQt7fTk4EJ",
            "formattedUrl": "https://habrahabr.ru/post/133559/",
            "htmlFormattedUrl": "https://habrahabr.ru/post/133559/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "width": "225",
                        "height": "225",
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-ZdxsG5IEaardiaXG5RxuQwgRbcLaKFkcSqcreHrhlnKfGWXZh2d8VOo"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=1024",
                        "fb:app_id": "444736788986613",
                        "og:type": "article",
                        "og:url": "https://habrahabr.ru/post/133559/",
                        "og:title": "И еще немного про сервис тестирования iOS-приложений Test Flight",
                        "og:image": "https://habrahabr.ru/i/habralogo.jpg",
                        "og:description": "Спасибо Shmatlay за сегодняшний обзор сервиса Test Flight. Поскольку в нашей компании мы им тоже пользуемся и достаточно активно, не могу не вставить свои пять...",
                        "twitter:card": "summary",
                        "twitter:site": "@habrahabr",
                        "al:android:url": "habrahabr://post/133559",
                        "al:android:app_name": "Habrahabr",
                        "al:android:package": "ru.habrahabr",
                        "al:windows_phone:url": "habrahabr://post/133559",
                        "al:windows_phone:app_name": "Habrahabr",
                        "al:windows_phone:app_id": "460a6bd6-8955-470f-935e-9ea1726a6060",
                        "yandex-verification": "71593b225aeafc4e",
                        "referrer": "unsafe-url",
                        "pocket-site-verification": "ed24b2b9721edf0a282c5b4a3232c4",
                        "apple-mobile-web-app-title": "Хабрахабр",
                        "application-name": "Хабрахабр",
                        "msapplication-tilecolor": "#FFFFFF",
                        "msapplication-tileimage": "mstile-144x144.png"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://habrahabr.ru/i/habralogo.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Test Case Management Tool: как правильно сделать выбор и не ...",
            "htmlTitle": "\u003cb\u003eTest\u003c/b\u003e Case Management Tool: как правильно сделать выбор и не ...",
            "link": "https://habrahabr.ru/company/redmadrobot/blog/248965/",
            "displayLink": "habrahabr.ru",
            "snippet": "27 янв 2015 ... Это тест-стратегии, тест-планы, test runs и тест-кейсы, traceability matrix, bug \nreports, метрики продуктивности и качества, различные ...",
            "htmlSnippet": "27 янв 2015 \u003cb\u003e...\u003c/b\u003e Это тест-стратегии, тест-планы, \u003cb\u003etest\u003c/b\u003e runs и тест-кейсы, traceability matrix, bug \u003cbr\u003e\nreports, метрики продуктивности и качества, различные&nbsp;...",
            "cacheId": "k4a0s2KSAncJ",
            "formattedUrl": "https://habrahabr.ru/company/redmadrobot/.../248965/",
            "htmlFormattedUrl": "https://habrahabr.ru/company/redmadrobot/.../248965/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "width": "210",
                        "height": "240",
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdV2wH4ohfYZGNK_NlfEx1Y0yDUczJGF1UlVljNH3Yi59f6vTNlcsau9Zh"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=1024",
                        "fb:app_id": "444736788986613",
                        "og:type": "article",
                        "og:url": "https://habrahabr.ru/company/redmadrobot/blog/248965/",
                        "og:title": "Test Case Management Tool: как правильно сделать выбор и не пожалеть об этом",
                        "og:image": "https://habrastorage.org/files/a0c/180/01a/a0c18001a18b493e9f7b8e0962734e1a.jpg",
                        "og:description": "Руководитель QA-подразделения Redmadrobot Илья Горшков рассказывает, как выбирал инструментарий для работы с тест-кейсами.   В процессе работы над любой...",
                        "twitter:card": "summary",
                        "twitter:site": "@habrahabr",
                        "al:android:url": "habrahabr://post/248965",
                        "al:android:app_name": "Habrahabr",
                        "al:android:package": "ru.habrahabr",
                        "al:windows_phone:url": "habrahabr://post/248965",
                        "al:windows_phone:app_name": "Habrahabr",
                        "al:windows_phone:app_id": "460a6bd6-8955-470f-935e-9ea1726a6060",
                        "yandex-verification": "71593b225aeafc4e",
                        "referrer": "unsafe-url",
                        "pocket-site-verification": "ed24b2b9721edf0a282c5b4a3232c4",
                        "apple-mobile-web-app-title": "Хабрахабр",
                        "application-name": "Хабрахабр",
                        "msapplication-tilecolor": "#FFFFFF",
                        "msapplication-tileimage": "mstile-144x144.png"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://habrastorage.org/files/a0c/180/01a/a0c18001a18b493e9f7b8e0962734e1a.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Об исследовательском тестировании в Microsoft Test Manager ...",
            "htmlTitle": "Об исследовательском тестировании в Microsoft \u003cb\u003eTest\u003c/b\u003e Manager ...",
            "link": "https://habrahabr.ru/post/148598/",
            "displayLink": "habrahabr.ru",
            "snippet": "28 июл 2012 ... Об одном из таких инструментов — Microsoft Test Manager 2012 — я и хочу \nрассказать. В 2012-й версии MTM появилась поддержка ...",
            "htmlSnippet": "28 июл 2012 \u003cb\u003e...\u003c/b\u003e Об одном из таких инструментов — Microsoft \u003cb\u003eTest\u003c/b\u003e Manager 2012 — я и хочу \u003cbr\u003e\nрассказать. В 2012-й версии MTM появилась поддержка&nbsp;...",
            "cacheId": "Y64PCgBGAKcJ",
            "formattedUrl": "https://habrahabr.ru/post/148598/",
            "htmlFormattedUrl": "https://habrahabr.ru/post/148598/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "width": "270",
                        "height": "187",
                        "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQN25Yd3rsGEoIjE27qvUwVoItNdGVfdl4_HGeEU8V8FZBVBmja-OgPdZ4"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=1024",
                        "fb:app_id": "444736788986613",
                        "og:type": "article",
                        "og:url": "https://habrahabr.ru/post/148598/",
                        "og:title": "Об исследовательском тестировании в Microsoft Test Manager 2012",
                        "og:image": "https://habrastorage.org/storage2/e7b/210/8ea/e7b2108ea05333e16356b2d587c68017.png",
                        "og:description": "Пару дней назад была статья об исследовательском тестировании, и я хотел бы продолжить тему описанием одного из инструментов, поддерживающих процесс такого...",
                        "twitter:card": "summary",
                        "twitter:site": "@habrahabr",
                        "al:android:url": "habrahabr://post/148598",
                        "al:android:app_name": "Habrahabr",
                        "al:android:package": "ru.habrahabr",
                        "al:windows_phone:url": "habrahabr://post/148598",
                        "al:windows_phone:app_name": "Habrahabr",
                        "al:windows_phone:app_id": "460a6bd6-8955-470f-935e-9ea1726a6060",
                        "yandex-verification": "71593b225aeafc4e",
                        "referrer": "unsafe-url",
                        "pocket-site-verification": "ed24b2b9721edf0a282c5b4a3232c4",
                        "apple-mobile-web-app-title": "Хабрахабр",
                        "application-name": "Хабрахабр",
                        "msapplication-tilecolor": "#FFFFFF",
                        "msapplication-tileimage": "mstile-144x144.png"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://habrastorage.org/storage2/e7b/210/8ea/e7b2108ea05333e16356b2d587c68017.png"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Лаборатория тестирования на проникновение «Test lab v.8 ...",
            "htmlTitle": "Лаборатория тестирования на проникновение «\u003cb\u003eTest\u003c/b\u003e lab v.8 ...",
            "link": "https://habrahabr.ru/company/defconru/blog/272539/",
            "displayLink": "habrahabr.ru",
            "snippet": "10 дек 2015 ... 13 ноября 2015 г. была запущена очередная, восьмая по счету лаборатория \nтестирования на проникновение «Test lab v.8», которая ...",
            "htmlSnippet": "10 дек 2015 \u003cb\u003e...\u003c/b\u003e 13 ноября 2015 г. была запущена очередная, восьмая по счету лаборатория \u003cbr\u003e\nтестирования на проникновение «\u003cb\u003eTest\u003c/b\u003e lab v.8», которая&nbsp;...",
            "cacheId": "zgI1YJ-K-XYJ",
            "formattedUrl": "https://habrahabr.ru/company/defconru/blog/272539/",
            "htmlFormattedUrl": "https://habrahabr.ru/company/defconru/blog/272539/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "width": "324",
                        "height": "155",
                        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTssWhl_Z3rMI-yjCeu1rlnPdXvgUSTg-YzbhIfXaGRlXueFSrYDPqGD0Q"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=1024",
                        "fb:app_id": "444736788986613",
                        "og:type": "article",
                        "og:url": "https://habrahabr.ru/company/defconru/blog/272539/",
                        "og:title": "Лаборатория тестирования на проникновение «Test lab v.8»: банк взломан",
                        "og:image": "https://habrastorage.org/files/fee/4a3/d92/fee4a3d9268a4a809b93b5e9a859b743.png",
                        "og:description": "13 ноября 2015 г. была запущена очередная, восьмая по счету лаборатория тестирования на проникновение «Test lab v.8», которая представляла собой виртуальный...",
                        "twitter:card": "summary",
                        "twitter:site": "@habrahabr",
                        "al:android:url": "habrahabr://post/272539",
                        "al:android:app_name": "Habrahabr",
                        "al:android:package": "ru.habrahabr",
                        "al:windows_phone:url": "habrahabr://post/272539",
                        "al:windows_phone:app_name": "Habrahabr",
                        "al:windows_phone:app_id": "460a6bd6-8955-470f-935e-9ea1726a6060",
                        "yandex-verification": "71593b225aeafc4e",
                        "referrer": "unsafe-url",
                        "pocket-site-verification": "ed24b2b9721edf0a282c5b4a3232c4",
                        "apple-mobile-web-app-title": "Хабрахабр",
                        "application-name": "Хабрахабр",
                        "msapplication-tilecolor": "#FFFFFF",
                        "msapplication-tileimage": "mstile-144x144.png"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://habrastorage.org/files/fee/4a3/d92/fee4a3d9268a4a809b93b5e9a859b743.png"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Test-Driven Development — телега или лошадь? / Хабрахабр",
            "htmlTitle": "\u003cb\u003eTest\u003c/b\u003e-Driven Development — телега или лошадь? / Хабрахабр",
            "link": "https://habrahabr.ru/post/206828/",
            "displayLink": "habrahabr.ru",
            "snippet": "20 дек 2013 ... Test Driven Development (TDD) – неоспоримо выдающаяся техника, дающая \nряд преимуществ. Прикладные разработчики, причём вне ...",
            "htmlSnippet": "20 дек 2013 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eTest\u003c/b\u003e Driven Development (TDD) – неоспоримо выдающаяся техника, дающая \u003cbr\u003e\nряд преимуществ. Прикладные разработчики, причём вне&nbsp;...",
            "cacheId": "oqNVzPTUXHMJ",
            "formattedUrl": "https://habrahabr.ru/post/206828/",
            "htmlFormattedUrl": "https://habrahabr.ru/post/206828/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "width": "249",
                        "height": "202",
                        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRuqJ4bmyqqa9Lt-W_mATh4wFmfGXIuWTfAj_7_rEN8-x1tXB6yqDhI-g4"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=1024",
                        "fb:app_id": "444736788986613",
                        "og:type": "article",
                        "og:url": "https://habrahabr.ru/post/206828/",
                        "og:title": "Test-Driven Development — телега или лошадь?",
                        "og:image": "https://habrastorage.org/getpro/habr/post_images/6a0/f35/5fe/6a0f355feee2722d2f8a947831d5b865.png",
                        "og:description": "Test Driven Development (TDD) – неоспоримо выдающаяся техника, дающая ряд преимуществ. Прикладные разработчики, причём вне зависимости от масштаба проекта и...",
                        "twitter:card": "summary",
                        "twitter:site": "@habrahabr",
                        "al:android:url": "habrahabr://post/206828",
                        "al:android:app_name": "Habrahabr",
                        "al:android:package": "ru.habrahabr",
                        "al:windows_phone:url": "habrahabr://post/206828",
                        "al:windows_phone:app_name": "Habrahabr",
                        "al:windows_phone:app_id": "460a6bd6-8955-470f-935e-9ea1726a6060",
                        "yandex-verification": "71593b225aeafc4e",
                        "referrer": "unsafe-url",
                        "pocket-site-verification": "ed24b2b9721edf0a282c5b4a3232c4",
                        "apple-mobile-web-app-title": "Хабрахабр",
                        "application-name": "Хабрахабр",
                        "msapplication-tilecolor": "#FFFFFF",
                        "msapplication-tileimage": "mstile-144x144.png"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://habrastorage.org/getpro/habr/post_images/6a0/f35/5fe/6a0f355feee2722d2f8a947831d5b865.png"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Тестируем среду для тестирования: MS Visual Studio Test ...",
            "htmlTitle": "Тестируем среду для тестирования: MS Visual Studio \u003cb\u003eTest\u003c/b\u003e ...",
            "link": "https://habrahabr.ru/post/113638/",
            "displayLink": "habrahabr.ru",
            "snippet": "14 фев 2011 ... Мне давненько хотелось вживую «пощупать» Microsoft Visual Studio Test \nProfessional. Все-таки это продукт, позиционируемый Microsoft ...",
            "htmlSnippet": "14 фев 2011 \u003cb\u003e...\u003c/b\u003e Мне давненько хотелось вживую «пощупать» Microsoft Visual Studio \u003cb\u003eTest\u003c/b\u003e \u003cbr\u003e\nProfessional. Все-таки это продукт, позиционируемый Microsoft&nbsp;...",
            "cacheId": "OIbo5MwLVaUJ",
            "formattedUrl": "https://habrahabr.ru/post/113638/",
            "htmlFormattedUrl": "https://habrahabr.ru/post/113638/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "width": "174",
                        "height": "230",
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYukTOUuSJ4qcTTweGjfWDlabxmQNVx7c3usr4gHPKSgmIB4YQLNSC-gZz"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=1024",
                        "fb:app_id": "444736788986613",
                        "og:type": "article",
                        "og:url": "https://habrahabr.ru/post/113638/",
                        "og:title": "Тестируем среду для тестирования: MS Visual Studio Test Professional 2010",
                        "og:image": "https://habrastorage.org/storage/habraeffect/82/2c/822c81f2e957a62c9a38a85cf439fc27.png",
                        "og:description": "Мне давненько хотелось вживую «пощупать» Microsoft Visual Studio Test Professional. Все-таки это продукт, позиционируемый Microsoft как основная платформа для...",
                        "twitter:card": "summary",
                        "twitter:site": "@habrahabr",
                        "al:android:url": "habrahabr://post/113638",
                        "al:android:app_name": "Habrahabr",
                        "al:android:package": "ru.habrahabr",
                        "al:windows_phone:url": "habrahabr://post/113638",
                        "al:windows_phone:app_name": "Habrahabr",
                        "al:windows_phone:app_id": "460a6bd6-8955-470f-935e-9ea1726a6060",
                        "yandex-verification": "71593b225aeafc4e",
                        "referrer": "unsafe-url",
                        "pocket-site-verification": "ed24b2b9721edf0a282c5b4a3232c4",
                        "apple-mobile-web-app-title": "Хабрахабр",
                        "application-name": "Хабрахабр",
                        "msapplication-tilecolor": "#FFFFFF",
                        "msapplication-tileimage": "mstile-144x144.png"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://habrastorage.org/storage/habraeffect/82/2c/822c81f2e957a62c9a38a85cf439fc27.png"
                    }
                ]
            }
        }
    ]
};
