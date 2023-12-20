function bark(name, weight) {
  if (weight > 20) {
    console.log(name + "says WOOF WOOF");
  } else {
    console.log(name + "says woof woof");
  }
}
bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);
// Exercise 1
bark("juno", 20); // juno says woof woof, since 20 is not more than 20, false
bark("scottie", -1); // scottie says woof woof, since -1 is not more than 20
bark("dino", 0, 0); // dino says woof woof, there are 3 arguments here
bark("fido", "20"); // fido says woof woof, here js will compare the string with the number
bark("lady", 10); // lady says woof woof, 10 less than 20
bark("bruno", 21); // bruno says WOOF WOOF, 21 is over 20,, true
// Everything works! No errors!
