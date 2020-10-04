// ********** Variables for Dishes start **********

let dishDiv = 'dish-div';
let titleDiv = 'dish-div-title-div';
let descriptionDiv = 'dish-div-description-div';
let variationDiv = 'dish-div-variation-div';
let priceDiv = 'dish-div-price-div';
let btnDiv = 'dish-div-btn-div';
let plusImg = 'plus-img';

// ********** Variables for Dishes End **********

// ********** Onload Function Start **********

function init() {
    updateDishes()
}

// ********** Onload Function Ende **********

// ********** Get all Dishes from menu.js (JSON) Start **********

function updateDishes() {
    popularDishes();
    saladDishes();
    burritoDishes();
    bowlDishes();
    veganDishes();
    siderDishes();
    dessertDishes();
    drinksList();
    alcoholList();
}

function popularDishes() {
    popular.forEach(function (pop) {
        let popContent = `
        <div id="popular-${pop.id}" class="${dishDiv}">
        <div class="${titleDiv}">
        <h3>${pop.title}</h3>
        </div>
        <div class="${descriptionDiv}">
            <p>${pop.description}</p>
        </div>
        <div class="${variationDiv}">
            <p>${pop.variation}</p>
        </div>
        <div class="${priceDiv}">
            <p>${pop.price}€</p>
        </div>
        <div class="${btnDiv}">
            <img class="${plusImg}" src="./img/plus.png">
        </div>
        </div>
        `;
        document.getElementById('popular-div').insertAdjacentHTML("beforeend", popContent);
    });
}

function saladDishes() {
    salads.forEach(function (salad) {
        let saladContent = `
    <div id="salad-${salad.id}" class="${dishDiv}">
    <div class="${titleDiv}">
    <h3>${salad.title}</h3>
    </div>
    <div class="${descriptionDiv}">
        <p>${salad.description}</p>
    </div>
    <div class="${variationDiv}">
        <p>${salad.variation}</p>
    </div>
    <div class="${priceDiv}">
        <p>${salad.price}€</p>
    </div>
    <div class="${btnDiv}">
        <img class="${plusImg}" src="./img/plus.png">
    </div>
    </div>
    `;
        document.getElementById('salads-div').insertAdjacentHTML("beforeend", saladContent);
    });
}

function burritoDishes() {
    burritos.forEach(function (burrito) {
        let burritoContent = `
        <div id="burrito-${burrito.id}" class="${dishDiv}">
        <div class="${titleDiv}">
        <h3>${burrito.title}</h3>
        </div>
        <div class="${descriptionDiv}">
            <p>${burrito.description}</p>
        </div>
        <div class="${variationDiv}">
            <p>${burrito.variation}</p>
        </div>
        <div class="${priceDiv}">
            <p>${burrito.price}€</p>
        </div>
        <div class="${btnDiv}">
            <img class="${plusImg}" src="./img/plus.png">
        </div>
        </div>
        `;
        document.getElementById('burritos-div').insertAdjacentHTML("beforeend", burritoContent);

    });
}

function bowlDishes() {
    bowls.forEach(function (bowl) {
        let bowlContent = `
        <div id="bowl-${bowl.id}" class="${dishDiv}">
        <div class="${titleDiv}">
        <h3>${bowl.title}</h3>
        </div>
        <div class="${descriptionDiv}">
            <p>${bowl.description}</p>
        </div>
        <div class="${variationDiv}">
            <p>${bowl.variation}</p>
        </div>
        <div class="${priceDiv}">
            <p>${bowl.price}€</p>
        </div>
        <div class="${btnDiv}">
            <img class="${plusImg}" src="./img/plus.png">
        </div>
        </div>
        `;
        document.getElementById('bowls-div').insertAdjacentHTML("beforeend", bowlContent);
    });
}

function veganDishes() {
    vegan.forEach(function (veg) {
        let veganContent = `
            <div id="vegan-${veg.id}" class="${dishDiv}">
            <div class="${titleDiv}">
            <h3>${veg.title}</h3>
            </div>
            <div class="${descriptionDiv}">
                <p>${veg.description}</p>
            </div>
            <div class="${variationDiv}">
                <p>${veg.variation}</p>
            </div>
            <div class="${priceDiv}">
                <p>${veg.price}€</p>
            </div>
            <div class="${btnDiv}">
                <img class="${plusImg}" src="./img/plus.png">
            </div>
            </div>
            `;
        document.getElementById('vegan-div').insertAdjacentHTML("beforeend", veganContent);
    });
}

function siderDishes() {
    siders.forEach(function (sider) {
        let siderContent = `
        <div id="sider-${sider.id}" class="${dishDiv}">
        <div class="${titleDiv}">
        <h3>${sider.title}</h3>
        </div>
        <div class="${descriptionDiv}">
            <p>${sider.description}</p>
        </div>
        <div class="${variationDiv}">
            <p>${sider.variation}</p>
        </div>
        <div class="${priceDiv}">
            <p>${sider.price}€</p>
        </div>
        <div class="${btnDiv}">
            <img class="${plusImg}" src="./img/plus.png">
        </div>
        </div>
        `;
        document.getElementById('siders-div').insertAdjacentHTML("beforeend", siderContent);
    });

}

function dessertDishes() {
    desserts.forEach(function (dessert) {
        let dessertContent = `
        <div id="dessert-${dessert.id}" class="${dishDiv}">
        <div class="${titleDiv}">
        <h3>${dessert.title}</h3>
        </div>
        <div class="${descriptionDiv}">
            <p>${dessert.description}</p>
        </div>
        <div class="${variationDiv}">
            <p>${dessert.variation}</p>
        </div>
        <div class="${priceDiv}">
            <p>${dessert.price}€</p>
        </div>
        <div class="${btnDiv}">
            <img class="${plusImg}" src="./img/plus.png">
        </div>
        </div>
        `;
        document.getElementById('desserts-div').insertAdjacentHTML("beforeend", dessertContent);
    });
}

function drinksList() {
    drinks.forEach(function (drink) {
        let drinkContent = `
        <div id="drink-${drink.id}" class="${dishDiv}">
        <div class="${titleDiv}">
        <h3>${drink.title}</h3>
        </div>
        <div class="${descriptionDiv}">
            <p>${drink.description}</p>
        </div>
        <div class="${variationDiv}">
            <p>${drink.variation}</p>
        </div>
        <div class="${priceDiv}">
            <p>${drink.price}€</p>
        </div>
        <div class="${btnDiv}">
            <img class="${plusImg}" src="./img/plus.png">
        </div>
        </div>
        `;
        document.getElementById('non-alcoholic-drinks-div').insertAdjacentHTML("beforeend", drinkContent);
    });

}

function alcoholList() {
    alcohol.forEach(function (alc) {
        let alcContent = `
        <div id="alc-${alc.id}" class="${dishDiv}">
        <div class="${titleDiv}">
        <h3>${alc.title}</h3>
        </div>
        <div class="${descriptionDiv}">
            <p>${alc.description}</p>
        </div>
        <div class="${variationDiv}">
            <p>${alc.variation}</p>
        </div>
        <div class="${priceDiv}">
            <p>${alc.price}€</p>
        </div>
        <div class="${btnDiv}">
            <img class="${plusImg}" src="./img/plus.png">
        </div>
        </div>
        `;
        document.getElementById('alcoholic-drinks-div').insertAdjacentHTML("beforeend", alcContent);
    });
}

// ********** Get all Dishes from menu.js (JSON) End **********
