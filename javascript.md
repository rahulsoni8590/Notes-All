# Basic

- Javascript is a High Level, Light-weighted, Interpreted JIT compiled Multi-Paradigm Prototype Based Synchronous, Single Threaded Dynamic Language.

- High Level = High-level languages are those languages that are independent of system architecture.

- Light-weighted = The lightweight application is a computer program designed to have low system resource usage.

- Interpreted or JIT-compiled = An interpreter in the browser reads over the JavaScript to JS code, interprets each line, and runs it. More modern browsers use a JIT compilation which compiles JS to executable bytecode just as it is about to run.

- Multi-Paradigm = It supports different styles of writing the same code.

- Prototype Based = This type of style allows the creation of an object without first defining its class.

- Synchronous = Synchronous means the code runs in a particular sequence of instructions as given in the program.

- Single-Threaded = Single-threaded means it executes one line of code at a time. So it executes the current line of code before going to the next line.

- Dynamic Language = Dynamic refers to the value which is capable of change at run time

# Dialog Boxes in JS

- i. These are actually web APIs and not JavaScript functions. It works on the window object

1. Prompt
2. Alert
3. confirm

```javascript
prompt("some message");
alert("some message");
confirm("some message");
```

# Object

## Object Literal

- Object literals have their limitations when creating multiple objects with similar properties and behaviors. Each object created with an object literal has its own properties and methods, resulting in duplicated code and inefficiency.

```javascript
const parent = {
  name: "rahul",
  age: 26,
  detail: function () {
    console.log(this.name, this.age);
  },
};

console.log(Object.getPrototypeOf(parent));
// return {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
```

## object with constructor fn

- Constructor functions address this limitation by providing a blueprint for creating multiple objects with shared properties and methods.

- Object.getPrototypeOf("INSTANCE") is the standard recommended way of accessing the properties of object as (.prototype, .proto) different browers support different property

- to create object using constructor fn "new" keyword is used.

```javascript
function Person(name) {
  this.name = name;
}
var bob = new Person("Bob");
console.log(Object.getPrototypeOf(bob)); // returns Person {}
```

## prototypal inheritance [construction based Inheritance]

- Prototypal inheritance refers to how objects inherit from their prototypes. When you look up a property on an object (e.g., `bob.name`), if it doesn't exist on the object itself, JavaScript looks at its prototype chain until it finds what it needs.

```javascript
function Parent(name, age) {
  // this a parent object with constructor fn
}

Parent.prototype.work = function (job) {
  console.log(`I works as a ${job}`);
};

//now work property is inherited by all the object create using Parent construction fn.

const prashant = new Parent();
prashant.work("teacher");
console.log(Object.getPrototypeOf(prashant)); //{work: ƒ}
console.log(Object.getPrototypeOf(Parent)); // ƒ () { [native code] }

function Child() {
  // this a child object with constructor fn
}

//now if i want child to inherit all the property of parent
Child.prototype.__proto__ = Parent.prototype;

const rahul = new Child();
rahul.work("Web Developer");
console.log(Object.getPrototypeOf(rahul)); //Parent {}
console.log(Object.getPrototypeOf(Child)); // ƒ () { [native code] }
```

## Object Create [Instance based Inheritance]

- To inherit all the properties of one object into another object.
- cont to = Object.create(from)
- In JavaScript, the `Object.create()` method is used to link objects together and establish prototype chains. It allows us to create a new object with a specified prototype object.
- The `Object.create()` method creates a new object and sets the specified object as its prototype.
- It provides a way to create objects that inherit properties and methods from a prototype object.

```javascript
// parent object literal
const parent = {
  name: "prashant",
  greet() {
    console.log(`My name is ${this.name}`);
  },
};

console.log(parent.name);
console.log(parent.greet());

// created child object using parent object literal
const child = Object.create(parent);

child.name = "rahul";
console.log(child.name);
console.log(child.greet());

// so now all the property and methods are inherited by child object
```

## prototype in Array

- array.**proto** = return inbuilt properties (map, filter etc)

- array.**proto**.**proto** = return object construction fn

