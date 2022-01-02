const roundTo = require('../utils/roundTo');

function dotProduct(x, y, d) {
    z = 0;
    for (let i = 0; i < x.length; i++) {
        z += x[i] * y[i];
    }
   
    return roundTo(z, d);
}

console.log(dotProduct([1, 2, 3], [1.22222, 2.342423, 4.324324243], 2));

module.exports = dotProduct;