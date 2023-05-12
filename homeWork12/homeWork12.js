productsCategories = ['vegetables', 'fruits'];
prices = [[8, 30, 10], [20,25,50]];

//Asking the user for the time of year
do {
    season = prompt('Please select the season you would like to purchase (Winter/Summer)');
    while (!season) {
        season = prompt('Please select the season you would like to purchase (Winter/Summer)');
    }
    season = season.replaceAll(' ', '').toLowerCase();
} while (season !== 'summer' && season !== 'winter');

//Asking the user for the category of products (fruits/vegetables)
do {
    productCategory = prompt('Please enter the product category (fruits/vegetables)');
    while (!productCategory) {
        productCategory = prompt('Please enter the product category (fruits/vegetables)');
    }
    productCategory = productCategory.replaceAll(' ', '').toLowerCase();
} while (productCategory !== 'fruits' && productCategory !== 'vegetables');

switch (productCategory) {
    case 'vegetables':
        products = ['cabbage', 'avocado', 'tomato'];
        prices = prices[0];
        break
    case 'fruits':
        products = ['grapes', 'raspberry', 'coconut'];
        prices = prices[1];
        break
}

//We ask the user which product from the selected category he buys
do {
    product = prompt(`What kind of ${productCategory} do you want to buy (${products.join('/')})?`);
    while (!product) {
        product = prompt(`What kind of ${productCategory} do you want to buy (${products.join('/')})?`);
    }
    product = product.replaceAll(' ', '').toLowerCase();
} while (!products.includes(product));

//Ask how many units of the product the customer wants to buy and calculate the final price
do {
    countOfProducts = parseInt(prompt('How many items do you want to purchase (quantity must be more than one)?'));
} while (isNaN(countOfProducts) || !countOfProducts || countOfProducts === 1);

finalPrice = prices[products.indexOf(product)]*countOfProducts

switch (season) {
    case 'winter':
        finalPrice *= 2;
        break
    case 'summer':
        finalPrice *= 0.8;
        break
}

//Specify the path to the image
imagePath = `/Hillel_Homework/homeWork12/images/${productCategory}/${product}.svg`;

//We form a card with an order and a price
document.write(`<div class="product" align="center"">
                <img src="${imagePath}" alt="${product}" width="100" height="100">
                <p>Selected product: <b>${product}</b></p>
                <p>Count of ${product}: <b>${countOfProducts}</b></p>
                <p>Selected period: <b>${season}</b></p>
                <p>Selected category: <b>${productCategory}</b></p>
                <p>Final sum: <b>${finalPrice} UAH</b></p>
                </div>`);


