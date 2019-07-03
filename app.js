var fs = require("fs");

var inputs = [];
fs.readFileSync("input.txt", "utf-8")
  .split(/\r?\n/)
  .forEach(function(line) {
    inputs = line.split(",");
  });

// Sort by Alphabet
inputs = inputs.sort();
var length = inputs.length;

// Roman to Integer
function romanToNumber(string) {
  var map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50
  };

  var length = string.length;
  var result = map[string[length - 1]];

  for (var i = length - 2; i >= 0; i--) {
    if (map[string[i]] >= map[string[i + 1]]) {
      result += map[string[i]];
    } else {
      result -= map[string[i]];
    }
  }

  return result;
}

//Bubblesort
function swap(inputs) {
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      if (j + 1 < 3 && inputs[j].charAt(0) == inputs[j + 1].charAt(0)) {
        var currentCheck = inputs[j].split(" ");
        var nextCheck = inputs[j + 1].split(" ");
        if (romanToNumber(currentCheck[1]) > romanToNumber(nextCheck[1])) {
          var temp = inputs[j];
          inputs[j] = inputs[j + 1];
          inputs[j + 1] = temp;
        }
      }
    }
  }
  return inputs;
}

fs.writeFile("output.txt", swap(inputs), function(err) {
  if (err) {
    return console.log(err);
  }
  console.log(swap(inputs));
  console.log("Output available in output.txt");
});
