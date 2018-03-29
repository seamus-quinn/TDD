const mergeSort = array => {
  //base case
  if (array.length === 1) {
    return array;
  }
  let divideLine = Math.ceil(array.length / 2);
  let leftArray = array.slice(0, divideLine);
  let rightArray = array.slice(divideLine);

  return sort(mergeSort(leftArray), mergeSort(rightArray));
}

const sort = (leftArr, rightArr) => {
  let newArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      newArr.push(leftArr.shift())
    } else {
      newArr.push(rightArr.shift())
    }
  }
  return [...newArr, ...leftArr, ...rightArr];
}

module.exports = mergeSort;