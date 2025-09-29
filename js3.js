class MyCar {
    constructor(name, year, model) {
        this.name = name;
        this.year = year;
        this.model = model;
    }

    display() {
        console.log(`Car name is ${this.name}, ${this.year} and model is ${this.model}`);
    }
}

let car = new MyCar("Suzuki", 2020, "Swift");
car.display();
