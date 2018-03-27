function insertionSort(array) {
  if (!array.length) {
    return;
  }

  let number = array.shift();
  sortedArray.unshift(number);

  for (let j = 0; j < sortedArray.length; j++) {
    if (sortedArray[j - 1] > sortedArray[j]) {
      [sortedArray[j - 1], sortedArray[j]] = [sortedArray[j], sortedArray[j - 1]];
    } else if (sortedArray[j - 1] < sortedArray[j]) {
      break;
    }
    console.log(sortedArray)
    console.log('--------')
  }

  return insertionSort(array)
}

module.exports = {
  insertionSort
}