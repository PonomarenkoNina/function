// Experiment 1 What happens if you pass too few arguments
function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3);
// Console on JS: Brewing 3 cups of undefined
// The tea parameter contains the value undefined because we did not pass its value.

// Experiment 2 What happens if you pass many arguments
function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3, "Earl Grey", "hey ma!", 42);
// Console on JS: Brewing 3 cups of Earl Grey
// JS simply ignores extra arguments

// Experiment 3 What happens if the function has NO parameters at all
function barkAtTheMoon() {
  console.log("Woooooooooooooooo!");
}
barkAtTheMoon();
// Console on JS: Wooooooooooooooooo!
// There are a lot of such functions
