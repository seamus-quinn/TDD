const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const mergeSort = require('./../lib/mergesort');
const arrayGenerator = require('./../lib/array-generator');
const newArray = arrayGenerator(10);

describe('Merge Sort', function () {

  it('should be a function', function () {
    assert.isFunction(mergeSort)
  });

  it('should return an array of equal length', function () {
    let sortedArray = mergeSort(newArray);

    assert.equal(sortedArray.length, newArray.length)
  })

  it('should sort an array of numbers from smallest to largest', function () {
    let sortedArray = mergeSort(newArray);

    assert.deepEqual(sortedArray, newArray.sort((a, b) => a - b))
  })

  it('should be able to sort letters', function () {
    let lettersArray = ['d', 't', 'w', 'u', 'z', 'a'];

    mergeSort(lettersArray);

    assert.deepEqual(mergeSort(lettersArray), ['a', 'd', 't', 'u', 'w', 'z']);
  })

})