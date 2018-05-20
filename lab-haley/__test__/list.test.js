'use strict';

let List = require('../lib/list.js');
let myList = new List();

describe('list module', () => {
  // push 
  it('push should return the updated length of the list', () =>{

    myList.push('FOO');
    myList.push('BAR');

    expect(myList.length).toBe(2);
  });

  it('push should add an element to the end of the list', () => {
    myList.push('BAZ');

    expect(myList[myList.length -1]).toBe('BAZ');
  });

  // pop 
  it('pop should return undefined if length is 0', () => {
    
    myList.length = 0;
    expect(myList.pop()).toBeUndefined;

  });

  it('pop should remove the last element of the list', () => {
    myList.push('FOO');
    myList.push('BAR');
    myList.push('BAZ');
    myList.pop();

    expect(myList.length).toBe(2);
  });

  it('pop should return the removed element', () => {
    myList.push('FOO');
    myList.push('BAR');
    myList.push('BAZ');

    expect(myList.pop()).toBe('BAZ');
  });

  // forEach 
  it('forEach should return return undefined', () => {
    myList.push('FOO');
    myList.push('BAR');
    myList.push('BAZ');

    expect(myList.forEach(element =>{
      return element;
    })).toBeUndefined;

  });

  it('forEach should execute a function once for each element', () => {
    let newArr = new List();
    myList.push('FOO');
    myList.push('BAR');
    myList.forEach(element => {
      newArr.push(element + ' has been reached');
    });
    expect(newArr[1]).toBe('BAR has been reached');
  });

});