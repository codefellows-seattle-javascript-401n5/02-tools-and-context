'use strict'

let List = require('../lib/list');

describe('List Module', () => {

    it('push() returns the length of the altered list', () => {

        let myList = new List();
        myList.push('sushi');

        expect(myList.length).toBe(1);
    });

    it('pops() removes an element from the list', () => {
        let myList = new List()
        myList.push('sushi');
        myList.pop();

        expect(myList.length).toBe(0)
    });

    it('filter() returns a new array with the elements that have passed requirements', () => {
        let myList = ['sushi', 'pizza', 'length', 'basketball'];
        let newList = myList.filter(word => word.length > 5);
        console.log(newList);

        expect(newList.length).toBe(2)
    })

    it('reduce() runs a function against an accumulator to return a single value', () => {
        let array = [1, 2, 3, 4];
        let reducer = (accumulator, currentValue) => accumulator + currentValue;

        let results = array.reduce(reducer);

        expect(results).toBe(10);
    })

})