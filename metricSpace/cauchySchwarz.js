const { abs } = require('mathjs');
const dotProduct = require('../innerProductSpace/dotProduct');
const norm = require('./norm');

function cauchySchwarz(x, y, p, d) {
    console.log('x = ', x, '&& y = ', y);
    console.log('|x . y| = ', abs(dotProduct(x, y, d)))
    console.log('||x|| = ', norm(x,p,d), '&& ||y|| = ', norm(y,p,d) );
    console.log('||x||*||y|| = ', norm(x,p, d), '*', norm(y,p,d), ' = ', norm(x,p,d)*norm(y,p,d));
    
}

cauchySchwarz([0.2562356, 172.32637826327, -25635.2367], [2, 3, 6], 2, 4);