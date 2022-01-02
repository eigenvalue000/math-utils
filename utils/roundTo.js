// For any number n, round it to d digits,

function roundTo(n, d) {
    var x = Math.pow(10, d);
    return Math.round((n + Number.EPSILON) * x) / x
}

module.exports = roundTo;