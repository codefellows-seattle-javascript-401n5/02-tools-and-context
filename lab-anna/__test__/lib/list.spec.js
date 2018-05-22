'use strict';

let List = require('../../lib/list.js');

describe('List Module', () => {

  it('push() returns the length of the list', () => {

    let myList = new List();
    
    myList.push('FOO');

    expect(myList.length).toBe(1);
  });

  it('push() adds an element to the end of a list', () => {

    let myList = new List();
    myList.push('FOO');

    expect(myList[0]).toBe('FOO');
  });

  it('pop() should return undefined if the list is empty', () => {

    let myList = new List();

    expect(myList.pop()).toBeUndefined();
  });


  it('pop() removes an element from the end of a list', () => {

    let myList = new List();
    myList.push('a');
    myList.push('b');

    expect(myList.pop()).toBe('b');
  });

  it('forEach() function should return undefined', () => {

    let myList = new List();
    myList.push('aa');
    myList.push('bb');

    expect(myList.forEach(ele => {
      undefined;
      return ele;
    })).toEqual(undefined);
  });

  it('forEach() should apply the function and add to the list', () => {

    let myList = new List();
    let arr2 = new List;
    
    myList.push('aa');
    myList.push('be');
    myList.forEach(ele => {
      arr2.push(ele + 'e');
    });
    

    expect(arr2[1]).toEqual('bee');
  });


  it('map() function should apply a function to every element and return a new changed list', () => {

    let myList = new List();

    myList.push('1');
    myList.push('2');
    myList.push('3');
    myList.push('4');

    let input = myList.map(ele => ele * 2);

    expect(input).toEqual({'0': 2, '1': 4, '2': 6, '3': 8, 'length': 4});
  });


  it('map() function should apply a function to every element and keep original array untouched', () => {

    let myList = new List();

    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.push(4);

    myList.map(ele => ele * 2);

    expect(myList[2]).toEqual(3);
  });


  it('map() function should return undefined if the input is empty', () => {

    let myList = new List();

    expect(myList.map('')).toBeUndefined();
  });


  it('filter() should return a new list which passes all the tests the function performs on the list', () => {

    let myList = new List();

    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.push(4);

    let input = myList.filter(ele => ele % 2 === 0);

    expect(input).toEqual({'0': 2, '1': 4, 'length': 2});
  });


  it('filter() function should keep original array untouched', () => {

    let myList = new List();

    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.push(4);

    myList.map(ele => ele % 2 === 0);

    expect(myList).toEqual({'0': 1, '1':2, '2': 3, '3': 4, 'length': 4});
  });


  it('filter() function should return undefined if the input is empty', () => {

    let myList = new List();

    expect(myList.filter('')).toBeUndefined();
  });


  it('reduce() should apply a function to each element in the list and reduce it to a single value, and start at index 0', () => {

    let myList = new List();

    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.push(4);

    let input = myList.reduce((acc, curr) => acc + curr);

    expect(input).toEqual(10);
  });


  it('reduce() should apply a function to each element in the list and reduce it to a single value, and start at the index provided', () => {

    let myList = new List();

    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.push(4);

    let input = myList.reduce((acc, curr) => acc + curr, 10);

    expect(input).toEqual(20);
  });


  it('reduce() should apply a function to each element in the list including and reduce it to a single value', () => {

    let myList = new List();

    myList.push('hello');
    myList.push('world');

    let input = myList.reduce((acc, curr) => acc + ' ' + curr);

    expect(input).toEqual('hello world');
  });


  it('reduce() function should return undefined if the input is empty', () => {

    let myList = new List();

    expect(myList.reduce('')).toBeUndefined();
  });

});



