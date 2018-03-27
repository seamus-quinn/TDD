const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const bubbleSort = require('./../lib/bubblesort');
const arrayGenerator = require('./../lib/array-generator');
const newArray = arrayGenerator(10);


describe('Bubble Sort', function() {

  it('should be a function', function() {
    assert.isFunction(bubbleSort)
  });

  it('should return an array of equal length', function() {
    let sortedArray = bubbleSort(newArray);

    assert.equal(sortedArray, newArray)
  })

  it('should sort an array of numbers from smallest to largest', function() {
    let sortedArray = bubbleSort(newArray);

    assert.equal(sortedArray, newArray.sort())
  })

  it('should be able to sort letters', function() {
    let lettersArray = ['d', 't', 'w', 'u', 'z', 'a'];

    bubbleSort(lettersArray);

    assert.equal(bubbleSort(lettersArray), lettersArray.sort());
  })

})