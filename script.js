// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999

/*
let num = Number(prompt("Введите число от 0 до 999: "));


function transformation(number){

    let newObj =  {units : 0 , dozens : 0, hundreds :0};
   

    if (number > 999) {
        console.log(newObj = {})
        
    }else{
        for( let key in newObj) {
           newObj[key] = (number % 10)

           number = (number - number % 10) /10
        }
    }
    return  console.log(newObj)
}

transformation(num);
*/

// 2. Организовать функцию countBasketPrice, которая будет считать стоимость корзины

let basketr = [ {name: "apple", price: 666}, {name: "samsung", price: 666}, {name: "sony", price: 666} ];

 function basketSumm(summa) {
    let sum = 0
    let news = 0;
    for (let i = 0; i <= summa.length; i++){
        news = summa[i];
        console.log(news)
        for( let key in news) {
            let newKey = key
            console.log(newKey)
            if(newKey == 'price'){
            
                console.log(news[newKey])
                sum += news[newKey]
            }
        }
    }
    return console.log(sum)
}

basketSumm(basketr);

/*
// 3. Подумать над глобальными сущностями.

Можно добавить свойство quantity - которое будет хранить колличество одинакового товара в корзине,
еще можно попробовать добавить метод для подсчета продуктов одинаковых , чтобы потом общий подсчет корзины считал уже посчитаную сумму дублированого продукта,
но не очень уверен что это будет оправданно , потому  что метод посчета корзины общий и так будет)   не могу понять как определить нужность и оправданность кода) со схожим смыслом)

*/