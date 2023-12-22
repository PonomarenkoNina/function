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
// bonus and newPoints - local
//

userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);
