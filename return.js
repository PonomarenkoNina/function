function bake(degrees) {
  var message;

  if (degrees > 500) {
    message = "I'm not a nuclear reactor!";
  } else if (degrees < 100) {
    message = "I'm not a refrigerator!";
  } else {
    message = "That's a very comfortable temperature for me.";
    setMode("bake"); // the console gives an error, but it’s written like in the book, what’s wrong
    setTemp(degrees);
  }
  return message;
}

var status = bake(350);
