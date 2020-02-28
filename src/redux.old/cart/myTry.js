


const items = [
    {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25
    },
    {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18
    },
    {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35
    }
];

// let cartItems = [];

// const addItemToCart = (cartItems, cartItemToAdd) => {

//     const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
//     if (existingCartItem) {
//         existingCartItem.quantity += 1;
//         // console.log('existingCartItem: ', existingCartItem);
//         return cartItems;
//     } else {
//         return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
//     }


//     // if (existingCartItem) {
//     //     return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem);
//     // }

//     // return [...cartItems, {...cartItemToAdd, quantity: 1}];
// };

// function add() {
//     items.forEach(item => {
//         cartItems = addItemToCart(cartItems, item);
        
//     });
// }

// add();
// // console.log(cartItems);
// add();
// // console.log(cartItems);
// cartItems = addItemToCart(cartItems, items[1]);
// console.log(cartItems);

// // console.log(cartItems);
// // add(items);
// // add(items[2]);
// // add(items[1]);
// // add(items[1]);
// // console.log(cartItems);
