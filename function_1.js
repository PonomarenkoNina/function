// Упражнение 1
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

// Лишние  ,  ,  ,  }  } temperature
// На консоле JavaScript должно выводиться:
// Wear a jacket
// Wear a t-shirt
// Wear a sweater

// Упражнение 2
function dolt(param) {
  param = 2;
}
var test = 1;
dolt(test);
console.log(test);

// На консоль выведет 1, так как мы
// передаем переменную test в функцию dolt
// то есть dolt присваивается новое значение param

// Упражнение 3
// Есть фрагмент кода JavaScript с переменными, определениями функций и вызовами функций.
// Найти все переменные, функции, аргументы и параметры.
function pet(dogName, age) {
  var years = age * 7;
  console.log(dogName + " is " + years + " years old ");
}
var myDog = "Fido";
dogYears(myDog, 4);

function makeTea(cups, tea) {
  console.log("Brewing" + cups + " cups of " + tea);
}
var guests = 3;
makeTea(guests, "Earl Grey");

function secret() {
  console.log("The secret of life is 42");
}
secret();

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
var pet = promt("Enter a type of pet: ");
speak(pet);

// Переменые: years myDog guests defaultSound pet
// Функции: pet makeTea secret speak
// Аргументы: myDog, 4  guests, "Earl Grey"
// Параметры: dogName, age  cups, tea  kind
// Встроенные функции: console.log  alert prompt

// Fido is 28 years old
// Brewing 3 cups of Earl Grey
// The secret of life is 42
// Enter a type of pet: dog or cat
