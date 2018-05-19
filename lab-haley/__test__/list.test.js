'use strict';

let List = require('../lib/list.js');
let myList = new List();

describe('list module', () => {
  it('push should return the updated length of the list', () =>{

    myList.push('FOO');

    expect(myList.length).toBe(1);
  });

  it('push should add an element to the end of the list', () => {

    myList.push('BAZ');

    expect(myList[myList.length - 1]).toBe('BAZ');
  });
});