```javascript
const arr = new Array();

console.log(arr.__proto__);
//return inbuilt properties (map, filter etc)
// ƒ at() concat : ƒ concat() constructor : ƒ Array() copyWithin : ƒ copyWithin() entries : ƒ entries() every : ƒ every() fill : ƒ fill() filter : ƒ filter() find : ƒ find() findIndex : ƒ findIndex() findLast : ƒ findLast() findLastIndex : ƒ findLastIndex() flat : ƒ flat()

console.log(arr.__proto__.__proto__);

// return object construction fn
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
```

## call/apply/bind methods

- In JavaScript, the `call()`, `apply()`, and `bind()` methods are used to manipulate the execution context of functions and explicitly set the value of `this`. These methods provide flexibility and control over how functions are invoked

- In simple terms call and apply will change the "this" from pointing towards "window object" to the "object itself"

- Note: "this" keyword must be used in the fn to get the result correct ie

- In the fn now all the variable with
  this.name = points to object literal variable
  name = point to the window object variable

```javascript
let name = "rahul";
let age = 26;

const detail = {
  age: 27,
};

// temprory
function greet(name) {
  console.log(name);
  console.log(age);
  console.log(this.age);
  console.log(this);
}

greet("rahul");
greet.call(detail, "raj");
greet.apply(detail, ["gayatriPrasad"]);

// permanent = so as to create reusable fn from greet3
const greet3 = greet2.bind(detail);
greet3("rahul");
```

## Destructure

### object

```javascript
const obj = { name: "rahul", age: 26 };
const obj2 = { lastname: "soni", gender: "male" };

const { name, age } = obj;
const { name: firstname, age: number } = obj;
const { lastname, gender, city = "sagar" } = obj2;

console.log(name, firstname);
console.log(age, number);
console.log(lastname, gender, city);
```

### array

```javascript
const arr1 = ["rahul", "soni", 26];

//for all
const [a, b, c] = arr1;
console.log(a, b, c);

// leaving position blank
const [i, , k] = arr1;
console.log(i, k);

//using rest operator
const [l, ...rest] = arr1;
console.log(l, rest);

//This is wrong
// const [...arr1, p] = arr1
// const [q, ...arr1] = arr1

console.log(l, rest);

// asssign default value incase value is absent
const [x = 0, y = 0, z = 0, v = 1] = arr1;
console.log(x, y, z, v);
```

# Classes

- Classes are just an alternative way of creating objects and dealing with object-oriented programming in JavaScript - but one that many developers find more convenient.

- Unlike function declarations, class declarations are not hoisted. They need to be declared before they are used.
- Class expressions, on the other hand, behave like variables and can be hoisted.

- When using classes, the `use strict` directive is implicitly applied, ensuring a stricter mode of JavaScript execution within the class

```javascript
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  detail() {
    console.log(this.name, this.age);
  }
}

const student1 = new Student("rahul", 26);

console.log(student1);
student1.detail();
```

## Encapsulationn

- Classes promotes encapsulative by making private memeber using #

- Information Hiding = s protects sensitive data and prevents direct manipulation, reducing the risk of unintended side effects
- Controlled Access = Encapsulation allows developers to control access to internal state and behavior. Only the necessary methods and properties are exposed as part of the public interface, ensuring more predictable and maintainable code.
- Code Organization = Encapsulation promotes modular and organized code.

```javascript
class Myclass {
  #privateProperty = "Private property";

  #privateMethods() {
    console.log("This is a private method");
  }

  publicMethod() {
    console.log(this.#privateMethods());
    console.log(this.#privateProperty);
  }

  publicProperty = "Public Property";
}

const class1 = new Myclass();

console.log(class1); // Myclass {publicProperty: 'Public Property', #privateProperty: 'Private property'}

// return the value
class1.publicMethod();
console.log(class1.publicProperty);

// give syntax error
class1.#privateProperty;
class1.#privateMethods();
```

## Inheritance

- To inherit property and method from parent class to make the code reuse, promotes code organization, and facilitates the creation of specialized subclasses.

- [extends] :: It establishes a hierarchical relationship between classes, allowing the child class to inherit the properties and methods of the parent class

- [super] :: It enables the child class to access and initialize "properties" defined in the parent class.

- However, it's worth noting that the `super` keyword can also be used to call other methods defined in the parent class, not just the constructor. This allows the child class to leverage and extend the functionality provided by the parent class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog1 = new Dog("Bruno", "Husky");
console.log(dog1);
```

## Function Overriding

- Function overriding is the ability of a child class to provide a different implementation for a method that is already defined in its parent class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  detail() {
    console.log("details from Parent class");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  detail() {
    console.log("details from child class");
  }
}

const dog1 = new Animal("Bruno");
const dog2 = new Dog("Bruno", "Husky");

dog1.detail(); // "details from Parent class"

dog2.detail(); // "details from Child class"
```

