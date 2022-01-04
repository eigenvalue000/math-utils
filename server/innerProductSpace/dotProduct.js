const roundTo = require('../utils/roundTo');

function dotProduct(x, y, d) {
    z = 0;
    for (let i = 0; i < x.length; i++) {
        z += x[i] * y[i];
    }
   
    return roundTo(z, d);
}



module.exports = dotProduct;