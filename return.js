function bake(degrees) {
  var message;

  if (degrees > 500) {
    message = "I'm not a nuclear reactor!";
  } else if (degrees < 100) {
    message = "I'm not a refrigerator!";
  } else {
    message = "That's a very comfortable temperature for me.";
    setMode("bake");
    setTemp(degrees);
  }

  function setMode(mode) {
    console.log("Setting the mode to", mode);
  }
  function setTemp(degrees) {
    console.log("Setting the temperature to", degrees);
  }

  return message;
}

var status = bake(350);
// On console JS: Setting the mode to bake. Setting the temperature to 350

function calculateArea(r) {
  var area;
  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area;
  }
}
var radius = 5.2;
var theArea = calculateArea(radius);
console.log("The area is: " + theArea);
// On console JS: "The area is: 84.9486
