'use strict';

let List = require('../lib/list.js');


describe('list module', () => {
  // push 
  it('push should return the updated length of the list', () =>{
    let myList = new List();
    myList.push('FOO');
    myList.push('BAR');

    expect(myList.length).toBe(2);
  });

  it('push should add an element to the end of the list', () => {
    let myList = new List();
    myList.push('BAZ');

    expect(myList[myList.length -1]).toBe('BAZ');
  });

  // pop 
  it('pop should return undefined if length is 0', () => {
    let myList = new List();
    myList.length = 0;
    expect(myList.pop()).toBeUndefined;

  });

  it('pop should remove the last element of the list', () => {
    let myList = new List();
    myList.push('FOO');
    myList.push('BAR');
    myList.push('BAZ');
    myList.pop();

    expect(myList.length).toBe(2);
  });

  it('pop should return the removed element', () => {
    let myList = new List();
    myList.push('FOO');
    myList.push('BAR');
    myList.push('BAZ');

    expect(myList.pop()).toBe('BAZ');
  });

  // forEach 
  it('forEach should return return undefined', () => {
    let myList = new List();
    myList.push('FOO');
    myList.push('BAR');
    myList.push('BAZ');

    expect(myList.forEach(element =>{
      return element;
    })).toBeUndefined;

  });

  it('forEach should execute a function once for each element', () => {
    let myList = new List();
    let newArr = new List();
    myList.push('FOO');
    myList.push('BAR');
    myList.forEach(element => {
      newArr.push(element + ' has been reached');
    });
    expect(newArr[1]).toBe('BAR has been reached');
  });

  // map
  it('map should execute a function once for each element', () => {
    let myList = new List();
    myList.push(1);
    myList.push(2);
    myList.push(3);

    let mapList = myList.map(element => {
      return element * 2;
    });

    for(let i = 0; i < mapList.length; i++) {
      expect(mapList[i]/2).toBe(myList[i]);
    }
  });

  it('map should return a new array with results of the function', () => {
    let myList = new List();
    myList.push(1);
    myList.push(2);
    myList.push(3);

    let mapList = myList.map(element => {
      return element * 2;
    });

    expect(Array.isArray(mapList)).toBe(true);
  });

  
});