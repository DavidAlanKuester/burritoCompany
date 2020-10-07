function generateShoppingCartProductTemplate(product) {
    return `
            <div class="${chosenDishDiv}"> 
            <div class="number-box-cart"> 
            <div onclick="removeShoppingCartProductAmount(${product.id})" style="cursor: pointer;" class="number-box-div-cart">
                <span>-</span>
             </div>
             <div class="number-box-div-cart">
                <span id="foodAmountCart-${product.id}" style="color: rgb(21, 116, 245) !important; font-size: 12px !important">${product.amount}x</span>
            </div>
            <div onclick="addShoppingCartProductAmount(${product.id})" style="cursor: pointer;" class="number-box-div-cart">
                <span>+</span>
            </div>
            </div>
            <span style="font-size: 12px;" >${product.title}</span>
            <span style="font-size: 12px;" id="overall-shopping-cart-price-${product.id}">${printPrice(product)}€</span>
            <img style="cursor: pointer;" onclick="deleteFromShoppingCart(${product.id})" class="${trashImg}" src="./img/trash.png">
            </div>`;

}