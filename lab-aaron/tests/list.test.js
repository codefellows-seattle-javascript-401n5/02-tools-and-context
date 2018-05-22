'use strict';

let List = require('../lib/list');

describe('List Module', () => {
  it('push() returns the length of the altered list', () => {
    let myList = new List();
    myList.push('sushi');

    expect(myList.length).toBe(1);
  });

  it('push() adds to end of list', () => {
    let myList = new List();
    myList.push('sushi');

    expect(myList[0]).toBe('sushi');
  });

  it('push() adds to end of list', () => {
    let myList = new List();
    myList.push('sushi');
    myList.push('apple');

    expect(myList[1]).toBe('apple');
  });

  it('pops() removes an element from the list', () => {
    let myList = new List();
    myList.push('sushi');
    myList.pop();

    expect(myList.length).toBe(0);
  });

  it('filter() returns a new array with the elements that have passed requirements', () => {
    let myList = ['sushi', 'pizza', 'length', 'basketball'];
    let newList = myList.filter(word => word.length > 5);
    console.log(newList);

    expect(newList.length).toBe(2);
  });

  it('reduce() runs a function against an accumulator to return a single value', () => {
    // let myList = new List();

    // myList.push(1);
    // myList.push(2);
    // myList.push(3);
    // myList.push(4);
    // console.log(myList);

    let array1 = [1, 2, 3, 4];

    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    let results = array1.reduce(reducer);
    console.log(results);

    expect(results).toBe(10);
  });

  it('forEach() method executes a provided function once for each array element.', () => {
    let myArray = [1, 2, 3, 4];

    let newArray = myArray.forEach(function(element) {
      console.log(element);
    });
    console.log(newArray);

    expect(newArray).toBe(undefined);
  });

  it('map() method creates a new array with the results of calling a provided function on every element in the calling array.', () => {
    let myArray = [1];

    let newArray = myArray.map(x => x * 23);

    expect(newArray).toEqual([23]);
  });
});
