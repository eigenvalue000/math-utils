const roundTo = require('../utils/roundTo');


function add(x, y, d) {
    z = [];
    for (let i = 0; i < x.length; i++) {
        z.push(roundTo(x[i] + y[i], d));
    }
    console.log(z)
    return z;
}

add([1.3523525, 2.4525255, 3.52452452], [2.524524525, 3.5254545245, 4.54254252], 2)
module.exports = add;