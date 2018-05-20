'use strict';

let List = require('../lib/list.js');
let myList = new List();

describe('list module', () => {
  it('push should return the updated length of the list', () =>{

    myList.push('FOO');
    myList.push('BAR');

    expect(myList.length).toBe(2);
  });

  it('push should add an element to the end of the list', () => {
    myList.push('BAZ');

    expect(myList[myList.length -1]).toBe('BAZ');
  });

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
});