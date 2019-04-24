// You are stocking up a shop! This shop sells shirts! 

// create a shirtFactory function that takes a cost, color, and size and returns an
// object that has a 'type' of 'shirt' and cost, color and size values that 
// match the parameters
function shirtFactory(cost, color, size) {
    return {
        type: 'shirt',
        cost: cost,
        color: color,
        size: size
    }
}


// create a new shirt and add it to the products array!
var products = [];
products.push(shirtFactory(25, 'navy blue', 'l'));



// you are stocking up some green shirts. They each cost 60. Loop through each of 
// the sizes and add green shirts for each to the product array!

var shirtSizes = ['xs', 's', 'm', 'l', 'xl'];

for(var i = 0; i < shirtSizes.length; i++) {
    products.push(shirtFactory(60, 'green', shirtSizes[i]));
}

// You now need more colors! Add new shirts of each color in each size to the 
// products array
var shirtColors = ['blue', 'red', 'pink', 'black'];
for(var i = 0; i < shirtColors.length; i++) {
    for(var j = 0; j < shirtSizes.length; j++) {
        products.push(shirtFactory(60, shirtColors[i], shirtSizes[j]));
    }
}



// you need more shirts! add a loop that will add 5 shirts of each color in each size 
// to the products array
var shirtColors = ['blue', 'red', 'pink', 'black'];
for(var i = 0; i < shirtColors.length; i++) {
    for(var j = 0; j < shirtSizes.length; j++) {
        for(var k = 0; k < 5; k++) {
            products.push(shirtFactory(60, shirtColors[i], shirtSizes[j]));
        }
    }
}
// console.log(products)

// BONUS 

// Write a function that will return an array with all the black shirts 
function getBlackShirts() {
    var blackShirts = [];
    for(var i = 0; i < products.length; i++) {
        if(products[i].color === 'black') {
            blackShirts.push(products[i]);
        }
    }
    return blackShirts;
}

console.log(getBlackShirts());

// Write a function that takes a size as a parameter and will return an array of all of 
// the shirts in that size
function getShirtsOfSize(size) {
    var shirts = [];
    for(var i = 0; i < products.length; i++) {
        if(products[i].size === size.toLowerCase()) {
            shirts.push(products[i]);
        }
    }
    return shirts;
}
console.log(getShirtsOfSize('l'));

// Write a function that will return an object of all the shirts sorted by color:
// {
//   blue: [...shirts...],
//   green: [...shirts...],
//   red: [...shirts...],
//   ...
// }

function sortProductsByColor() {
    var sortedProducts = {};
    for(var i = 0; i < shirtColors; i++) {
        if
    }
}