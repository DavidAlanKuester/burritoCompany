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
    window.onscroll = () => {
        if (window.scrollY > 400) {
            document.getElementById('order-category-div').classList.add('onscroll-category-order-div');
        } else {
            document.getElementById('order-category-div').classList.remove('onscroll-category-order-div');
        }
    }
}

// ********** Category OnScroll End **********

// ********** Get all Products from menu.js (JSON) Start **********

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
    salads.forEach((salad) => {
        let saladContent = generateProductTemplate(salad);
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
    bowls.forEach((bowl) => {
        let bowlContent = generateProductTemplate(bowl);
        document.getElementById('bowls-div').insertAdjacentHTML("beforeend", bowlContent);
    });
}

function veganDishes() {
    vegan.forEach(function (veg) {
        let veganContent = generateProductTemplate(veg);
        document.getElementById('vegan-div').insertAdjacentHTML("beforeend", veganContent);
    });
}

function siderDishes() {
    siders.forEach(function (sider) {
        let siderContent = generateProductTemplate(sider);
        document.getElementById('siders-div').insertAdjacentHTML("beforeend", siderContent);
    });

}

function dessertDishes() {
    desserts.forEach(function (dessert) {
        let dessertContent = generateProductTemplate(dessert);
        document.getElementById('desserts-div').insertAdjacentHTML("beforeend", dessertContent);
    });
}

function drinksList() {
    drinks.forEach(function (drink) {
        let drinkContent = generateProductTemplate(drink);
        document.getElementById('non-alcoholic-drinks-div').insertAdjacentHTML("beforeend", drinkContent);
    });

}

function alcoholList() {
    alcohol.forEach(function (alc) {
        let alcContent = generateProductTemplate(alc);
        document.getElementById('alcoholic-drinks-div').insertAdjacentHTML("beforeend", alcContent);
    });
}

// ********** Get all Products from menu.js (JSON) End **********

// ********** Product Picker Extension Start **********

function toggleExtension(id) {
    let product = findProductById(id);
    toggleClass('extended-product-' + product.id, 'hide-extension');
    //document.getElementById('plussymbol').classList.add('d-none'); // TODO
    //document.getElementById('xsymbol').classList.remove('d-none'); // TODO
}

function addAmount(id) {
    let product = findProductById(id);
    product.amount++;
    document.getElementById('amount-counter-' + id).innerHTML = product.amount;
    let overallPrice = printPrice(product);
    document.getElementById('overall-price-' + id).innerHTML = overallPrice + '€';
}

function removeAmount(id) {
    let product = findProductById(id);
    if (product.amount > 0) {
        product.amount--;
    }
    let overallPrice = printPrice(product);
    document.getElementById('overall-price-' + id).innerHTML = overallPrice + '€';
    document.getElementById('amount-counter-' + id).innerHTML = product.amount;
}

// ********** Product Picker Extension End **********


// ********** Info Blend Start **********

function infoDiv() {
    document.getElementById('infoDiv').classList.remove('d-none');
}



// ********** Info Blend End **********

// ********** Shopping Cart Section start **********

// ********** Get all selected Products from shoopingcart(JSON) start **********

// **** Pushing in Cart Start ****

let shoppingCart = [

];

function addToCart(id) {
    let product = findProductById(id);
    let productClone = JSON.parse(JSON.stringify(product));

    // Check if product exists in shopping cart already
    let productInCart = shoppingCart.find((product) => {
        return product.id == id;
    });
    if (productInCart) {
        // Just refresh amount
        productInCart.amount = productInCart.amount + productClone.amount;
    } else {
        // Regulary add selected product to cart
        shoppingCart.push(productClone);
    }
    updateShoppingCart();
    updateTotalCosts();

    // Reset Amount and Price to 0 in product menu after pushing
    product.amount = 0;
    document.getElementById('overall-price-' + id).innerHTML = '0.00€';
    document.getElementById('amount-counter-' + id).innerHTML = '0';
}


function addShoppingCartProductAmount(id) {
    let product = findShoppingCartItemById(id);
    product.amount++;
    document.getElementById('foodAmountCart-' + id).innerHTML = product.amount + 'x';
    document.getElementById('overall-shopping-cart-price-' + id).innerHTML = printPrice(product) + '€';
    updateTotalCosts();
}

function removeShoppingCartProductAmount(id) {
    let product = findShoppingCartItemById(id);
    if (product.amount > 0) {
        product.amount--;
    }
    document.getElementById('foodAmountCart-' + id).innerHTML = product.amount + 'x';
    document.getElementById('overall-shopping-cart-price-' + id).innerHTML = printPrice(product) + '€';
    updateTotalCosts();
}

function updateTotalCosts() {
    let subtotal = 0;

    shoppingCart.forEach((product) => {
        subtotal += product.price * product.amount;
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

// ********** Get all selected Product from shoopingcart(JSON) End **********

// ********** Shopping Cart Section End **********

