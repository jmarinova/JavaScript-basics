var a = 2;
var b = 5;
var c = -3;

var d = (Math.pow(b,2) - (4*a*c));
var x1 = (-(b) + Math.sqrt(d))/(2*a);
var x2 = (-(b) - Math.sqrt(d))/(2*a);

if (d > 0) {
    console.log("X1 = " + x1);
    console.log("X2 = " + x2);
}

if (d = 0) {
    var x = x1;
    console.log("X = " + x)
}

if (d < 0){
    console.log('No real roots');
}