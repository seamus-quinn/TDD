const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const quickSort = require('./../lib/quicksort');
const arrayGenerator = require('./../lib/array-generator');
const newArray = arrayGenerator(10000);

describe('Quick Sort', function () {

  it('should be a function', function () {
    assert.isFunction(quickSort)
  });

  it('should return an array of equal length', function () {
    let sortedArray = quickSort(newArray);

    assert.equal(sortedArray.length, newArray.length)
  })

  it('should sort an array of numbers from smallest to largest', function () {
    let sortedArray = quickSort(newArray);

    assert.deepEqual(sortedArray, newArray.sort((a, b) => a - b))
  })

  it('should be able to sort letters', function () {
    let lettersArray = ['d', 't', 'w', 'u', 'z', 'a'];

    quickSort(lettersArray);

    assert.deepEqual(quickSort(lettersArray), ['a', 'd', 't', 'u', 'w', 'z']);
  })

})