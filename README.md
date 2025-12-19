#Coursera_JavaScript_OOP  
#JavaScript OOP: Classes, Inheritance & Methods Lab  
---
Failed: Intern instance - returned: ,,ReferenceError,, but expected 10,10,Bob,21,110  
Failed: Manager instance - returned: ,,ReferenceError,, but expected 100,30,Alice,30,110  

---
The Person class: state & behavior  
The first goal is to build a Person class with core properties and behaviors that represent a generic person.  

**Final implementation – Person**  
```js
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
```
Key points:  
name, age, and energy have default values so objects can be created quickly without passing all arguments.  
sleep() restores energy by increasing energy by 10 and logs a status message.  
doSomethingFun() consumes energy by decreasing energy by 10 and logs a status message.  ​

---
**The Worker class: inheritance & extra fields**  
The second goal is to create a Worker class that extends Person and adds work-related properties and behavior.  

**Final implementation – Worker**  
```js
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
```

**Key points:**  
Worker inherits name, age, and energy from Person and adds:  
  xp: experience points, default 0.  
  hourlyWage: hourly pay, default 10.  
super(name, age, energy) calls the parent constructor to initialize inherited fields.  
goToWork() increases xp by 10 and logs the new experience value.  ​

---
**Task 3: the intern() helper**  
intern() creates a preconfigured Worker instance representing an intern and calls its method.  

```js
function intern() {
    const internObj = new Worker("Bob", 21, 110, 0, 10);
    internObj.goToWork();
    return internObj;
}
```

**Behavior:**  
Creates an intern named "Bob" with:  
age = 21  
energy = 110  
xp = 0  
hourlyWage = 10  
Calls goToWork() once to increase the intern’s experience before returning the object.  ​

---
Task 4: the manager() helper  
manager() creates a preconfigured Worker instance representing a manager and calls one of its inherited methods.  

```js
function manager() {
    const managerObj = new Worker("Alice", 30, 120, 100, 30);
    managerObj.doSomethingFun();
    return managerObj;
}
```

**Behavior:**  
Creates a manager named "Alice" with:  
age = 30  
energy = 120  
xp = 100  
hourlyWage = 30  
Calls doSomethingFun() to simulate doing something fun (and consuming energy) before returning the object.  ​

**Key takeaways**  
ES6 classes provide a clean syntax for defining constructors and instance methods.  
Inheritance with extends and super lets Worker reuse and extend Person logic while adding its own fields and behavior.  
Default parameters make object creation flexible and reduce boilerplate.  
Encapsulated behavior (sleep, doSomethingFun, goToWork) keeps state changes tied to clear, descriptive methods  

---
**How to Run the Code**  
filename: ooprogramming.js  
Open your browser's Developer Tools (F12)  
Paste the code into the Console.  
