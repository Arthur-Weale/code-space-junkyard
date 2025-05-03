




const myObject = {
    property : "value!",
    otherProps: 77,
    "obnoxios Property": function(){ //A double quoted property name is used to define a property string with space.
        console.log(`Hello ${this.property}`);
    }
}

//Accessing object items using the dot notation

console.log(myObject.property);


//Accessing object items using the bracket notation [];

let bracknot = myObject["obnoxios Property"];
console.log(bracknot);

//OBJECTS AS A DESIGN PATTERN

//example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

//example two

const playerOne = {
    name: "tim",
    marker: "O"
};

const playerTwo = {
    name: "jenn",
    marker: "X"
}

function printName(player){
    console.log(playerOne.name);
}

printName();

// but what if you don’t know which player’s name you want to print?
//Or, what if we aren’t making a 2 player game, but something more complicated such as an online shopping site with a large inventory? In that case, using objects to keep track of an item’s name, price, description and other things is the only way to go. Unfortunately, in that type of situation, manually typing out the contents of our objects is not feasible either. We need a cleaner way to create our objects, which brings us to…

//Thats why we need object and constructors


//OBJECT CONSTRUCTORS

// function Player(name, marker){
//     this.name = name;
//     this.marker = marker;
// }

// const player = new Player("Steve", "Xman")
// console.log(player);

//Continue........

// function Player(name, marker){
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function(){
//         console.log(this.name)
//     }
// }

// const player1 = new Player("steve", "X");
// const player2 = new Player("jane", "O");

// player1.sayName();
// player2.sayName();

//TOP CHALLENGE 

// Exercise
// Write a constructor for making “Book” objects. We will revisit this in the next project. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info like so:

// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"


function Book(title, author, pages , reading ){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = reading;
    this.info = function(){
        if(this.read){
            return (`The ${this.title} by ${this.author}, ${this.pages} pages, were read`);
        }
        else{
            return (`The ${this.title} by ${this.author}, ${this.pages} pages, not read yet`);
        }
    }
}

const theHobbit = new Book("Hobbit", "J.R.R Tolkien", 322, false);

console.log(theHobbit.info());

//USING PROTOTYPE

function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(`Hello, I'm ${this.name}`);
};

function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function(){
    console.log(`My marker is ${this.marker}`);
};

// Object.getPrototypeOf(Player.prototype); //Returns Object.prototypr

Object.setPrototypeOf(Player.prototype, Person.prototype);
// Object.getPrototypeOf(Player.prototype);

const player3 = new Player("paul", "C");
// const player4 = new Player("also paul", "B");

player3.sayName();
// player4.sayName();

player3.getMarker()
// player4.getMarker()


//AI CHALLENGE

// 🥇 Level 1 — Basic Inheritance
// 👉 Task:
// Create an Animal constructor with a method eat().
// Create a Dog constructor that inherits from Animal.
// The Dog should have its own method bark().

// Example Goal:

// javascript
// Copy
// Edit
// const dog = new Dog("Rex");
// dog.eat();  // "Rex is eating."
// dog.bark(); // "Rex says woof!

function Animal(name){
    this.name = name;
}

Animal.prototype.eat = function(){
    console.log(`${this.name} is eating `);
}


function Dog(name ,action){
    //this.name = name;
    Animal.call(this,name);
    this.action = action;
}

Dog.prototype.bark = function(){
    console.log(`${this.name} says ${this.action}`);
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

const dog = new Dog("Rex", "Woof")

dog.eat();
dog.bark();



// 🎯 LEVEL 2 CHALLENGE: "Vehicle" Example
// I want you to build this without looking back:

// Create a Vehicle constructor. It should accept make and model (like Toyota, Corolla).

// Create a Car constructor. It should accept make, model, and color.

// Steal the make and model from Vehicle inside Car.

// Make a method called describeVehicle() on Vehicle.prototype that logs something like:

// arduino
// Copy code
// "This is a Toyota Corolla."
// Make a method called describeCar() on Car.prototype that logs something like:

// arduino
// Copy code
// "This Toyota Corolla is red."
// Use Object.setPrototypeOf() to link Car and Vehicle.

// Create a const myCar = new Car("Toyota", "Corolla", "red") and test both methods.


function Vehicle(make, model){
    this.make = make;
    this.model = model;
}

Vehicle.prototype.describeVehicle = function(){
    console.log(`This is a ${this.make} ${this.model}`);
};

function Car(make, model , color){
    if(!new.target){
        throw new Error("Ayo bro , you got to new in there at the creation of an instance")
    }
    Vehicle.call(this, make, model);
    this.color = color;
}

Car.prototype.describeCar = function (){
    console.log(`This ${this.make} ${this.model} is ${this.color}`);
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

const car = new Car("Toyota", "Corolla", "red");

car.describeVehicle();
car.describeCar();