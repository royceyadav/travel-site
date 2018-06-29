// an object with a function...

var john = {
  name: "John Doe",
  favouriteColour: "blue",
  greet: function(){
    console.log("Hello, my name is " + john.name + " and my favourite colour is " + john.favouriteColour + ".");
  }
}

john.greet();
