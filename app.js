// ********** Variables for Dishes start **********

let dishDiv = 'dish-div';
let titleDiv = 'dish-div-title-div';
let descriptionDiv = 'dish-div-description-div';
let variationDiv = 'dish-div-variation-div';
let priceDiv = 'dish-div-price-div';
let btnDiv = 'dish-div-btn-div';
let plusImg = 'plus-img';
let trashImg = 'trash-img';
let dishDivExtension = 'dish-div-extension'
let foodAmount = 0;
let chosenDishDiv = 'chosen-dish-div'

// ********** Variables for Dishes End **********

// ********** Onload Function Start **********

function init() {
    updateDishes()
    chosenDishes()
}

// ********** Onload Function End **********

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
        let newAmount = 0;
        let popContent = `
        <div  id="popular-${pop.id}" class="${dishDiv}">
            <div onclick="dishPickExtension(${pop.id})" class="dish-div-main">
            <div id="popular-title" class="${titleDiv}">
                <h3>${pop.title}</h3>
            </div>
            <div class="${descriptionDiv}">
                 <p>${pop.description}</p>
            </div>
             <div class="${variationDiv}">
                 <p>${pop.variation}</p>
            </div>
             <div id="popular-price" class="${priceDiv}">
                 <p>${pop.price}€</p>
             </div>
            <div class="${btnDiv}">
                 <img id="plussymbol" class="${plusImg}" src="./img/plus.png">
                 <img id="xsymbol" class="${plusImg} d-none" src="./img/x.png">
            </div>
            </div>
            <div class="${dishDivExtension} d-none" id="extended-popular-${pop.id}"> 
                <div class="number-box">
                    <div onclick="removeAmount(${pop.id})" style="cursor: pointer;" class="number-box-div">
                        <span>-</span>
                    </div>
                    <div id="foodAmount" class="number-box-div">
                        <span id="value" style="color: rgb(21, 116, 245) !important;">${newAmount}</span>
                     </div>
                     <div onclick="addAmount(${pop.id})" style="cursor: pointer;" class="number-box-div">
                         <span>+</span>
                    </div>
                 </div>
       
                <input class="input-order-field" id="inputPopular-${pop.id}" placeholder ="Please enter your additional wishes">

                <div class="addToCartBtn" onclick="addToCart()">
                <span>${pop.price*pop.amount}€<span>
                </div>
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
        <div  id="sider-${sider.id}" class="${dishDiv}">
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

// ********** Dish Picker Extension Start **********

function dishPickExtension(id) {
    let pop = popular[id];
    console.log('Picked dish', pop);
    console.log('ID is', 'extended-popular-' + pop.id);
    document.getElementById('extended-popular-' + pop.id).classList.remove('d-none');
    //document.getElementById('plussymbol').classList.add('d-none'); // TODO
    //document.getElementById('xsymbol').classList.remove('d-none'); // TODO
}

function addAmount(id) {
    let valueChange = document.getElementById('value');
    newAmount++;
    valueChange.innerHTML = newAmount;
}

function removeAmount(id) {
    let valueChange = document.getElementById('value');
    if (newAmount !== 0) {
        newAmount--;
    }
    valueChange.innerHTML = newAmount;
}

// ********** Dish Picker Extension End **********

// ********** Get all Dishes from menu.js (JSON) End **********

// ********** Info Blend Start **********

function infoDiv() {
    document.getElementById('infoDiv').classList.remove('d-none');
}



// ********** Info Blend End **********

// ********** Shopping Cart Section start **********

// ********** Get all selected Dishes from shoopingcart(JSON) start **********

// **** Pushing in Cart Start ****

let shoppingCart = [
    {
        amount: '2',
        title: 'Dummy',
        variation: '',
        price: 13.98

    },
    {
        amount: '1',
        title: 'Salad',
        variation: 'more Meat, avocado sauce',
        price: 5.99

    }
    
];

function addToCart() {
    let NewChosenDish = {
        title: document.getElementById('popular-title').value,
    }

}

// **** Pushing in Cart End ****

// ********** Get all selected Dishes from shoopingcart(JSON) start **********

function chosenDishes() {
    if (shoppingCart.length > 0) {
        document.getElementById('no-order-div').classList.add('d-none');
        document.getElementById('chosen-dishes').classList.remove('d-none');
        shoppingCart.forEach(function(chosenDish) {
        
            let chosenDishcontent = `
            <div class="${chosenDishDiv}"> 
            <div class="number-box-cart"> 
            <div onclick="removeAmount(${chosenDish.amount})" style="cursor: pointer;" class="number-box-div-cart">
                <span>-</span>
             </div>
             <div id="foodAmount" class="number-box-div-cart">
                <span id="value" style="color: rgb(21, 116, 245) !important; font-size: 12px !important">${chosenDish.amount}x</span>
            </div>
            <div onclick="addAmount(${chosenDish.amount})" style="cursor: pointer;" class="number-box-div-cart">
                <span>+</span>
            </div>
            </div>
            <span style="font-size: 12px;" >${chosenDish.title}</span>
            <span style="font-size: 12px;">${chosenDish.price}</span>
            <img class="${trashImg}" src="./img/trash.png">
            </div>`;
            document.getElementById('chosen-dishes').insertAdjacentHTML("beforeend", chosenDishcontent);
        });
    } else {
        document.getElementById('no-order-div').classList.remove('d-none');
        document.getElementById('chosen-dishes').classList.add('d-none');
    }
}

// ********** Get all selected Dishes from shoopingcart(JSON) End **********

// ********** Shopping Cart Section End **********

