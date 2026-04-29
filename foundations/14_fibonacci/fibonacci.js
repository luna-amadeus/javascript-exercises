const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    let [a, b] = [0, 1];
    for (let pos = 0; pos < n; pos ++) {
        [a, b] = [b, a + b];
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
