var avatar = "generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;
// Global variables

function getAvatar(points) {
  var level = points / pointsPerLevel;
  // var level - local
  // parameter points - local
  // var pointsPerLevel - global

  if (level == 0) {
    return "Teddy bear";
  } else if (level == 1) {
    return "Cat";
  } else if (level == 2) {
    return "Gorilla";
  }
}

function updatePoints(bonus, newPoints) {
  var i = 0;
  while (i < bonus) {
    newPoints = newPoints + skill * bonus;
  }
  return newPoints + userPoints;
}
// var i - local
// var bonus and newPoints - local
// var userPoints - global

userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);
// Global variables

// Exersise 1 find variables used in all arguments, parameters, local and global variables
var x = 32; // Global variables
var y = 44; // Global variables
var radius = 5; // Global variables

var centerX = 0; // Global variables
var centerY = 0; // Global variables
var width = 600; // Global variables
var height = 400; // Global variables

function setup(width, height) {
  // width, height - parametrs
  centerX = width / 2; // centerX - global var , width - argument
  centerY = height / 2; // centerY - global var, height - argument
}

function computeDistance(x1, y1, x2, y2) {
  // x1, y1, x2, y2 - parametrs
  var dx = x1 - x2; // Local variables
  var dy = y1 - y2; // // Local variables
  var d2 = dx * dx + dy * dy; // Local variables
  var d = Math.sqrt(d2); // d - local varibles
  return d;
}

function circleArea(r) {
  // r - parametr
  var area = Math.PI * r * r; // area - local variable replaced by global var
  return area;
}

setup(width, height); // width, height - parametrs
var area = circleArea(radius); // area - local var, radius - argument
var distance = computeDistance(x, y, centerX, centerY); // distance - global var; x, y, centerX, centerY - arguments
alert("Area: " + area); // "Area: " + area - arguments
alert("Distance: " + distance); // "Distance: " + distance - arguments

// Exersise 2 find errors in the code and write it down correctly

function clunk(times) {
  var num = times;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}
function thingamajig(size) {
  clunkCounter = 0;
  if (size == 0) {
    display("clank");
  } else if (size == 1) {
    display("thunk");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}
function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);

function clunk(times) {
  var num = times;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}
function thingamajig(size) {
  var clunkCounter = 0;
  var facky = 1;

  if (size == 0) {
    display("clank");
  } else if (size == 1) {
    display("thunk");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}
function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);
