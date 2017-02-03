"use strict";

var arr = [];

for (var i = 0; i < 5; i++) {
    var a = prompt("Введите имя");
    if (a == null || a == ""){
        alert("Вы не ввели имя");
        break;
    } else{
    arr.push(a);
    console.log(arr);
    }
}
function askUserName(){
    if (arr.length < 5){
        return false;
    }
var user = prompt("ВВедите имя пользователя");
}

// есть ли пользователь в массиве arr

function isNameInArr (arr, user){
    for (var j = 0; j < arr.length; j++) {
        if (user !== arr[j]) {
            continue;
        } else {
            return true;
        }
    }

    return false;
}
var result = isNameInArr(arr, user);

if (result == true){
    alert(user + ", вы успешно вошли");
}else if(arr.length < 5){
    alert("Попробуйте еще раз")
} else{
    alert("Пользователя нет в массиве");
}


