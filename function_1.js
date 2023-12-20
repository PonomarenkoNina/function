// Exercise 1
function whatShellWear(temp) {
  if (temp < 60) {
    console.log("Wear a jacket");
  } else if (temp < 70) {
    console.log("Wear a sweater");
  } else {
    console.log("Wear t-shirt");
  }
}

whatShellWear(50);
whatShellWear(80);
whatShellWear(60);

// Superfluous  ,  ,  ,  }  } temperature
// On the console JavaScript:
// Wear a jacket
// Wear a t-shirt
// Wear a sweater

// Exercise 2
function dolt(param) {
  param = 2;
}
var test = 1;
dolt(test);
console.log(test);

// It will output 1 to the console, since we
// pass the test variable to the dolt function
// that is, dolt is assigned a new value to param

// Exercise 3
// There is a piece of JavaScript code with variables, function definitions and function calls.
// Find all variables, functions, arguments and parameters.
function dogYears(dogName, age) {
  var years = age * 7;
  console.log(dogName + " is " + years + "years old");
}
var myDog = "Fido";
dogYears(myDog, 4);
// Fido is 28 years old

function makeTea(cups, tea) {
  console.log("Brewing" + cups + " cups of " + tea);
}
var guests = 3;
makeTea(guests, "Earl Grey");
// Brewing 3 cups of Earl Grey

function secret() {
  console.log("The secret of life is 42");
}
secret();
// The secret of life is 42

function speak(kind) {
  var defaultSound = "";
  if (kind == "dog") {
    alert("Woof");
  } else if (kind == "cat") {
    alert("Meow");
  } else {
    alert(defaultSound);
  }
}
var pet = prompt("Enter a type of pet: ");
speak(pet);
// Enter a type of pet: dog or cat

// Variables: years myDog guests defaultSound pet
// Functions: pet makeTea secret speak
// Arguments: myDog, 4  guests, "Earl Grey"
// Options: dogName, age  cups, tea  kind
// Built-in functions:  console.log  alert  prompt
