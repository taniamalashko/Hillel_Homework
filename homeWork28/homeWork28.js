let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function Product(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
    this.renderProduct = function(){
        return `<tr>
                    <td><img src="/homeWork28/images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
                    <td>${this.category}</td>
                    <td>${this.price} USD</td>
                </tr>`
    }
}

Array.prototype.productsFromFields = function(categoryName){
    let products = [];
    this.forEach(function(item){
        let price = Array.isArray(item.price) ? item.price.join('-') : item.price;
        let product = new Product(categoryName, item.type, price);
        products.push(product);
    })
    return products;
}

let cosmetics = cosmeticsProducts.productsFromFields('cosmetics');
let kitchen = kitchenProducts.productsFromFields('kitchen');
let devices = devicesProducts.productsFromFields('devices');
let allProducts = [...cosmetics, ...kitchen, ...devices];

let Trs = [];

allProducts.forEach(function(item){
    Trs.push(item.renderProduct());
})

document.write(`<table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${Trs.join('')}
                    </tbody>
                </table>`);

