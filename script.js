let board = document.querySelector(".board");
let catalog = document.querySelector(".catalog");
let modalWindow = document.querySelector(".modal-window");
let im = document.querySelector(".im");
let elemNum = 0;
let count = 0;
const $popup = document.querySelector("#popup");
const $closePopupBtn = document.querySelector("#closePopupBtn");
const $nextSectionBtn = document.querySelector("#nextSectionBtn");
const $cardDetails = document.querySelector("#cart-details");

let currentCardSection = 1;


// `  Реализовать страницу корзины:
// a) Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
// b) Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.

catalog.addEventListener("click", function(event){
    if(event.target.getAttribute('id')){

        newElem = Number(event.target.getAttribute('id'))
        board.removeChild(board.firstChild);
        basketr.push(product[newElem]);
        basketSumm(basketr, board);
   
        baskerItem(basketr[basketr.length - 1]);   
        
    }
})


//  У товара может быть несколько изображений. Нужно:
// a) Реализовать функционал показа полноразмерных картинок товара в модальном окне;
// b) Реализовать функционал перехода между картинками внутри модального окна. 

catalog.addEventListener("click", function(event){
    if(event.target.getAttribute('src')){
        modalWindow.classList.toggle("open");
        
        elemNum = event.target.parentNode.childNodes[9].getAttribute("id")
        
        im.setAttribute("src", `${product[elemNum].img[0]}`)
        
    }
    
});

modalWindow.addEventListener("click", function(event){
  
    
    if(event.target.classList.contains('slider_next')){
            
        console.log(event.target.classList.contains('slider_next'))
        if(count == (product[elemNum].img.length - 1)){
                      
        } else{
            im.setAttribute("src", `${product[elemNum].img[count+=1]}`)  
        }
    } 
    
    
});

modalWindow.addEventListener("click", function(event){
    if(event.target.classList.contains('slider_prev')){
        if(count == 0){    

        }else{
            im.setAttribute("src", `${product[elemNum].img[count-=1]}`)
        }
    }
   
});

//  Сделать генерацию корзины динамической


let basketr = [];

 function basketSumm(summa, block) {
    block.textContent = "";
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
   
        block.insertAdjacentHTML("beforeend", `<span class = basket>Корзина пуста</span>`)
        
    }else{
        block.insertAdjacentHTML("beforeend", `<span class = basket>В корзине: ${summa.length} товаров на сумму ${sum} рублей</span>`)
    }
    
}

basketSumm(basketr, board);




// 3.  Сделать так, чтобы товары в каталоге выводились при помощи JS:


let product = [ { id:0, name:"samsung", img:["https://ilounge.ua/files/products/apple-iphone-12-pro-max-pacific-blue-kupit_1.1000x.jpg", "https://ilounge.ua/files/products/apple-iphone-12-mini-black-kupit_3.1000x.jpg", "https://ilounge.ua/files/products/iphone-13-8.1000x.jpg"], description:"Apple iPhone 12 Pro Max — новейший флагман с передовым набором технических характеристик и функций", price: 666},{id:1, name:"apple", img:["https://ilounge.ua/files/products/apple-iphone-12-pro-max-pacific-blue-kupit_1.1000x.jpg", "https://ilounge.ua/files/products/apple-iphone-12-mini-black-kupit_3.1000x.jpg", "https://ilounge.ua/files/products/iphone-13-8.1000x.jpg"],description:"Apple iPhone 12 Pro Max — новейший флагман с передовым набором технических характеристик и функций", price: 666},{id:2, name:"sony", img:["https://ilounge.ua/files/products/apple-iphone-12-pro-max-pacific-blue-kupit_1.1000x.jpg", "https://ilounge.ua/files/products/apple-iphone-12-mini-black-kupit_3.1000x.jpg", "https://ilounge.ua/files/products/iphone-13-8.1000x.jpg"],description:"Apple iPhone 12 Pro Max — новейший флагман с передовым набором технических характеристик и функций", price: 666}, {id:3, name:"lg", img:["https://ilounge.ua/files/products/apple-iphone-12-pro-max-pacific-blue-kupit_1.1000x.jpg", "https://ilounge.ua/files/products/apple-iphone-12-mini-black-kupit_3.1000x.jpg", "https://ilounge.ua/files/products/iphone-13-8.1000x.jpg"],description:"Apple iPhone 12 Pro Max — новейший флагман с передовым набором технических характеристик и функций", price: 666},{id:4, name:"sven", img:["https://ilounge.ua/files/products/apple-iphone-12-pro-max-pacific-blue-kupit_1.1000x.jpg", "https://ilounge.ua/files/products/apple-iphone-12-mini-black-kupit_3.1000x.jpg", "https://ilounge.ua/files/products/iphone-13-8.1000x.jpg"],description:"Apple iPhone 12 Pro Max — новейший флагман с передовым набором технических характеристик и функций", price: 666}, ];


class Catalog{

    constructor(arr){
        this.arr = arr;
       
    }

    creatiItem(){
        this.arr.forEach(({id, name, img,description, price}) => {
            catalog.insertAdjacentHTML("beforeend", `<div class = card >
                                                        <span class = card_name>${name}</span>
                                                        <img  src = ${img[0]}>
                                                        <span class = card_style card_desc>О товаре: ${description} </span>
                                                        <span class =  card_style card_price>Цена: ${price} рублей</span>
                                                        <button id=${id} class = card_butt>Добавить в корзину</button>
                                                    </div>`) 
        });
    }
}

let cat = new Catalog(product);
cat.creatiItem();


// ` 1. Реализовать страницу корзины:
// a) Добавить возможность не только смотреть состав корзины, но и редактировать его, обновляя общую стоимость или выводя сообщение «Корзина пуста».


// Отрисовка товара в карзине
function baskerItem(id, name, price) {
    const html = `<div class="cart-item">
        <h2>${name}</h2>
        <span class ="price">${price}</span>
        <button data-id="${id}">Удалить</button>
    </div>`;

    $cardDetails.insertAdjacentHTML('beforeend', html);
    
};

function nextSection() {
    document.querySelector('#section-' + currentCardSection).style.display = 'none' ;
    currentCardSection = currentCardSection < 3 ? currentCardSection + 1 : 1;
    document.querySelector('#section-' + currentCardSection).style.display = 'block' ;
    
};

board.addEventListener('click', function(event){
    if(event.target.style.display ="block"){
     
        
        $cardDetails.textContent = "";
       
    }
    $popup.style.display ="block";
    if($popup.style.display ="block"){

        for(let i = 0; i < basketr.length; i++ ){
            console.log(i,basketr[i]['name'],basketr[i]['price'])
            baskerItem(basketr[i],basketr[i]['name'],basketr[i]['price']);
        }
    }
});

$closePopupBtn.addEventListener('click', function(event){
    $popup.style.display ="none";
    $cardDetails.textContent = "";
});

$nextSectionBtn.addEventListener('click', nextSection);


$cardDetails.addEventListener('click', function(event){
   
    if(event.target.hasAttribute("data-id")){
        console.log(event.target.getAttribute("data-id"))
        event.target.parentNode.remove();
        
        basketr.splice(event.target.getAttribute("data-id"), 1);
        
        basketSumm(basketr, board);
       
    }
    
})

// 2.На странице корзины:
// a) Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
// b) Сделать эти поля сворачиваемыми;
// c) Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу которого есть кнопка «Далее». Если нажать ее,
// сворачивается «Состав корзины» и открывается «Адрес доставки» и так далее.
