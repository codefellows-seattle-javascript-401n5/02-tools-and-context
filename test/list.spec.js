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
    })).toEqual(undefined);
    
  });

  it('forEach() applies function to each element', () => {
    let myList = new List();
    let array2 = new List();
    myList.push('one');
    myList.push('two');
    myList.forEach(element =>{
      array2.push(element+3);
    });
    
    expect(array2[1]).toEqual('two3');
    
  });

  it('map() applies function to each element in the array, and returns new array', () => {
    let myList = new List();
    let newArr = new List();
    myList.push('one');
    myList.push('two');
    myList.map(element =>{
      newArr.push(element+3);
    });

    expect(newArr[1]).toEqual('two3');

  });

  it('map() applies function to each element in the array, and returns clean old array', () => {
    let myList = new List();
    let newArr = new List();
    myList.push('one');
    myList.push('two');
    myList.map(element =>{
      newArr.push(element+3);
    });

    expect(myList[1]).toEqual('two');

  });
  it('filter() returns a new list', () => {
    let myList = new List();
    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.push(4);
    

    let input = myList.filter(element => element % 2 === 0);

    expect(input).toEqual({'0': 2, '1': 4, 'length': 2});
    
  });

  it('filter() keep the original array', () => {
    let myList = new List();
    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.push(4);
    myList.filter(element => element % 2 === 0);


    expect(myList).toEqual({'0': 1, '1': 2, '2': 3, '3': 4, 'length': 4});
  });

  it('filter() returns undefined if empty', () => {
    let myList = new List();
   
    expect(myList.filter('')).toBeUndefined();
  });
  it('reduce() should reduce the array to a single value and start index at 0', () => {
    let myList = new List();
    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.push(4);
    

    let input = myList.reduce((acc, curr) => acc + curr);

    expect(input).toEqual(10);
  });

  it('reduce() should reduce the array to a single value and start at the value provided', () => {
    let myList = new List();
    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.push(4);
    
    let input = myList.reduce((acc, curr) => acc + curr,10);


    expect(input).toEqual(20);
  });


  it('reduce() should reduce the array to a single value and should also work with a string', () => {
    let myList = new List();
    
    myList.push('hello');
    myList.push('world');
    
    let input = myList.reduce((acc, curr) => acc + ' ' + curr);

    expect(input).toEqual('hello world');
  });

  it('reduce() returns undefined if empty', () => {
    let myList = new List();
   
    expect(myList.reduce('')).toBeUndefined();
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
