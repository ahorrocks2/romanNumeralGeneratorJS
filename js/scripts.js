function romanI(num) {
  var numerals = {1:"I", 4:"IV", 5:"V", 9:"IX", 10:"X", 50:"L", 100:"C", 500:"D", 1000:"M"};
  var ones = num/1;
  var result = [];

  if (num === 4) {
    result.push(numerals[4])
  } else if (num === 9) {
    result.push(numerals[9])

  } else if (num <= 3) {
    for(var i = 1; i <= ones; i+= 1) {
      result.push(numerals[1]);
    }
    
  } else if (num < 9) {
    var remainder = num % 5;
    result.push(numerals[5]);

    for(var j = 1; j <= remainder; j+= 1) {
      result.push(numerals[1]);
    };
  };


  return result.join("");
};
