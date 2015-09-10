function romans(num) {
  var result = [];

  while (num >= 1000) {
    result.push("M");
    num -= 1000;
  }

  while (num >= 500) {
    if (num >= 900) {
      result.push("CM");
      num -= 900;
    } else {
      result.push("D");
      num -= 500;
    }
  }

  while (num >= 100) {
    if (num >= 400) {
      result.push("CD");
      num -= 400;
    } else {
      result.push("C");
      num -= 100;
    }
  }

  while (num >= 50) {
    if (num >= 90) {
      result.push("XC");
      num -= 90;
    } else {
      result.push("L");
      num -= 50;
    }
  }

  while (num >= 10) {
    if (num >= 40) {
      result.push("XL");
      num -= 40;
    } else {
      result.push("X");
      num -= 10;
    }
  }

  while (num >= 5) {
    if (num >= 9) {
      result.push("IX");
      num -= 9;
    } else {
      result.push("V");
      num -= 5;
    }
  }

  while (num >= 1) {
    if (num >= 4) {
      result.push("IV");
      num -= 4;
    } else {
      result.push("I");
      num -= 1;
    }
  }

return result.join("");
}
