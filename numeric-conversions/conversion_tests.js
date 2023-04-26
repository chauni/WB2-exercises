// description: this script tests various numeric conversion techniques
//author: Jordan Q. Newprogrammer

// inputs

var a = "  101.1  ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5  ";

// 

console.log('parseInt', a, parseInt(a));
console.log('parseInt', b, parseInt(b));
console.log('parseInt', c, parseInt(c));
console.log('parseInt', d, parseInt(d));
console.log(' ');

console.log('parseFloat', a, parseFloat(a));
console.log('parseFloat', b, parseFloat(b));
console.log('parseFloat', c, parseFloat(c));
console.log('parseFloat', d, parseFloat(d));
console.log(' ');

console.log('Number', a, Number(a));
console.log('Number', b, Number(c));
console.log('Number', c, Number(c));
console.log('Number', d, Number(d));
console.log(' ');

console.log('+', a, +a);
console.log('+', b, +b);
console.log('+', c, +c);
console.log('+', d, +d);
