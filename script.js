// 1. Почему код дает именно такие результаты?


let a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5  Потому, что при префикстной форме переменная увеличивает значение и возвращает новое,
d = (2+ b++); alert(d);      // 4  а про постфиксной , тоже увеличивает значение, но возвращает старое которое было до увелечения 
alert(a);                    // 3
alert(b);                    // 3



// 2. Чему будет равен x? 

let f = 2;
let g = 1 + (f *= 2); // Будет равен 5, форма сокращенного арефметического присваивания, пременная а умножается на 2 и переприсваивается, а потому складывается с еденицей



// 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт,
// который работает по следующему принципу:

// 1. если a и b положительные, вывести их разность;
// 2. если а и b отрицательные, вывести их произведение;
// 3. если а и b разных знаков, вывести их сумму;

let x = Number(prompt("Введите первое число: "));
let y = Number(prompt("Введите второе число: "));

if (x > 0 && y > 0)
    console.log(x - y) ;
else if (x < 0 && y < 0)
    console.log( x * y);
else
    console.log( x + y);


// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let randomNum = Number(prompt("Введите число от 0 до 6: "));

switch (randomNum){
    case 0:
    console.log(0);
case 1:
    console.log(1);
case 2:
    console.log(2);
case 3:
    console.log(3);
case 4:
    console.log(4);
case 5:
    console.log(5);
case 6:
    console.log(6);
 }
 
// 5. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

function addition(one, two) {
    return one + two;
}


function subtraction(one, two) {
    return one - two;
}

function multiplication(one, two) {
    return one * two;
}

function division(one, two) {
    return one / two;
}


// 6. Реализовать функцию с тремя параметрами:


function mathOperation(arg1, arg2, operation){
    switch (operation){
        case "сложение":
        concole.log(addition(arg1, arg2,));
        break;
    case "вычитание":
        concole.log(subtraction(arg1, arg2,));
        break;
    case "умножение":
        concole.log(multiplicationn(arg1, arg2,));
        break;
    case "деление":
        concole.log(division(arg1, arg2,));
        break;
    }
}

// 7. Сравнить null и 0. Объяснить результат.
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false  нестрогое равенство и сравнения > < >= <= работают по-разному.
alert( null >= 0 ); // (3) true Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение (3) истинна 
// для нестрогого равенства == значение null действует особое правило: это значения ни к чему не приводится, 

// 8. С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.

function power(val, pow) {
    if (pow == 1){
        return val;
    } else {
        return val * power(x, n - 1);
    }
}
