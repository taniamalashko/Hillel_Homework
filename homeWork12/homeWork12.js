//price of fruits/vegetables
cabbagePrice = 8;
avocadoPrice = 30;
tomatoPrice = 10;
grapesPrice = 20;
raspberryPrice = 25;
coconutPrice = 50;

//Final price in card
finalPrice = 0;

//String with path to the image
thePathToTheImage = '/Hillel_Homework/homeWork12/images/';

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

//We ask the user which product from the selected category he buys
switch (productCategory) {
    case 'fruits':
        do {
            product = prompt('What kind of fruit do you want to buy (grapes/raspberry/coconut)?');
            while (!product) {
                product = prompt('What kind of fruit do you want to buy (grapes/raspberry/coconut)?');
            }
            product = product.replaceAll(' ', '').toLowerCase();
        } while (product !== 'grapes' && product !== 'raspberry' && product !== 'coconut');
        thePathToTheImage += '/fruits';
        break
    case 'vegetables':
        do {
            product = prompt('What kind of vegetables do you want to buy (cabbage/avocado/tomato)?');
            while (!product) {
                product = prompt('What kind of vegetables do you want to buy (cabbage/avocado/tomato)?');
            }
            product = product.replaceAll(' ', '').toLowerCase();
        } while (product !== 'cabbage' && product !== 'avocado' && product !== 'tomato');
        thePathToTheImage += '/vegetables';
        break
}

//We enter data into the final price
switch (product) {
    case 'grapes':
        finalPrice += grapesPrice;
        thePathToTheImage += '/grapes.svg'
        break
    case 'raspberry':
        finalPrice += raspberryPrice;
        thePathToTheImage += '/raspberry.svg'
        break
    case 'coconut':
        finalPrice += coconutPrice;
        thePathToTheImage += '/coconut.svg'
        break
    case 'cabbage':
        finalPrice += cabbagePrice;
        thePathToTheImage += '/cabbage.svg'
        break
    case 'avocado':
        finalPrice += avocadoPrice;
        thePathToTheImage += '/avocado.svg'
        break
    case 'tomato':
        finalPrice += tomatoPrice;
        thePathToTheImage += '/tomato.svg'
        break
}

switch (season) {
    case 'winter':
        finalPrice *= 2;
        break
    case 'summer':
        finalPrice *= 0.8;
        break
}

//Ask how many units of the product the customer wants to buy and calculate the final price
do {
    countOfProducts = parseInt(prompt('How many items do you want to purchase (quantity must be more than one)?'));
} while (isNaN(countOfProducts) || !countOfProducts || countOfProducts === 1);

finalPrice *= countOfProducts;

//We form a card with an order and a price
document.write(`<div class="product" align="center"">
                <img src="${thePathToTheImage}" alt="${product}" width="100" height="100">
                <p>Selected product: <b>${product}</b></p>
                <p>Count of ${product}: <b>${countOfProducts}</b></p>
                <p>Selected period: <b>${season}</b></p>
                <p>Selected category: <b>${productCategory}</b></p>
                <p>Final sum: <b>${finalPrice} UAH</b></p>
                </div>`);

