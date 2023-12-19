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
// Упражнение
bark("juno", 20); // juno says woof woof, так как 20 не больше 20, false
bark("scottie", -1); // scottie says woof woof, так как -1 не больше 20
bark("dino", 0, 0); // dino says woof woof, тут 3 аргумента
bark("fido", "20"); // fido says woof woof, тут js сравнит строку с числом
bark("lady", 10); // lady says woof woof, 10 меньше 20
bark("bruno", 21); // bruno says WOOF WOOF, 21 больше 20, true
// все работает!Ошибок нет!
