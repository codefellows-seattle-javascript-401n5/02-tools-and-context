'use strict';

let List = require ('../lib/list.js');

describe('List Modules', () => {

  it('push(), returns the updated length of array', () => {

    let myList = new List();
    myList.push('one');

    expect(myList.length).toBe(1);

  });
  it('push(), adds an element to the list', () => {
    let myList = new List();
    myList.push('one');
    // myList.push('two');
    
    expect(myList[myList.length - 1]).toEqual('one');
    
  });

  it('pop() should return undefined if the list is empty', () => {

    let myList = new List();

    expect(myList.pop()).toBeUndefined();
  });

  it('pop(), removes the last element of the list', () => {

    let myList = new List();
    myList.push('one');
    myList.push('two');

    expect(myList.pop()).toEqual('two');

  });

  it('pop(), returns the element to the list', () => {

    let myList = new List();
    myList.push('one');
    myList.push('two');

    expect(myList.pop()).toEqual('two');

  });
});

