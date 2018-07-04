// function person(name, favColour) {
//   console.log("Hello, my name is " + name + " and my favourite colour is " + favColour + ". ");
// }

// var johnName = "John Doe";
// var johnColour = "blue";


  // var john = {
  //   name: "John Doe",
  //   favColour: "blue",
  //   greet: function(){
  //     console.log("Oh, hello, my name is " + john.name + " and my favourite colour is " + john.favColour + ". ");
  //   }
  // }
// person(john.name, john.favColour);
// person("Jane Smith", "green");
  // john.greet();


// ^ replace above indented code with constructor function called Person ^
// function Person(fullName, favColour) {
//   this.name = fullName;
//   this.colour = favColour;
//   this.greet = function(){
//     console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.colour + ". ")
//   }
// }

  //import in above constructor code from Person.js
var $ = require('jquery');
var Person = require('./modules/Person');

// console.log(Person.exampleProperty);
// Person.exampleFunction();

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

$("h1").remove();
