// JSON of all Dishes

let popular  = [
    new Product('0', 'Mayan Avocado Salad', 'Fresh salad with mixed vegetables and lemon juiced avocado', 'Variatons: Chipotle-tomato sauce, Habanero sauce, more avoacado', 6.99),
    new Product('1', 'Beef Burrito', 'Grilled Tortilla with grilled Beef and mixed vegetables', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 7.99),
    new Product('2', 'Pulled Pork Burrito Bowl', 'Grilled Beef, mixed vegetables and rice', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 7.49),
];

let salads = [
    new Product('3', 'Aztec Chicken Salad', 'Fresh salad with mixed vegetables and juicy slices of chicken breast', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 6.49),
    new Product('4', 'Mexican Beef Salad', 'Fresh salad with mixed vegetables and juicy slices of Beef', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 6.99),
    new Product('5', 'Mayan Avocado Salad', 'Fresh salad with mixed vegetables and lemon juiced avocado', 'Variatons: Chipotle-tomato sauce, Habanero sauce, more avoacado', 6.99),
    new Product('6', 'Veggi Salad', 'Fresh salad with mixed vegetables, eggs and cheese', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more cheese or eggs', 5.99),
    new Product('7', 'Vegan Salad', 'Fresh salad with mixed vegetables', 'Variatons: Chipotle-tomato sauce, Habanero sauce, add avoacado', 5.99),
];

let burritos = [
    new Product('8', 'Chicken Burrito', 'Grilled Tortilla with grilled Chicken and mixed vegetables', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 7.49),
    new Product('9', 'Beef Burrito', 'Grilled Tortilla with grilled Beef and mixed vegetables', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 7.99),
    new Product('10', 'Pulled Pork Burrito', 'Grilled Tortilla with pulled pork and mixed vegetables', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 7.49),
    new Product('11', 'Veggie Burrito', 'Grilled Cheese with mixed vegetables', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce', 5.99),
    new Product('12', 'Vegan Burrito', 'Grilled Tortilla with grilled vegetables', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce', 5.49),
];

let bowls = [
    new Product('13', 'Chicken Burrito Bowl', 'Grilled Chicken, mixed vegetables and rice', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat.', 7.49),
    new Product('14', 'Beef Burrito Bowl', 'Grilled Beef, mixed vegetables and rice', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 7.99),
    new Product('15', 'Pulled Pork Burrito Bowl', 'Grilled Beef, mixed vegetables and rice', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 7.49),
    new Product('16', 'Veggie Bowl', 'Grilled Cheese, mixed vegetables and rice', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce', 6.49),
    new Product('17', 'Vegan Bowl', 'Mixed vegetables, Beans and rice', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce', 5.99),
];

let vegan = [
    new Product('18', 'Vegan Salad', 'Fresh salad with mixed vegetables', 'Variatons: Chipotle-tomato sauce, Habanero sauce, add avoacado', 5.99),
    new Product('19', 'Vegan Burrito', 'Grilled Tortilla with grilled vegetables', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce', 5.49),
    new Product('20', 'Vegan Bowl', 'Mixed vegetables, Beans and rice', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce', 5.99),
];

let sideDish = [
    new Product('21', 'Tortilla Chips Nature', null, null, 1.49),
    new Product('22', 'Cheesy Tortilla Chips', null, null, 2.99),
    new Product('23', 'Tortilla Chips with Creme', null, null, 2.99),
    new Product('24', 'Tortilla Chips with Guacemole', null, null, 2.99),
    new Product('25', 'Tortilla Chips with Classic Salsa', null, null, 2.99),
    new Product('26', 'Tortilla Chips with Chili Salsa', null, null, 2.99),
];

let desserts = [
    new Product('27', 'Texas Brownie', null, null, 3.99),
    new Product('28', 'Mayan Muffin', null, null, 3.99),
];

let drinks = [
    new Product('29', 'Coca Cola 1L', null, null, 2.99),
    new Product('30', 'Fanta 1L', null, null, 2.99),
    new Product('31', 'Sprite 1L', null, null, 2.99),
    new Product('32', 'Bonaqua 1L', null, null, 2.99),
    new Product('33', 'Ice Tea Peach 1L', null, null, 2.99),
    new Product('34', 'Ice Tea Lemon 1L', null, null, 2.99),
    new Product('35', 'Mountain Dew 1L', null, null, 2.99),
    new Product('36', 'Club Mate 1L', null, null, 1.99),
    new Product('37', 'Housemade Soda 1L', null, null, 2.99),
];

let alcohol = [
    new Product('38', 'Warsteiner 0.5L', null, null, 1.99),
    new Product('39', 'Becks 0.5L', null, null, 1.99),
    new Product('40', 'Becks Green Lemon 0.5L', null, null, 1.99),
];