## Inheritance in Constructor Functions

- constructor fn start with capital letter

- and instance is created using new keyword

- Vehicle.call(this, make); [extends] works as `extends`
  The `Car` constructor function extends `Vehicle` by calling `Vehicle.call(this, make)` in its own constructor. This ensures that the `make` property is properly set for each `Car` instance

- Car.prototype = Object.create(Vehicle.prototype); `inheritance`all property/method of vehicle will now car can inherit
  To establish the inheritance relationship, we use `Object.create(Vehicle.prototype)` to create a new object with `Vehicle.prototype` as its prototype. This new object is assigned to `Car.prototype`, allowing `Car` instances to inherit properties and methods from `Vehicle`.

```javascript
function Vehicle(make) {
  this.make = make;
}

Vehicle.prototype.start = function () {
  console.log(`Starting the ${this.make} vehicle.`);
};

function Car(make, model) {
  Vehicle.call(this, make);
  this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);
const myCar = new Car("Toyota", "Camry");
myCar.start(); // Output: Starting the Toyota vehicle.
```

## Static keyword in JS

- The `static` keyword is used to define static properties and methods within a class.
- Static members are associated with the class itself rather than its instances.
- They are accessed and invoked directly on the class, without the need to create an object. They are accessed using the class name followed by the dot notation.

```javascript
class Animal {
  static pi = 3.14;

  constructor(num) {
    this.num = num;
  }

  static doublePI() {
    console.log(Animal.pi * 100);
  }

  triplePi() {
    console.log(Animal.pi * 3 * this.num);
  }
}

Animal.doublePI(); // correct
Animal.triplePi(); // give error

const animal1 = new Animal(5);
animal1.doublePI(); // give error
animal1.triplePi(); // correct
```

# Getter and Setter

- Allow access and modify object property in controller manner.

- Allow Encapsulation, enable validation or manipulation of property value before setting or retrieve them

- To implement computed property, where value derived torm other properties

- To handle edge cases and ensure data manipulation within an object.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  get convertTo_capital() {
    return this.name.toUpperCase();
  }

  set setName(newName) {
    this.name = newName;
  }
}

const person1 = new Person("rahul");
console.log(person1.convertTo_capital);
person1.setName = "raj";
console.log(person1.convertTo_capital);
```

# closure

- A closure in JavaScript is a function that has access to variables in its outer scope, even after the outer function has returned. It is commonly used to create private variables and functions. Below is an example:

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let counter = createCounter();
counter(); // output: 1
counter(); // output: 2
counter(); // output: 3
```

# Hoisting

- JavaScript's hoisting mechanism moves variable declarations to the top of their scope during the compilation phase. For variables declared with var, the declaration is hoisted, but not the assignment. This results in the variable being undefined until the assignment is reached.

- Global Scope:
  Variables that are not declared with var, let, or const within a function become global. This is why b becomes a global variable and is accessible from outside the function, such as in fun1.

  - When you write b = 16; inside the fun function without any declaration keyword (var, let, const), JavaScript implicitly declares b as a global variable. This means b is added as a property of the global object (window in browsers).

- Example in Practice
  Here’s how the code executes:

  Execution of fun():

  b = 16 creates or updates the global variable b with the value 16.
  var a is hoisted to the top of the function with an initial value of undefined. When console.log(a) executes, a is undefined because the assignment a = 12 hasn't happened yet.
  After the console.log(a) statement, a is then assigned the value 12, but this does not affect the earlier console.log(a) output.
  Execution of fun1():

  console.log(b) outputs 16 because b was assigned this value globally by the fun function.
  Summary
  Declaring a variable without var, let, or const creates a global variable.
  Variables declared with var are hoisted, meaning their declarations are processed before the code is executed, but their assignments remain in place.
  Understanding these scoping rules and hoisting behavior is crucial for managing variables and avoiding unintended global pollution in JavaScript.

```javascript
var a = 75;

function fun() {
  b = 16;
  console.log(a);
  var a = 12;
}

function fun1() {
  console.log(b);
}

fun();
fun1();
```
