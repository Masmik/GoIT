"use strict";

function pow(x, n) {
    if (x == "" || n == "" || x == null || n == null) {
        return false;
    }
    var result = x;
    if (n < 0) {
        n = n * -1;
        for (var i = 1; i < n; i++) {
            result *= x;
        }
        return 1 / result;
    } else if (n === 0) {
        return 1;
    } else {
        for (i = 1; i < n; i++) {
            result *= x;
        }
        return result;
    }
}

// action

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

