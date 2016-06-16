//TODO import data from a yaml file instead of hardcoding
var SKILLS = {"databases": 1};

exports.averageSkillLevel = function(skills) {
  var skillCount = Object.size(skills);
  var sumOfSkillPoints = 0;
  for (var skill in skills) {
    if (skills.hasOwnProperty(skill)) {
      sumOfSkillPoints += (skills[skill]);
    }
  }
  var avg = sumOfSkillPoints / skillCount;
  return avg
}

exports.size = Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

exports.skillLevelDescription = function(averageSkillLevel) {
  roundedAverage = Math.round(averageSkillLevel);
  switch (roundedAverage) {
    case 1:
      return "Beginner Software Developer";
    case 2:
      return "Intermediate Software Developer";
    case 3:
      return "Expert Software Developer";
    default:
      return "skillLevelDescription got an invalid input: " + averageSkillLevel
        + ", it expected 1, 2, or 3";
  }
}
