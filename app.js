function init() {
    updateDishes()
}

function updateDishes() {
    let dishDiv = 'dish-div';
    let titleDiv = 'dish-div-title-div';
    let descriptionDiv = 'dish-div-description-div';
    let variationDiv = 'dish-div-variation-div';
    let priceDiv = 'dish-div-price-div';
    let btnDiv = 'dish-div-btn-div';
    let plusImg = 'plus-img';
    salads.forEach(function (salad) {
        let saladContent = `
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
        document.getElementById('salads-div').insertAdjacentHTML("beforeend", saladContent);
    });
    burritos.forEach(function (burrito) { 
        let burritoContent = `
        <div id="burrito-${burrito.id}" class="${dishDiv}">
        <div class="${titleDiv}">
        <h3>${burrito.title}</h3>
        </div>
        <div class="${descriptionDiv}">
            <p>${burrito.description}</p>
        </div>
        <div class="${variationDiv}">
            <p>${burrito.variation}</p>
        </div>
        <div class="${priceDiv}">
            <p>${burrito.price}€</p>
        </div>
        <div class="${btnDiv}">
            <img class="${plusImg}" src="./img/plus.png">
        </div>
        </div>
        `;
        document.getElementById('burritos-div').insertAdjacentHTML("beforeend", burritoContent);

    });

    bowls.forEach(function (bowl) { 
        let bowlContent = `
        <div id="bowl-${bowl.id}" class="${dishDiv}">
        <div class="${titleDiv}">
        <h3>${bowl.title}</h3>
        </div>
        <div class="${descriptionDiv}">
            <p>${bowl.description}</p>
        </div>
        <div class="${variationDiv}">
            <p>${bowl.variation}</p>
        </div>
        <div class="${priceDiv}">
            <p>${bowl.price}€</p>
        </div>
        <div class="${btnDiv}">
            <img class="${plusImg}" src="./img/plus.png">
        </div>
        </div>
        `;
        document.getElementById('bowls-div').insertAdjacentHTML("beforeend", bowlContent);
    });
}


       