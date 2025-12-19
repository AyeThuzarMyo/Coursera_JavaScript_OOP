// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
// WRITE YOUR CODE HERE - Add a constructor with default parameters
// WRITE YOUR CODE HERE - Add the sleep() method
// WRITE YOUR CODE HERE - Add the doSomethingFun() method
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
        console.log("Energy Increasing");
    }
    doSomethingFun() {
        this.energy -= 10;
        console.log("Feeling Tried");
        return Person;
    }

}

// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
// WRITE YOUR CODE HERE - Add a constructor with additional parameters
// WRITE YOUR CODE HERE - Add the goToWork() method
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log(this.xp);
        return Worker;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
    // WRITE YOUR CODE HERE - Call the goToWork() method
    // WRITE YOUR CODE HERE - Return the intern object
    const internObj = new Worker("Bob", 21, 110, 0, 10);
    internObj.goToWork();
    return internObj;
}

// Task 4: Code a manager object, methods
function manager() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
    // WRITE YOUR CODE HERE - Call the doSomethingFun() method
    // WRITE YOUR CODE HERE - Return the manager object
    const managerObj = new Worker("Alice", 30, 120, 100, 30);
    managerObj.doSomethingFun();
    return managerObj;
}