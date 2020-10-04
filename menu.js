// JSON of all Dishes

let popular  = [
    {
        title: 'Mayan Avocado Salad', 
        description: 'Fresh salad with mixed vegetables and lemon juiced avocado',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, more avoacado',
        price: '6,99',
        id: '1'
    },
    {
        title: 'Beef Burrito', 
        description: 'Grilled Tortilla with grilled Beef and mixed vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '7,99',
        id: '2'
    },
    {
        title: 'Pulled Pork Burrito Bowl', 
        description: 'Grilled Beef, mixed vegetables and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '7,49',
        id: '3'
    },
];

let salads = [
    {
        title: 'Aztec Chicken Salad', 
        description: 'Fresh salad with mixed vegetables and juicy slices of chicken breast.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '6,49',
        id: '1'
    },
    {
        title: 'Mexican Beef Salad', 
        description: 'Fresh salad with mixed vegetables and juicy slices of Beef.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '6,99',
        id: '2'
    },
    {
        title: 'Mayan Avocado Salad', 
        description: 'Fresh salad with mixed vegetables and lemon juiced avocado',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, more avoacado',
        price: '6,99',
        id: '3'
    },
    {
        title: 'Veggi Salad', 
        description: 'Fresh salad with mixed vegetables, eggs and cheese',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more cheese or eggs',
        price: '5,99',
        id: '4'
    },
    {
        title: 'Vegan Salad', 
        description: 'Fresh salad with mixed vegetables',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, add avoacado',
        price: '5,99',
        id: '5'
    }
];

let burritos = [
    {
        title: 'Chicken Burrito', 
        description: 'Grilled Tortilla with grilled Chicken and mixed vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '7,49',
        id: '1'
    },
    {
        title: 'Beef Burrito', 
        description: 'Grilled Tortilla with grilled Beef and mixed vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '7,99',
        id: '2'
    },
    {
        title: 'Pulled Pork Burrito', 
        description: 'Grilled Tortilla with pulled pork and mixed vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '7,49',
        id: '3'
    },
    {
        title: 'Veggie Burrito', 
        description: 'Grilled Cheese with pulled pork and mixed vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '6,99',
        id: '4'
    },
    {
        title: 'Vegan Burrito', 
        description: 'Grilled Tortilla with grilled vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '5,99',
        id: '5'
    }
];

let bowls = [
    {
        title: 'Chicken Burrito Bowl', 
        description: 'Grilled Chicken, mixed vegetables and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '7,49',
        id: '1'
    },
    {
        title: 'Beef Burrito Bowl', 
        description: 'Grilled Beef, mixed vegetables and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '7,99',
        id: '2'
    },
    {
        title: 'Pulled Pork Burrito Bowl', 
        description: 'Grilled Beef, mixed vegetables and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '7,49',
        id: '3'
    },
    {
        title: 'Veggie Bowl', 
        description: 'Grilled Cheese, mixed vegetables and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '6,99',
        id: '4'
    },
    {
        title: 'Vegan Bowl', 
        description: 'Mixed vegetables, Beans and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '5,99',
        id: '5'
    }
];

let vegan = [
    {
        title: 'Vegan Salad', 
        description: 'Fresh salad with mixed vegetables',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, add avoacado',
        price: '5,99',
        id: '1'
    },
    {
        title: 'Vegan Burrito', 
        description: 'Grilled Tortilla with grilled vegetables.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '5,99',
        id: '2'
    },
    {
        title: 'Vegan Bowl', 
        description: 'Mixed vegetables, Beans and rice.',
        variation: 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat',
        price: '6,99',
        id: '3'
    }
];

let siders = [
    {
        title: 'Tortilla Chips Nature', 
        price: '1,49',
        id: '1'
    },
    {
        title: 'Cheesy Tortilla Chips', 
        price: '2,99'
        ,
        id: '2'
    },
    {
        title: 'Tortilla Chips with Creme', 
        price: '2,99',
        id: '3'
    },
    {
        title: 'Tortilla Chips with Guacemole', 
        price: '2,99',
        id: '4'
    },
    {
        title: 'Tortilla Chips with Classic Salsa', 
        price: '2,99',
        id: '5'
    },
    {
        title: 'Tortilla Chips with Chili Salsa', 
        price: '2,99',
        id: '6'
    },
];

let desserts = [
    {
        title: 'Texas Brownie', 
        price: '3,99',
        id: '1'
    },
    {
        title: 'Mayan Muffin', 
        price: '3,99',
        id: '2'
    }
];

let drinks = [
    {
        title: 'Coca Cola 1L', 
        price: '2,99',
        id: '1'
    },
    {
        title: 'Fanta 1L', 
        price: '2,99',
        id: '2'
    },
    {
        title: 'Sprite 1L', 
        price: '2,99',
        id: '3'
    },
    {
        title: 'Bonaqua 1L', 
        price: '1,99',
        id: '4'
    },
    {
        title: 'Ice Tea Peach 1L', 
        price: '2,99',
        id: '5'
    },
    {
        title: 'Ice Tea Lemon 1L', 
        price: '2,99',
        id: '6'
    },
    {
        title: 'Mountain Dew 1L', 
        price: '2,99',
        id: '7'
    },
    {
        title: 'Club Mate', 
        price: '1,99',
        id: '8'
    },
    {
        title: 'Housemade Soda', 
        price: '2,99',
        id: '9'
    },
];

let alcohol = [
    {
        title: 'Warsteiner 0.5L', 
        price: '2,99',
        id: '1'
    },
    {
        title: 'Becks 0.5L', 
        price: '2,99',
        id: '2'
    },
    {
        title: 'Becks Green Lemon 0.5L', 
        price: '2,99',
        id: '3'
    },
];
