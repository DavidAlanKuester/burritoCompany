// JSON of all Dishes

let popular  = [
    new Product('0', 'Mayan Avocado Salad', 'Fresh salad with mixed vegetables and lemon juiced avocado', 'Variatons: Chipotle-tomato sauce, Habanero sauce, more avoacado', 6.99),
    new Product('1', 'Beef Burrito', 'Grilled Tortilla with grilled Beef and mixed vegetables', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 7.99),
    new Product('2', 'Pulled Pork Burrito Bowl', 'Grilled Beef, mixed vegetables and rice.', 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 7.49),
];

let salads = [
    {
        title: 'Aztec Chicken Salad', 
        description: 'Fresh salad with mixed vegetables and juicy slices of chicken breast.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 6.49,
        id: '3', 
        amount: 0
    },
    {
        title: 'Mexican Beef Salad', 
        description: 'Fresh salad with mixed vegetables and juicy slices of Beef.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 6.99,
        id: '4', 
        amount: 0
    },
    {
        title: 'Mayan Avocado Salad', 
        description: 'Fresh salad with mixed vegetables and lemon juiced avocado',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, more avoacado',
        price: 6.99,
        id: '5', 
        amount: 0
    },
    {
        title: 'Veggi Salad', 
        description: 'Fresh salad with mixed vegetables, eggs and cheese',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more cheese or eggs',
        price: 5.99,
        id: '6', 
        amount: 0
    },
    {
        title: 'Vegan Salad', 
        description: 'Fresh salad with mixed vegetables',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, add avoacado',
        price: 5.99,
        id: '7', 
        amount: 0
    }
];

let burritos = [
    {
        title: 'Chicken Burrito', 
        description: 'Grilled Tortilla with grilled Chicken and mixed vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 7.49,
        id: '8', 
        amount: 0
    },
    {
        title: 'Beef Burrito', 
        description: 'Grilled Tortilla with grilled Beef and mixed vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 7.99,
        id: '9', 
        amount: 0
    },
    {
        title: 'Pulled Pork Burrito', 
        description: 'Grilled Tortilla with pulled pork and mixed vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 7.49,
        id: '10', 
        amount: 0
    },
    {
        title: 'Veggie Burrito', 
        description: 'Grilled Cheese with pulled pork and mixed vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 6.99,
        id: '11', 
        amount: 0
    },
    {
        title: 'Vegan Burrito', 
        description: 'Grilled Tortilla with grilled vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 5.99,
        id: '12', 
        amount: 0
    }
];

let bowls = [
    {
        title: 'Chicken Burrito Bowl', 
        description: 'Grilled Chicken, mixed vegetables and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 7.49,
        id: '13', 
        amount: 0
    },
    {
        title: 'Beef Burrito Bowl', 
        description: 'Grilled Beef, mixed vegetables and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 7.99,
        id: '14', 
        amount: 0
    },
    {
        title: 'Pulled Pork Burrito Bowl', 
        description: 'Grilled Beef, mixed vegetables and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 7.49,
        id: '15', 
        amount: 0
    },
    {
        title: 'Veggie Bowl', 
        description: 'Grilled Cheese, mixed vegetables and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 6.99,
        id: '16', 
        amount: 0
    },
    {
        title: 'Vegan Bowl', 
        description: 'Mixed vegetables, Beans and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 5.99,
        id: '17', 
        amount: 0
    }
];

let vegan = [
    {
        title: 'Vegan Salad', 
        description: 'Fresh salad with mixed vegetables',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, add avoacado',
        price: 5.99,
        id: '18', 
        amount: 0
    },
    {
        title: 'Vegan Burrito', 
        description: 'Grilled Tortilla with grilled vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 5.99,
        id: '19', 
        amount: 0
    },
    {
        title: 'Vegan Bowl', 
        description: 'Mixed vegetables, Beans and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: 6.99,
        id: '20', 
        amount: 0
    }
];

let siders = [
    {
        title: 'Tortilla Chips Nature', 
        price: 1.49,
        id: '21', 
        amount: 0
    },
    {
        title: 'Cheesy Tortilla Chips', 
        price: 2.99,
        id: '22', 
        amount: 0
    },
    {
        title: 'Tortilla Chips with Creme', 
        price: 2.99,
        id: '23', 
        amount: 0
    },
    {
        title: 'Tortilla Chips with Guacemole', 
        price: 2.99,
        id: '24', 
        amount: 0
    },
    {
        title: 'Tortilla Chips with Classic Salsa', 
        price: 2.99,
        id: '25', 
        amount: 0
    },
    {
        title: 'Tortilla Chips with Chili Salsa', 
        price: 2.99,
        id: '26', 
        amount: 0
    },
];

let desserts = [
    {
        title: 'Texas Brownie', 
        price: 3.99,
        id: '27', 
        amount: 0
    },
    {
        title: 'Mayan Muffin', 
        price: 3.99,
        id: '28', 
        amount: 0
    }
];

let drinks = [
    {
        title: 'Coca Cola 1L', 
        price: 2.99,
        id: '29', 
        amount: 0
    },
    {
        title: 'Fanta 1L', 
        price: 2.99,
        id: '30', 
        amount: 0
    },
    {
        title: 'Sprite 1L', 
        price: 2.99,
        id: '31', 
        amount: 0
    },
    {
        title: 'Bonaqua 1L', 
        price: 2.99,
        id: '32', 
        amount: 0
    },
    {
        title: 'Ice Tea Peach 1L', 
        price: 2.99,
        id: '33', 
        amount: 0
    },
    {
        title: 'Ice Tea Lemon 1L', 
        price: 2.99,
        id: '34', 
        amount: 0
    },
    {
        title: 'Mountain Dew 1L', 
        price: 2.99,
        id: '35', 
        amount: 0
    },
    {
        title: 'Club Mate', 
        price: 1.99,
        id: '36', 
        amount: 0
    },
    {
        title: 'Housemade Soda', 
        price: 2.99,
        id: '37', 
        amount: 0
    },
];

let alcohol = [
    {
        title: 'Warsteiner 0.5L', 
        price: 2.99,
        id: '38', 
        amount: 0
    },
    {
        title: 'Becks 0.5L', 
        price: 2.99,
        id: '39', 
        amount: 0
    },
    {
        title: 'Becks Green Lemon 0.5L', 
        price: 2.99,
        id: '40', 
        amount: 0
    },
];
