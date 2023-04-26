var a = 200
var b = 199
var c = 201
var min;
var max;

if ((a < b) && (a < c)){
    min = a;
} else if ((b < a) && (b < c)){
    min = b;
} else if ((c < a) && (c < b)){
    min = c;
}

if ((a > b) && (a > c)){
    max = a;
} else if ((b > a) && (b > c)){
    max = b;
} else if ((c > a) && (c > b)){
    max = c;
}

console.log('the minimum is', min);
console.log('the maximum is', max);