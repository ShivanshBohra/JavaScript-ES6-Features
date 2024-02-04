// In arrow functions, the value of this is lexically scoped,
//  meaning it is determined by the surrounding code and 
//  not by how the function is called. 
//  This is in contrast to regular functions, 
//  where the value of this depends on how the function is invoked.


function TraditionalFunction(){
    this.value = 1;

    // Regular Function
    setTimeout(function(){
        this.value++;
        console.log("Inside Regular Function: ", this.value); //Will log Nan
    }, 1000);
}
function ArrowFunction() {
    this.value = 1;

    // Arrow function
    setTimeout(() => {
        this.value++;
        console.log("Inside Arrow Function:", this.value); // Will log 2
    }, 1000);
}

const regularObj = new TraditionalFunction();
const arrowObj = new ArrowFunction();


//In the TraditionalFunction, when using a regular function inside setTimeout, the value of this is not lexically scoped, leading to an issue where this.value becomes NaN.

// On the other hand, in the ArrowFunction, the arrow function maintains the lexically scoped this, resulting in the expected behavior, and this.value increments correctly.