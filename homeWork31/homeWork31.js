class Hamburger {
    constructor (size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculate() {        
        let allCalories = [this.size, this.stuffing, ...this.toppings].reduce((sum, el) => {
            return sum + el.calories;
        },0);
        return allCalories
    }

    calculatePrice(){
        let finalPrice = [this.size, this.stuffing, ...this.toppings].reduce((sum, el) => {
            return sum + el.tugricks;
        },0);
        return finalPrice
    }

    static SIZE_SMALL = {
        tugricks: 50,
        calories: 20,
    }
    static SIZE_BIG = {
        tugricks: 100,
        calories: 40,
    }
    static STUFFING_CHEESE = {
        tugricks: 10,
        calories: 20,
    }
    static STUFFING_SALAD = {
        tugricks: 20,
        calories: 5,
    }
    static STUFFING_POTATO = {
        tugricks: 15,
        calories: 10,
    }
    static TOPPING_MAYO = {
        tugricks: 20,
        calories: 5,
    }
    static TOPPING_SAUCE = {
        tugricks: 15,
        calories: 0,
    }
}
order1 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_SALAD);
order1.addTopping(Hamburger.TOPPING_MAYO);
console.log(order1.calculate());