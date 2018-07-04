function Person(fullName, favColour) {
  this.name = fullName;
  this.colour = favColour;
  this.greet = function(){
    console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.colour + ". ")
  }
}

module.exports = Person;
/*
console.log("Hello from Person.js");

exports.exampleProperty = "Super magical example value";
exports.exampleFunction = function(){
  alert("This is an example");
}
*/
