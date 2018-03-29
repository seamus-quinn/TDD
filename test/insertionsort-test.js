const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const insertionSort = require('./../lib/insertionsort');
const arrayGenerator = require('./../lib/array-generator');
const newArray = arrayGenerator(10);

describe('Insertion Sort', function () {

  it('should be a function', function () {
    assert.isFunction(insertionSort)
  });

  it('should return an array of equal length', function () {
    let sortedArray = insertionSort(newArray);

    assert.equal(sortedArray.length, newArray.length)
  })

  it('should sort an array of numbers from smallest to largest', function () {
    let sortedArray = insertionSort(newArray);

    assert.deepEqual(sortedArray, newArray.sort((a, b) => a - b))
  })

  it('should be able to sort letters', function () {
    let lettersArray = ['d', 't', 'w', 'u', 'z', 'a'];

    insertionSort(lettersArray);

    assert.deepEqual(insertionSort(lettersArray), ['a', 'd', 't', 'u', 'w', 'z']);
  })

})