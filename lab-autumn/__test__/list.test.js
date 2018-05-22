'use strict';

let List = require('../../lib/list.js');

describe('List Module', () => {

  it('push() returns the updated length of the list', () => {

    let myList = new List();
    myList.push('puppies');

    expect(myList.length).toBe(1);
      
  });

  it('push() adds an element to the end of a list', () => {

    let myList = new List();
    myList.push('puppies');

    expect(myList[0]).toBe('puppies');
  });
  it('pop() should return undefined if the list is empty', () => {

    let myList = new List();

    expect(myList.pop()).toBeUndefined();
  });
  it('pop() removes last element in list', () => {

    let myList = new List();
    myList.push('puppies');
    myList.push('kittens');

    expect(myList.pop()).toBe('puppies');
  });

  it('pop() puts back the last element in the array', () => {
    let myList = new List(); 
    myList.push('puppies');
    myList.push('kittens');

    expect(myList.pop()).toBe('kittens');
  });
  it('forEach should return undefined', () => {
    let myList = new List();
    myList.push('puppies');
    myList.push('kittens');
    myList.push('monkeys');

    expect(myList.forEach()).toBeUndefined();

  });
  

  

});



