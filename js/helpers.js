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


function findProductById(id) {
    let allItems = [...popular, ...salads, ...burritos, ...bowls, ...vegan, ...siders, ...desserts, ...drinks, ...alcohol];
    let product = allItems.find((p) => {
        return id == p.id;
    });
    return product;
}