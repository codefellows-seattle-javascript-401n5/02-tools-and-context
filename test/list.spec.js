'use strict';

let List = require ('../lib.list.js');

describe('List Modules', () => {

  it('push(), returns the updated length of array', () => {

    let myList = new List();
    myList.push("foo");

    expect(myList.length).toBe(1);

  });
  it('push(), adds an element to the list', () => {

    
  });
});