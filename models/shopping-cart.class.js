// class model for product

class ShoppingCart {
    constructor() {
        this.products = [];
        this.subtotal = 0;
        this.delivery = 0;
        this.discount = 0.1;
        this.voucher = 5;
        this.total_bill = 4;
    }

    // All functions for displaying and calculating the shopping cart section

    findById(id) {
        let product = shoppingCart.products.find((p) => {
            return id == p.id;
        });
        return product;
    }


    //   Gets ID of the item that shall be removed from shopping cart

    removeProduct(id) {
        this.products = this.products.filter((p) => {
            return p.id != id;
        });
    }


    //  Instance which should be added 

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

    // Increases amount. Gets ID of the product that shoud be increased
    addProductAmount(id) {
        let product = shoppingCart.findById(id);
        product.amount++;
        document.getElementById('foodAmountCart-' + product.id).innerHTML = product.amount + 'x';
        document.getElementById('overall-shopping-cart-price-' + product.id).innerHTML = printPrice(product) + '€';
    }

    // Decreases amount. Gets ID of the product that shoud be decreased
    removeProductAmount(id) {
        let product = this.findById(id);
        if (product.amount > 0) {
            product.amount--;
        }
        document.getElementById('foodAmountCart-' + product.id).innerHTML = product.amount + 'x';
        document.getElementById('overall-shopping-cart-price-' + product.id).innerHTML = printPrice(product) + '€';
    }

    //Calculates all numbers and the total bill
    updateCosts() {
        let subtotal = 0;
        let total_bill = 0;
        let discount_value = 0;
        let voucher = this.voucher;
        this.products.forEach((product) => {
            subtotal += product.price * product.amount;
        });
        let delivery_costs = 4.00;
        if (subtotal != 0) {
            total_bill = subtotal + delivery_costs;
            discount_value = this.discount * total_bill;
            total_bill -= discount_value;
            total_bill -= voucher;
        } else {
            voucher = 0;
        }
        document.getElementById('current-discount').innerHTML = (this.discount * 100) + '%';
        document.getElementById('costs-subtotal').innerHTML = subtotal.toFixed(2) + '€';
        document.getElementById('costs-delivery').innerHTML = delivery_costs.toFixed(2) + '€';
        document.getElementById('costs-discount').innerHTML = discount_value.toFixed(2) + '€';
        if (voucher != 0) {
            document.getElementById('costs-voucher').innerHTML = '-' + voucher.toFixed(2) + '€';
        } else {
            document.getElementById('costs-voucher').innerHTML = voucher.toFixed(2) + '€';
        }
        document.getElementById('costs-total').innerHTML = total_bill.toFixed(2) + '€';
    }
}
