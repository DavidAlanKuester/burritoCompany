# Burrito Company
Welcome to Burrito Company! This is a shopping cart model that can serve as a basis for further apps. It is made with vanillaJS, CSS and HTML.

## What is Burrito Company?
BurritoCompany is a shopping-cart-system where you can choose multiple products out of the menu and add them to a shopping cart. The system calculates the price (minus discount and voucher) and gives out the total Bill.

## How does Burrito Company work?
A List of all products objects (menu.js) is modelled after a product class (product.class.js) and displayed on the screen via html, css and the function updateProducts(), that creates the visible elements with an template (product.template.js). You can now select the individual products (toggleExtension()), add Information (addAmount(), removeAmount(), input) and create a new shopping-cart object with addToCart(). All the used values will be reseted and pushed to the shooping-cart. The shopping cart objects are modelled after the shopping-cart class (shopping-cart.class.js). All relevant functions for calculating the bill(addProduct(), addProductAmount(), removeProductAmount, updateCosts()) are set in shopping-cart.class.js. The values will be reseted with pressing on the sendOrder() button.

Check out classDiagram and overallDiagram for a detailed visualisation.

## Getting started!!
You want to see the page?
Check it out on: 
https://david-kuester.de/burrito-company/index.html
