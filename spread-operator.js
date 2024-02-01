function myBio(firstName,lastName,company){
    return `${firstName} ${lastName} runs ${company}`;
}
// Use spread to expand an array’s items into individual arguments:
console.log(myBio(...["Shiavsnh","Bohra","Tcp"]));




// Note:

// The spread operator can expand iterable objects’ values only.
// An object is iterable only if it (or any object in its prototype chain) has a property with a @@iterator key.
// Array, TypedArray, String, Map, and Set are all built-in iterable types because they have the @@iterator property by default.
// A properties object is not an iterable data type because it does not have the @@iterator property by default.
// You can make a properties object iterable by adding @@iterator onto it.