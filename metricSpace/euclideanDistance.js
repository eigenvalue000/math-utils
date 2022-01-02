const norm = require('./norm');
const add = require('../vectorSpace/add');
const scalarProduct = require('../vectorSpace/scalarProduct');

d = 4;
x = [1, 2, 3];
y = [2, 3, 4];

function euclideanDistance(x, y, d) {
    return norm(add(x, scalarProduct(-1, y, d), d), 2, d);
}

console.log(euclideanDistance(x, y, d));

module.exports = euclideanDistance;