class Human{
    constructor(name, sex, hasAPet){
        if (!name || !sex) {
            console.log('Missing data');
        }
        this.name = name;
        this.sex = sex;
        this.hasAPet = hasAPet;
    }
}

class Apartment{
    constructor(petIsAllowed){
        this.residents = [];
        this.petIsAllowed = petIsAllowed;
    }

    petCheck(resident){//Перевірка дозволу на тварину
        return !this.petIsAllowed && resident.hasAPet ? false : true;
    }

    troubleMessage(resident){
        const reason = !this.petCheck(resident) ? `Pets are not allowed.` : `This is not a human.`;
        return `You can't add this resident. ${reason}`;
    }

    addResident(resident){
        resident instanceof Human && this.petCheck(resident)
            ? this.residents.push(resident) : console.log(this.troubleMessage(resident));
    }
}

class House{
    constructor(maxQtyOfApartments){
        this.apartments = [];
        this.maxQtyOfApartments = maxQtyOfApartments;
    }

    checkApartmentsQty(){
        return this.apartments.length < this.maxQtyOfApartments;
    }

    troubleMessage(){
        const reason = !this.checkApartmentsQty() ? `Too many apartments.` : `It's not an apartment.`;
        return `You can't add this apartment. ${reason}`;
    }

    addApartment(apartment){
        this.checkApartmentsQty() && apartment instanceof Apartment 
            ? this.apartments.push(apartment) : console.log(this.troubleMessage());
    }
}

// Створення класів класу людина
const john = new Human('John', 'male', true);
const anna = new Human('Anna', 'female', false);
const peter = new Human('Peter', 'male', true);

// Створення класів класу квартира
const apartment1 = new Apartment(true); // Квартира, где разрешены животные
const apartment2 = new Apartment(false); // Квартира, где запрещены животные

// Додавання екземплярів класу Людина в екземпляри класу Квартира
apartment1.addResident(john);
apartment1.addResident(anna);
apartment2.addResident(peter);

// Створення екземпляру класу Будинок
const house = new House(2); // Максимальное количество квартир в доме: 2

// Додавання екземплярів класу Квартира в екземпляри класу Будинок
house.addApartment(apartment1);
house.addApartment(apartment2);

