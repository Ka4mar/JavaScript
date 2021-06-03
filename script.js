// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


let simple = 2;


 while (simple <= 100) {
    loop: for ( i = 2; i <= simple; i++) {
        if (simple == i) {
            console.log(i)
        }
        if(simple % i == 0) {
            break loop;
        }
 
     }
    
    simple++;
 }


// 2. Организовать функцию countBasketPrice, которая будет считать стоимость корзины

let basketr = [ 345, 199, 45, 433, 861, 11, 286];
let praceBasket = basketr.reduce(function(summa, elem) {
    return summa + elem
}, 0 )

console.log(praceBasket);


// 3. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.

for ( i = 0; i < 10; console.log(i++)) {

};


// 4. Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
let star = "x";

while (star.length <= 20) {
    console.log(star)
    star+= "x";
};

