// List of all help functions, which are used repeatedly in other functions

// Finding the current product with its id
function findProductById(id) {
    let allProducts = [...popular, ...salads, ...burritos, ...bowls, ...vegan, ...sideDish, ...desserts, ...drinks, ...alcohol];
    let product = allProducts.find((p) => {
        return id == p.id;
    });
    return product;
}

//  Adds or removes a class to an HTML element
function toggleClass(elementId, className) {
    let classList = document.getElementById(elementId).classList;
    if (classList.contains(className)) {
        classList.remove(className);
    } else {
        classList.add(className);
    }
}

//  Multiplies the price with the amount
function printPrice(product) {
    return (product.price * product.amount).toFixed(2);
}