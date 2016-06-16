var QUnit = require('qunitjs');
var functions = require('./functions');

QUnit.test("functions.size", function(assert) {
  assert.equal(functions.size({}), 0);
  assert.equal(functions.size({"key": "value"}), 1);
  assert.equal(functions.size({"key1": "value1", "key2": "value2"}), 2);
})

QUnit.test("averageSkillLevel", function(assert) {
  assert.equal(functions.averageSkillLevel({"databases": 1}), 1);
  assert.equal(functions.averageSkillLevel({"databases": 3, "concurrency": 0}),
    1.5);
});

QUnit.test("skillLevelDescription", function(assert) {
  assert.equal(functions.skillLevelDescription(1),
    "Beginner Software Developer");
  assert.equal(functions.skillLevelDescription(1.4),
    "Beginner Software Developer");
  assert.equal(functions.skillLevelDescription(1.5),
    "Intermediate Software Developer");
  assert.equal(functions.skillLevelDescription(2.5),
    "Expert Software Developer");
  assert.equal(functions.skillLevelDescription(0),
    "skillLevelDescription got an invalid input: 0, it expected 1, 2, or 3");
});
