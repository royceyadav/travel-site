// console.log("Hello, my name is John Doe and my favourite colour is blue");
// console.log("Hello, my name is Jane Smith and my favourite colour is green");
// this becomes...
function person(name, favColour){
  console.log("Hello, my name is " + name + " and my favourite colour is " + favColour + ". ");
}

// var johnName = "John Doe";
// var johnFavColour = "blue";
// this becomes an object...
var john = {
  name: "John Doe",
  favouriteColour: "blue"
}

// person("John Doe", "blue");
// person(johnName, johnFavColour);
person(john.name, john.favouriteColour);
person("Jane Smith", "green");
