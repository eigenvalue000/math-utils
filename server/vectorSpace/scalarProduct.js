// For any two arrays x and y, a vector space
// is defined to be a set with two operations:
// vector addition and scalar multiplication.
// For any x,y\in R^n and a\in R, we have that x+y\in R^n
// and a*x\in R^n.
// So add each component together and place the result in
// an array.

roundTo = require('../utils/roundTo');

function scalarProduct(a, x, d) {
    let z = [];
    for (let i = 0; i < x.length; i++) {
        z.push(roundTo(a * x[i], d));
    }
   
    return z;
}

module.exports = scalarProduct;