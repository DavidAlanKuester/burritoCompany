class ShoppingCart {
    constructor() {
        this.products = [];
        this.subtotal = 0;
        this.delivery = 4;
        this.discount = 0.1;
        this.voucher = 5;
        this.total_bill = 4;
    }

    findById(id) {
        let product = shoppingCart.products.find((p) => {
            return id == p.id;
        });
        return product;
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

    addProductAmount(id) {
        let product = shoppingCart.findById(id);
        product.amount++;
        document.getElementById('foodAmountCart-' + product.id).innerHTML = product.amount + 'x';
        document.getElementById('overall-shopping-cart-price-' + product.id).innerHTML = printPrice(product) + '€';
    }

    /**
     * 
     * @param {int} id - ID of the product that shoud be decreased
     */
    removeProductAmount(id) {
        let product = this.findById(id);
        if (product.amount > 0) {
            product.amount--;
        }
        document.getElementById('foodAmountCart-' + product.id).innerHTML = product.amount + 'x';
        document.getElementById('overall-shopping-cart-price-' + product.id).innerHTML = printPrice(product) + '€';
    }

    updateCosts() {
        let subtotal = 0;
        this.products.forEach((product) => {
            subtotal += product.price * product.amount;
        });

        let delivery_costs = 4.00;
        let total_bill = subtotal + delivery_costs;
        let discount_value = this.discount * total_bill;
        total_bill -= discount_value;
        total_bill -= this.voucher;

        document.getElementById('current-discount').innerHTML = (this.discount * 100) + '%';
        document.getElementById('costs-subtotal').innerHTML = subtotal.toFixed(2) + '€';
        document.getElementById('costs-delivery').innerHTML = delivery_costs.toFixed(2) + '€';
        document.getElementById('costs-discount').innerHTML = discount_value.toFixed(2) + '€';
        document.getElementById('costs-voucher').innerHTML = this.voucher.toFixed(2) + '€';
        document.getElementById('costs-total').innerHTML = total_bill.toFixed(2) + '€';
    }
}
