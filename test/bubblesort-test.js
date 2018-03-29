const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const bubbleSort = require('./../lib/bubblesort');
const arrayGenerator = require('./../lib/array-generator');
const newArray = arrayGenerator(20000);


describe('Bubble Sort', function() {

  it('should be a function', function() {
    assert.isFunction(bubbleSort)
  });

  it('should return an array of equal length', function() {
    let sortedArray = bubbleSort(newArray);

    assert.equal(sortedArray.length, newArray.length)
  })

  it('should sort an array of numbers from smallest to largest', function() {
    let sortedArray = bubbleSort(newArray);

    assert.deepEqual(sortedArray, newArray.sort((a, b) => a - b))
  })

  it('should be able to sort letters', function() {
    let lettersArray = ['d', 't', 'w', 'u', 'z', 'a'];

    bubbleSort(lettersArray);

    assert.equal(bubbleSort(lettersArray), lettersArray.sort());
  })

})