function generateProductTemplate(product) {
    return `
<div id="productular-${product.id}" class="${dishDiv}">
    <div onclick="toggleExtension(${product.id})" class="dish-div-main">
    <div id="popular-title" class="${titleDiv}">
        <h3>${product.title}</h3>
    </div>
    <div class="${descriptionDiv}">
         <p>${product.description}</p>
    </div>
     <div class="${variationDiv}">
         <p>${product.variation}</p>
    </div>
     <div id="popular-price" class="${priceDiv}">
         <p>${product.price}€</p>
     </div>
    <div class="${btnDiv}">
         <img id="plussymbol" class="${plusImg}" src="./img/plus.png">
         <img id="xsymbol" class="${plusImg} d-none" src="./img/x.png">
    </div>
    </div>
    <div class="${dishDivExtension} hide-extension" id="extended-popular-${product.id}"> 
        <div class="number-box">
            <div onclick="removeAmount(${product.id})" style="cursor: pointer;" class="number-box-div">
                <span>-</span>
            </div>
            <div id="foodAmount" class="number-box-div">
                <span id="amount-counter-${product.id}" style="color: rgb(21, 116, 245) !important;">${product.amount}</span>
             </div>
             <div onclick="addAmount(${product.id})" style="cursor: pointer;" class="number-box-div">
                 <span>+</span>
            </div>
         </div>

        <input class="input-order-field" id="inputPopular-${product.id}" placeholder ="Please enter your additional wishes">

        <button class="addToCartBtn" onclick="addToCart(${product.id})">
        <span id="overall-price-${product.id}">${printPrice(product)}€<span>
        </button>
    </div>
</div>
`;
};