function repeatStringNumTimes(str, num) {
  let result = '';
  if (num <= 0) { return '' }
  else {
    while (num > 0) {
      result += str;
      num--
    } return result
  }
}

repeatStringNumTimes("abc", 3);