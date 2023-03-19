const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

let ind = shoppingCart.indexOf('Honey');

// remove honey..
shoppingCart.splice(ind, 1);

ind = shoppingCart.indexOf('Tea');
shoppingCart[ind] = 'Green Tea';

console.log(shoppingCart);
console.log(shoppingCart.length);
