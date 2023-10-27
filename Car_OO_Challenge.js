class Vehicle {
    constructor(make, model, year) {
        if ((typeof make !== "string") || (typeof model !== "string") || (typeof year !== "number")) {
            this.isVehicle = false;
        } else {
            this.make = make;
            this.model = model;
            this.year = year;
            this.isVehicle = true;
        }
    }

    honk() {
        return "Beep";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
    
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle) {
        if (!vehicle.isVehicle || !(vehicle instanceof Vehicle)) {
            return "Only vehicules are allowed here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }

        this.vehicles.push(vehicle);
        return "Vehicle added!";
    }
}