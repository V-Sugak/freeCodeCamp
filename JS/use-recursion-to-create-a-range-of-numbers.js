function rangeOfNumbers(startNum, endNum) {

  if (startNum === endNum) {
    return [startNum];
  } else {
    var counterArr = rangeOfNumbers(startNum, endNum - 1);
    counterArr.push(endNum);
    return counterArr;
  }
};