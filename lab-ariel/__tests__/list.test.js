'use strict';

let List = require('../lib/list.js');

describe('List Module', () => {

  it('push() returns the updated length of the list', () => {

    let animalList = new List();
    animalList.push('cat');

    expect(animalList.length).toBe(1);
      
  });

  it('push() adds an element to the list', () => {

    let animalList = new List(['dog']);
    animalList.push('cat');

    expect(animalList.length).toEqual(2);
    

  });

  it('pop() decreases the array length by one', () => {

    let colorList = new List(['blue','red','green']);
    colorList.pop();

    expect(colorList.length).toBe(2);
      
  });

  it('pop() removes and returns the last item in the array', () => {
    let expectedList = new List (['blue','red']);
    let colorList = new List(['blue','red','green']);
    colorList.pop();

    expect(colorList).toEqual(expectedList);
      
  });

});