class Person {
  constructor(fullName, favColour) {
    this.name = fullName;
    this.colour = favColour;
  }

  greet(){
    console.log("Hi there, my name is " + this.name + " and my favourite colour is " + this.colour + ". ")
  }
}

// module.exports = Person;
  // this ^ the node.js way...
  //in ES6 JS this becomes...
export default Person;  
/*
console.log("Hello from Person.js");

exports.exampleProperty = "Super magical example value";
exports.exampleFunction = function(){
  alert("This is an example");
}
*/
