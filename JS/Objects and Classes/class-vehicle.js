class Vehicle {
    constructor(type, model, parts, fuel) {
        parts['quality'] = parts['power'] * parts['engine']
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

let parts = {engine: 9, power: 500};
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);