function Person(name, age){
    this.name = name;
    this.age = age;
    this.personInfo = function(){
        console.log(`Name: ${this.name}; Age: ${this.age};`);
    }
}

function Car(carMake, model, carNumber, yearOfManufacture){
    this.carMake = carMake;
    this.model = model;
    this.carNumber = carNumber;
    this.yearOfManufacture = yearOfManufacture;
    this.assignOwner = function(person){
        if (person instanceof Person) {
            if (person.age >= 18) {
                this.owner = {...person};
            } else {
                console.log(`${person.name} is less when 18 years old! He/She can't have a car.`)
            }
        } else {
            console.log('This is not a person.')
        }
    }
    this.carInfo = function(){
        console.log(`Car make: ${this.carMake}; Car model: ${this.model}; Car number: ${this.carNumber}; Year of manufacture: ${this.yearOfManufacture};`);
        if (this.owner) {
            console.log('Owner info:');
            this.owner.personInfo();
        } else {
            console.log('This car has not owner.');
        }
    }
}

let person1 = new Person('Ivan', 25);
let person2 = new Person('Lyubov', 30);
let person3 = new Person('Vladyslav', 16);

let car1 = new Car('Audi', 'A4', 2015, 'ВЕ1234АВ');
let car2 = new Car('BMW', 'X5', 2018, 'АХ5678ВС');
let car3 = new Car('Mercedes', 'E-Class', 2020, 'МН9876ХХ');

car1.assignOwner(person1);
car1.carInfo();

car2.assignOwner(person2);
car2.carInfo();

car3.assignOwner(person3);
car3.carInfo();