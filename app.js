function init() {
    updateDishes()
}

function updateDishes() {
    salads.forEach(function (salad) {
        let dishDiv = 'dish-div';
        let titleDiv = 'dish-div-title-div';
        let descriptionDiv = 'dish-div-description-div';
        let variationDiv = 'dish-div-variation-div';
        let priceDiv = 'dish-div-price-div';
        let btnDiv = 'dish-div-btn-div';
        let plusImg = 'plus-img';
        let htmlContent = `
    <div id="salad-${salad.id}" class="${dishDiv}">
    <div class="${titleDiv}">
    <h3>${salad.title}</h3>
    </div>
    <div class="${descriptionDiv}">
        <p>${salad.description}</p>
    </div>
    <div class="${variationDiv}">
        <p>${salad.variation}</p>
    </div>
    <div class="${priceDiv}">
        <p>${salad.price}€</p>
    </div>
    <div class="${btnDiv}">
        <img class="${plusImg}" src="./img/plus.png">
    </div>
    </div>
    `;
        document.getElementById('salads-div').insertAdjacentHTML("beforeend", htmlContent);
    });
}