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
let chosenDishDiv = 'chosen-dish-div'

// ********** Variables for Dishes End **********

// ********** Onload Function Start **********

function init() {
    updateDishes();
    updateShoppingCart();
    scrollingChange();
}

// ********** Onload Function End **********

// ********** Category OnScroll Start **********

function scrollingChange() {
    window.onscroll = function () {
        if (window.scrollY > 400) {
            document.getElementById('order-category-div').classList.add('onscroll-category-order-div');
        } else {
            document.getElementById('order-category-div').classList.remove('onscroll-category-order-div');
        }
    }
}

// ********** Category OnScroll End **********

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
    popular.forEach((pop) => {
        let popContent = generateProductTemplate(pop);
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
    burritos.forEach((burrito) => {
        let burritoContent = generateProductTemplate(burrito);
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

function toggleExtension(id) {
    let pop = findProductById(id);
    console.log('Picked dish', pop);
    console.log('ID is', 'extended-popular-' + pop.id);
    toggleClass('extended-popular-' + pop.id, 'hide-extension');
    //document.getElementById('plussymbol').classList.add('d-none'); // TODO
    //document.getElementById('xsymbol').classList.remove('d-none'); // TODO
}

function addAmount(id) {
    let item = findProductById(id);
    item.amount++;
    document.getElementById('amount-counter-' + id).innerHTML = item.amount;
    let overallPrice = printPrice(item);
    document.getElementById('overall-price-' + id).innerHTML = overallPrice + '€';
}

function removeAmount(id) {
    let item = findProductById(id);

    if (item.amount > 0) {
        item.amount--;
    }
    let overallPrice = printPrice(item);
    document.getElementById('overall-price-' + id).innerHTML = overallPrice + '€';
    document.getElementById('amount-counter-' + id).innerHTML = item.amount;
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

];

function addToCart(id) {
    let item = findProductById(id);
    let itemClone = JSON.parse(JSON.stringify(item));

    // Check if item exists in shopping cart already
    let itemInCart = shoppingCart.find((product) => {
        return product.id == id;
    });
    if (itemInCart) {
        // Just refresh amount
        itemInCart.amount = itemInCart.amount + itemClone.amount;
    } else {
        // Regulary add selected item to cart
        shoppingCart.push(itemClone);
    }
    console.log('Shopping cart items are:', shoppingCart);

    updateShoppingCart();
    updateTotalCosts();

    item.amount = 0;
    document.getElementById('overall-price-' + id).innerHTML = '0.00€';
    document.getElementById('amount-counter-' + id).innerHTML = '0';
}


function addShoppingCartProductAmount(id) {
    let item = findShoppingCartItemById(id);
    item.amount++;
    document.getElementById('foodAmountCart-' + id).innerHTML = item.amount + 'x';
    document.getElementById('overall-shopping-cart-price-' + id).innerHTML = printPrice(item) + '€';
    updateTotalCosts();
}

function removeShoppingCartProductAmount(id) {
    let item = findShoppingCartItemById(id);
    if (item.amount > 0) {
        item.amount--;
    }

    console.log('ID is', 'foodAmountCart-' + id);
    document.getElementById('foodAmountCart-' + id).innerHTML = item.amount + 'x';
    document.getElementById('overall-shopping-cart-price-' + id).innerHTML = printPrice(item) + '€';
    updateTotalCosts();
}

function updateTotalCosts() {
    let subtotal = 0;

    shoppingCart.forEach((item) => {
        subtotal += item.price * item.amount;
    });

    let delivery_costs = 4.00;
    let total_bill = subtotal + delivery_costs;

    document.getElementById('costs-subtotal').innerHTML = subtotal.toFixed(2) + '€';
    document.getElementById('costs-delivery').innerHTML = delivery_costs.toFixed(2) + '€';
    document.getElementById('costs-total').innerHTML = total_bill.toFixed(2) + '€';

}

/**
 * Removes an item from the shpping cart 
 * @param {string} id - Id of the Product that should be removed
 */
function deleteFromShoppingCart(id) {
    shoppingCart = shoppingCart.filter((p) => {
        return p.id != id;
    });
    updateShoppingCart();
    updateTotalCosts();
}

// **** Pushing in Cart End ****

// ********** Get all selected Dishes from shoopingcart(JSON) start **********

function updateShoppingCart() {
    document.getElementById('chosen-dishes').innerHTML = '';
    if (shoppingCart.length > 0) {
        document.getElementById('no-order-div').classList.add('d-none');
        document.getElementById('chosen-dishes').classList.remove('d-none');
        shoppingCart.forEach(function (chosenDish) {

            let chosenDishcontent = `
            <div class="${chosenDishDiv}"> 
            <div class="number-box-cart"> 
            <div onclick="removeShoppingCartProductAmount(${chosenDish.id})" style="cursor: pointer;" class="number-box-div-cart">
                <span>-</span>
             </div>
             <div class="number-box-div-cart">
                <span id="foodAmountCart-${chosenDish.id}" style="color: rgb(21, 116, 245) !important; font-size: 12px !important">${chosenDish.amount}x</span>
            </div>
            <div onclick="addShoppingCartProductAmount(${chosenDish.id})" style="cursor: pointer;" class="number-box-div-cart">
                <span>+</span>
            </div>
            </div>
            <span style="font-size: 12px;" >${chosenDish.title}</span>
            <span style="font-size: 12px;" id="overall-shopping-cart-price-${chosenDish.id}">${printPrice(chosenDish)}€</span>
            <img style="cursor: pointer;" onclick="deleteFromShoppingCart(${chosenDish.id})" class="${trashImg}" src="./img/trash.png">
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

