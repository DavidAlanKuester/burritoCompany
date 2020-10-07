function findProductById(id) {
    let allProducts = [...popular, ...salads, ...burritos, ...bowls, ...vegan, ...sideDish, ...desserts, ...drinks, ...alcohol];
    let product = allProducts.find((p) => {
        return id == p.id;
    });
    return product;
}

/**
 * Adds or removes a class to an HTML element
 * @param {string} elementId - ID of the HTML element 
 * @param {string} className - className that you want to add
 */
function toggleClass(elementId, className) {
    let classList = document.getElementById(elementId).classList;
    if (classList.contains(className)) {
        classList.remove(className);
    } else {
        classList.add(className);
    }
}

function printPrice(product) {
    return (product.price * product.amount).toFixed(2);
}