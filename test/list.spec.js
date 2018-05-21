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

  it('pop() removes the last item in the array', () => {
    let myList = new List();
    myList.push('one');
    myList.push('two');
    myList.push('three');
    myList.pop(); 

    expect(myList.length).toBe(2);
    
  });


  it('pop() returns the item that was popped off', () => {
    let myList = new List();
    myList.push('one');
    myList.push('two');
    myList.pop();

    expect(myList[0]).toBe('one');
    
  });


  it('forEach() returns undefined', () => {
    let myList = new List();
    myList.push('one');
    myList.push('two');
    expect(myList.forEach(element =>{
      return element;
    })).toEqual(undefined);//?
    
  });

  it('forEach() should apply function to each element', () => {
    let myList = new List();
    let array2 = new List();
    myList.push('one');
    myList.push('two');
    myList.forEach(element =>{
      array2.push(element+3);
    });
    expect(array2[1]).toEqual('two3');
    
  });

  it('map() should apply function to each element in the array, and return adultured new array', () => {
    let myList = new List();
    let newArr = new List();
    myList.push('one');
    myList.push('two');
    myList.map(element =>{
      newArr.push(element+3);
    });
    expect(newArr[1]).toEqual('two3');

  });

  it('map() should apply function to each element in the array, and return unadultured old array', () => {
    let myList = new List();
    let newArr = new List();
    myList.push('one');
    myList.push('two');
    myList.map(element =>{
      newArr.push(element+3);
    });
    expect(myList[1]).toEqual('two');

  });

});












// let source = [1,2,3,4,5,6,7];

// let list = new List(source);
// list.pop(
// source.pop()
// expect(list.toArray()).toEqual(source)

//example
// let list = new List ('apples', 'bananas');
// let babyFoods = list.map(fruit => fruit + 'sauce');
//expect(babyFoods.toArray()).toEqual(['apple sauce', 'banana sauce']);
