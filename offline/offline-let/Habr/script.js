//'use strict';
 var Bob;
//Bob в России
var dreamplug = new Object();
dreamplug.price = 300;
//let(dreamplug.price = 150){
////Bob приехал в Европу
//    Bob.buy(dreamplug); // Bob покупает dream plug за 150$
//};
//Bob вернулся в Россию
Bob.onmessage = function (event) {
    if (event.data == "Сколько стоил?")Bob.postmessage(price + "$", event.origin); //Когда Bob-а спрашивают он отвечает
};
//Данный пример заработает только если вы определите обьект Bob с методом buy
//И да, я выражаю человеческие разговоры через JavaScript

