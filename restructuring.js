// ES5: Object Property Value Shorthand and Method Shorthand

// Original variables
var name = "Everest";
var height = 8848;

// Method using function expression and concatenation
var output = function () {
    console.log("Mr. " + this.name + " is " + this.height + " meters tall");
};

// Object with property value shorthand and method shorthand
var adventureClimbing = { name: name, height: height, output: output };

// Calling the method on the object
adventureClimbing.output();

// -----------------------------------------------------------------------

// ES6: Object Property Value Shorthand and Method Shorthand

// Original variables
const name = "Everest";
const height = 8848;

// Method using arrow function and template literals
const output = () => {
    console.log(`Mr. ${this.name} is ${this.height} meters tall`);
};

// Object with property value shorthand and method shorthand
const adventureClimbing = { name, height, output };

// Calling the method on the object
adventureClimbing.output();

