const rountTo = require('../utils/roundTo');
const { pow } = require('mathjs');
const roundTo = require('../utils/roundTo');

function norm(x, p, d) {
    if(p === 'inf') {
        console.log('inf norm goes here');
        return 'inf';
    } else {
        let z = 0;
        for (let i = 0; i < x.length; i++) {
            z += pow(x[i], p);
        }
        return roundTo(pow(z, 1/p ), 2);
    }
}


module.exports = norm;