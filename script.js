let board = document.querySelector(".board");
let catalog = document.querySelector(".catalog");
// ` 1. Создать функцию, генерирующую шахматную доску. чтобы доска работала) ёё надо будет разкоментировать в HTML если захотите проверить работу))
/*


function chessboard(x){
    let num = 0
    let letters = ["A", "B", "C", "D", "E", "F", "G", "K"]
    let leters_num= -1

    for( i = 0; i < 8; i++){

        for( j = 0; j < 8; j++){

            if((i+j) % 2 != 0){
                x.insertAdjacentHTML("beforeend", "<div class = black></div>") 
            }
            else{
                x.insertAdjacentHTML("beforeend", `<div class = white></div>`)
            }
            if(i == 0 && j == 0){
                x.lastChild.insertAdjacentHTML("afterbegin",`<div class = num>${num+=1}</div> <div class = let>${letters[leters_num+=1]}</div> `)
            }else{
                if(i == 0){
                    x.lastChild.insertAdjacentHTML("afterbegin", `<span class = num>${num+=1}</span>`)
                }
                if (j == 0){
                    x.lastChild.insertAdjacentHTML("afterbegin", `<span class = let>${letters[leters_num+=1]}</span>`)
                    
                }
            }
        }
        
    }
    
}

chessboard(board);




// 2. Сделать генерацию корзины динамической


let basketr = [ {name:"samsung", price: 666},{name:"apple", price: 666},{name:"sony", price: 666}, {name:"lg", price: 666},{name:"sven", price: 666}, ];

 function basketSumm(summa, block) {
    let sum = 0
    let news = 0;
    for (let i = 0; i <= summa.length; i++){
        news = summa[i];
            
        for( let key in news) {
            let newKey = key
                
            if(newKey == 'price'){
                
                    
                sum += news[newKey]
            }
        }
    }
    if( summa.length == 0){
   
        block.insertAdjacentHTML("beforeend", `<span>Корзина пуста</span>`)
        
    }else{
        block.insertAdjacentHTML("beforeend", `<span>В корзине: ${summa.length} товаров на сумму ${sum} рублей</span>`)
    }
    
}

basketSumm(basketr, board);
*/






// 3.  Сделать так, чтобы товары в каталоге выводились при помощи JS:


let product = [ {name:"samsung", img:"https://ilounge.ua/files/products/apple-iphone-12-pro-max-pacific-blue-kupit_1.1000x.jpg", description:"Apple iPhone 12 Pro Max — новейший флагман с передовым набором технических характеристик и функций", price: 666},{name:"apple", img:"https://ilounge.ua/files/products/apple-iphone-12-pro-max-pacific-blue-kupit_1.1000x.jpg",description:"Apple iPhone 12 Pro Max — новейший флагман с передовым набором технических характеристик и функций", price: 666},{name:"sony", img:"https://ilounge.ua/files/products/apple-iphone-12-pro-max-pacific-blue-kupit_1.1000x.jpg",description:"Apple iPhone 12 Pro Max — новейший флагман с передовым набором технических характеристик и функций", price: 666}, {name:"lg", img:"https://ilounge.ua/files/products/apple-iphone-12-pro-max-pacific-blue-kupit_1.1000x.jpg",description:"Apple iPhone 12 Pro Max — новейший флагман с передовым набором технических характеристик и функций", price: 666},{name:"sven", img:"https://ilounge.ua/files/products/apple-iphone-12-pro-max-pacific-blue-kupit_1.1000x.jpg",description:"Apple iPhone 12 Pro Max — новейший флагман с передовым набором технических характеристик и функций", price: 666}, ];


class Catalog{

    constructor(arr){
        this.arr = arr;
       
    }

    creatiItem(){
        this.arr.forEach(({name, img,description, price}) => {
            catalog.insertAdjacentHTML("beforeend", `<div class = card>
                                                        <span class = card_name>${name}</span>
                                                        <img src = ${img}>
                                                        <span class = card_style card_desc>О товаре: ${description} </span>
                                                        <span class =  card_style card_price>Цена: ${price} рублей</span>
                                                        <button class = card_butt>Добавить в корзину</button>
                                                    </div>`) 
        });
    }
}

let cat = new Catalog(product);
cat.creatiItem();