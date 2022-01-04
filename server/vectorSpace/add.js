const roundTo = require('../utils/roundTo');


function add(x, y, d) {
    z = [];
    for (let i = 0; i < x.length; i++) {
        z.push(roundTo(x[i] + y[i], d));
    }
    
    return z;
}


module.exports = add;