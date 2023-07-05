async function conclusion() {
    let responce = await fetch("https://raw.githubusercontent.com/tkmii/wine-and-food/master/wine.json"); // Получили файл с сервера
    let wine = await responce.json();  // Преобразовали в JSON

    
    let cardWrap = document.querySelector('.card-wrapper');
    let body = document.querySelector('body');
    let imgWrap = document.createElement("div");
    imgWrap.className = "img-wrapper"
    body.appendChild(imgWrap);
        
    
    function conclusionWine(obj) {
        for (let i = 0; i < wine.length; i++) {
            let card = document.createElement("div"); 
            card.className = 'card'; 
            cardWrap.appendChild(card); // Создаём новый элемент div с классом card и помещаем в div c классом card-wrapper

            let h2 = document.createElement("h2");
            h2.className = 'type-wine'; 
            let types = wine[i].type;
            h2.textContent = types;
            card.appendChild(h2); // Создаём заголовок h2, который равен свойству type в JSON-файле

            let pSort = document.createElement("p");  
            pSort.textContent = "Включает в себя следующие сорта винограда:";
            card.appendChild(pSort); // Новый абзац

            let ulSort = document.createElement("ul"); 
            ulSort.className = 'sort-list';
            let sorts = wine[i].sort;
            for(let j = 0; j < sorts.length; j++) {
                let sortListItem = document.createElement("li");
                sortListItem.className = "sort__item";
                sortListItem.textContent = sorts[j];
                ulSort.appendChild(sortListItem);
            }
            card.appendChild(ulSort);  // Вывела список сортов винограда, оформила через ul и li

            let pComb = document.createElement("p");  
            pComb.textContent = "Сочетается с:"
            card.appendChild(pComb); // Ещё один новый абзац
            
            let ulComb = document.createElement("ul"); 
            ulComb.className = 'combinations-list';
            let combinations = wine[i].combinations;
            for(let k = 0; k < combinations.length; k++) {
                let combListItem = document.createElement("li");
                combListItem.className = "combinations__item";
                combListItem.textContent = combinations[k];
                ulComb.appendChild(combListItem);
            }
            card.appendChild(ulComb);  // Вывела список комбинации с продуктами, оформила через ul и li

            let pBrands = document.createElement("p");  
            pBrands.textContent = "Можете попробовать следующие варианты:"
            card.appendChild(pBrands); // Ещё один новый абзац

            let ulBrands = document.createElement("ul"); 
            ulBrands.className = 'brands-list';
            let brands = wine[i].brands;
            for(let l = 0; l < brands.length; l++) {
                let brandsListItem = document.createElement("li");
                brandsListItem.className = "brands__item";
                brandsListItem.textContent = brands[l];
                ulBrands.appendChild(brandsListItem);
            }
            card.appendChild(ulBrands);  // Вывела бренды вина, оформила через ul и li

            let image = document.createElement("img");
            let images = wine[i].img;
            image.src = images;
            imgWrap.appendChild(image);
        }
    }
    conclusionWine(wine)

} 

conclusion()