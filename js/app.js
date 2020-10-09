// ********** Variables for Products start **********

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
    updateProducts();
    updateShoppingCart();
    document.getElementById("order-btn").disabled = true; 
}

// ********** Onload Function End **********

// ********** Get all Products from menu.js  Start **********

function updateProducts() {
    popularProducts();
    saladProducts();
    burritoProducts();
    bowlProducts();
    veganProducts();
    sideProducts();
    dessertProducts();
    drinkProducts();
    alcoholProducts();
}

function popularProducts() {
    popular.forEach((pop) => {
        let popContent = generateProductTemplate(pop);
        document.getElementById('popular-div').insertAdjacentHTML("beforeend", popContent);
    });
}

function saladProducts() {
    salads.forEach((salad) => {
        let saladContent = generateProductTemplate(salad);
        document.getElementById('salads-div').insertAdjacentHTML("beforeend", saladContent);
    });
}

function burritoProducts() {
    burritos.forEach((burrito) => {
        let burritoContent = generateProductTemplate(burrito);
        document.getElementById('burritos-div').insertAdjacentHTML("beforeend", burritoContent);

    });
}

function bowlProducts() {
    bowls.forEach((bowl) => {
        let bowlContent = generateProductTemplate(bowl);
        document.getElementById('bowls-div').insertAdjacentHTML("beforeend", bowlContent);
    });
}

function veganProducts() {
    vegan.forEach(function (veg) {
        let veganContent = generateProductTemplate(veg);
        document.getElementById('vegan-div').insertAdjacentHTML("beforeend", veganContent);
    });
}

function sideProducts() {
    sideDish.forEach(function (side) {
        let siderContent = generateProductTemplate(side);
        document.getElementById('siders-div').insertAdjacentHTML("beforeend", siderContent);
    });

}

function dessertProducts() {
    desserts.forEach(function (dessert) {
        let dessertContent = generateProductTemplate(dessert);
        document.getElementById('desserts-div').insertAdjacentHTML("beforeend", dessertContent);
    });
}

function drinkProducts() {
    drinks.forEach(function (drink) {
        let drinkContent = generateProductTemplate(drink);
        document.getElementById('non-alcoholic-drinks-div').insertAdjacentHTML("beforeend", drinkContent);
    });

}

function alcoholProducts() {
    alcohol.forEach(function (alc) {
        let alcContent = generateProductTemplate(alc);
        document.getElementById('alcoholic-drinks-div').insertAdjacentHTML("beforeend", alcContent);
    });
}

// ********** Get all Products from menu.js End **********

// ********** Product Picker Extension Start **********

function toggleExtension(id) {
    let product = findProductById(id);
    toggleClass('extended-product-' + product.id, 'hide-extension');
    toggleClass('plussymbol-' + product.id, 'plus-img-rotate');
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

// ********** Get all selected Products from shopping cart start **********

// **** Pushing in Cart Start ****

let shoppingCart = new ShoppingCart();

function addToCart(id) {
    let product = findProductById(id);
    shoppingCart.addProduct(product);
    updateShoppingCart();
    updateTotalCosts();

    // Reset Amount and Price to 0 in product menu after pushing
    product.amount = 0;
    document.getElementById('overall-price-' + id).innerHTML = '0.00€';
    document.getElementById('amount-counter-' + id).innerHTML = '0';
}


function addShoppingCartProductAmount(id) {
    shoppingCart.addProductAmount(id);
    updateTotalCosts();
}

function removeShoppingCartProductAmount(id) {
    shoppingCart.removeProductAmount(id);
    updateTotalCosts();
}

function updateTotalCosts() {
    shoppingCart.updateCosts();
}


//  Removes an item from the shopping cart 

function deleteFromShoppingCart(id) {
    shoppingCart.removeProduct(id);
    updateShoppingCart();
    updateTotalCosts();
}

// **** Pushing in Cart End ****

// ********** Updating shopping cart start **********

function updateShoppingCart() {
    document.getElementById('chosen-dishes').innerHTML = '';
    if (shoppingCart.products.length > 0) {
        document.getElementById('order-btn').disabled = false; 
        document.getElementById('no-order-div').classList.add('d-none');
        document.getElementById('chosen-dishes').classList.remove('d-none');
        shoppingCart.products.forEach(function (product) {
            let productContent = generateShoppingCartProductTemplate(product);
            document.getElementById('chosen-dishes').insertAdjacentHTML("beforeend", productContent);
        });
    } else {
        document.getElementById('no-order-div').classList.remove('d-none');
        document.getElementById('chosen-dishes').classList.add('d-none');
        document.getElementById('order-btn').disabled = true; 
    }
}

// ********** Updating shopping cart End **********

// ********** Send Order Btn Start **********

function sendOrder() {
    shoppingCart.products.splice(0,shoppingCart.products.length);
    updateShoppingCart();
    document.getElementById('sent-order-div').classList.remove('d-none');
    document.getElementById('current-discount').innerHTML = '0.00' + '%';
    document.getElementById('costs-subtotal').innerHTML = '0.00' + '€';
    document.getElementById('costs-delivery').innerHTML = '0.00' + '€';
    document.getElementById('costs-discount').innerHTML = '0.00'+ '€';
    document.getElementById('costs-voucher').innerHTML = '0.00' + '€';
    document.getElementById('costs-total').innerHTML = '0.00' + '€';
}

function closeOrderDiv() {
    document.getElementById('sent-order-div').classList.add('d-none');
}

function closeInfoDiv() {
    document.getElementById('infoDiv').classList.add('d-none');
}

// ********** Send Order Btn End **********

// ********** Shopping Cart Section End **********