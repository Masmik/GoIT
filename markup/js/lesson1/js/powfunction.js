"use strict";

function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

var x = prompt("Введите число");
var n = prompt("Введите степень");

if (parseInt(x) != x) {
    alert("x не целое число, введите целое число");
}
else if (parseInt(n) != n) {
    alert("n не целое число, введите целое число");
} else {
    alert(pow(x, n));
}
