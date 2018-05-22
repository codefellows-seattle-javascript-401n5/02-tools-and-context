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

  it('forEach() takes a function as a parameter and applies it to each item in the List', () => {
    let testList = new List(['Brian', 'Ariel']);
    let expectedList = new List(['Hi Brian', 'Hi Ariel']);
    function sayHi(item) {
      return `Hi ${item}`;
    }
    testList.forEach(sayHi);

    expect(testList).toEqual(expectedList);
      
  });

  it('map() takes a function as a parameter and applies it to each item in the List, putting that item in a new list', () => {
    let testList = new List(['wow', 'cool']);
    let expectedList = new List(['wow!', 'cool!']);
    function exclaim(item) {
      return `${item}!`;
    }

    expect(testList.map(exclaim)).toEqual(expectedList);
      
  });

  it('filter() creates a new list with all items that past the test implemented by the function it takes', () => {
    let testList = new List([3, 237, 25, 8]);
    let expectedList = new List([237, 25]);
    function big(item) {
      if (item > 10) {
        return true;
      }
      else {
        return false;
      }
    }

    expect(testList.filter(big)).toEqual(expectedList);
      
  });

});