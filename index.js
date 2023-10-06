/* Activity: Classy Cars
Headquartered in Detroit, Classy Cars LLC is an automotive manufacturer of high-end cars; including sedans, SUVs and trucks.

Classy Cars LLC, has tasked your team with modeling the vehicles they have in their inventory to help their R&D department understand how cars have evolved.

They have provided a class diagram in the starter code of all their vehicle models that they want you to turn into JS code for their inventory processor API. */

/* Directions
Fork and clone the repo listed above
Open the project in VSCode.
Open the index.html page in a browser to view the broken rides.
You should see all tests fail with red and have errors in your developer console as your starting point.
Take a look at VehicleClassDiagram.png in your repository. This file represents the classes you want to implement.
The arrows show the class inheritance (like a family tree), so Vehicle is the base and Sedan, SUV and Truck derive from it.
Let's model the vehicle base class together!
Now we can start by opening the index.js file in VSCode!
We create a base class in index.js named Vehicle that all other vehicles will derive behaviors and properties from!
Now save index.js and refresh your browser you should see the first test pass!
Now go build the rest of the classes on your own, all tests will be green if you are done! */

class Vehicle {
    constructor(model) {
        this.model = model
    }
    drive() {
        return this.model + " drives"
    }
}

class Sedan extends Vehicle {
    constructor(model, backupCamera) {
        super(model)
        this.model = model
        this.backupCamera = backupCamera
    }
    drive() {
        return this.model + " drives"
    }
}

class Suv extends Vehicle {
    constructor(model, offroadPackage) {
        super(model)
        this.model = model
        this.offroadPackage = offroadPackage
    }
    drive() {
        return this.model + " drives"
    }
}

class Truck extends Vehicle {
    constructor(model, towingCapacity) {
        super(model)
        this.model = model
        this.towingCapacity = towingCapacity
    }
    drive() {
        return this.model + " drives"
    }
}

class EVSedan extends Vehicle {
    constructor(model, backupCamera) {
        super(model)
        this.model = model
        this.backupCamera = backupCamera
    }
    drive() {
        return `${this.model} drives`
    }
    recharge() {
        return `${this.model} recharges`
    }
}
