class Vehicle {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels;
    }
    describeYourself() {
        console.log(
            `I am a ${this.description} with ${this.wheels}  wheels`);
    }
}

let coolSkiVan = new Vehicle("cool ski van", "4");

console.log(coolSkiVan);
coolSkiVan.describeYourself();

// Inheritance with javascript classes

class SemiTruck extends Vehicle {
    constructor() {
        super("semi trcuk", 18)
    }
}

let grocerystoreSemi = new SemiTruck();
grocerystoreSemi.describeYourself();

//Get and set class values
let attendance = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(",")
    }
};

attendance.addName = "Joanne";
console.log(attendance.list);  //joanne

attendance.addName = "Bill";
attendance.addName = "Charlie";
console.log(attendance.list); //Joanne,Bill,Charlie


class Hike {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace;
    }
    get lengthInHours() {
        return ` ${this.calcLength()} hours`;
    }
    calcLength() {
        return this.distance/this.pace;
    }
}

const mtTallac = new Hike(10, 2);
console.log(mtTallac.lengthInHours);
