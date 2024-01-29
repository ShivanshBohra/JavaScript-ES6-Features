//function scope
var compName = "Test"

//Block Scope
let x = 123;
const y = 12;
// -----------------------------------------------------------
function test(){
    if(3>2){
        var x = 12;
        console.log("Value of x:" +x);
    }
    console.log("value of x: " +x);
}
test()



// ---------------------------------------------------------------
let n = 123;
console.log(n);
n = 124;
console.log(n);


const m = 123;
console.log(m);
// m = 124;    //TypeError: Assignment to constant variable.
// console.log(m);