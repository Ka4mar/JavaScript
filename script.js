// Не выполняя код, ответить, что выведет браузер и почему:
// 1)

if (!("a" in window)) {
    var a = 1;
}
alert(a);  // выведет undefinde

// 2) 


var b = function a(x) {
    x && a(--x);
};
alert(a);

// выведет is not defined

// 3) 
function a(x) {
    return x * 2;
}
var a;
alert(a);

// выведет функцию a

// 5)

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);


// выведет  10

// *6)

function a() {
    alert(this);
}
a.call(null);

//  выведет обыект Window

