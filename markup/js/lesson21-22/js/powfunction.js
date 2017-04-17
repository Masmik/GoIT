"use strict";

function pow(x, n) {
    if (x === "" || n === "" || x === null || n === null) {
        return false;
    }
    if (parseInt(x) != x) {
        throw new Error("x не целое число, введите целое число");
    }
    else if (parseInt(n) != n) {
        throw new Error("n не целое число, введите целое число");
    }
    x = parseInt(x);
    n = parseInt(n);
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

module.exports = pow;
