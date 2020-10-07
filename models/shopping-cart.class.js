class ShoppingCart {
    constructor() {
        this.products = [];
        this.subtotal = 0;
        this.delivery = 4;
        this.total_bill = 4;
    }

    /**
     * 
     * @param {*} id - ID of the item that shall be removed form shopping cart
     */
    removeProduct(id) {
        this.products = this.products.filter((p) => {
            return p.id != id;
        });
    }

    /**
     * 
     * @param {Product} product - Instance which should be added 
     */
    addProduct(product) {
        let productClone = JSON.parse(JSON.stringify(product));

        // Check if product exists in shopping cart already
        let productInCart = this.products.find((p) => {
            return p.id == product.id;
        });

        if (productInCart) {
            // Just refresh amount
            productInCart.amount = productInCart.amount + productClone.amount;
        } else {
            // Regulary add selected product to cart
            shoppingCart.products.push(productClone);
        }
    
    }

    addProductAmount(product) {
        product.amount++;
        document.getElementById('foodAmountCart-' + product.id).innerHTML = product.amount + 'x';
        document.getElementById('overall-shopping-cart-price-' + product.id).innerHTML = printPrice(product) + '€';
    }

    removeProductAmount(product) {
        if (product.amount > 0) {
            product.amount--;
        }
        document.getElementById('foodAmountCart-' + product.id).innerHTML = product.amount + 'x';
        document.getElementById('overall-shopping-cart-price-' + product.id).innerHTML = printPrice(product) + '€';
    }
}
