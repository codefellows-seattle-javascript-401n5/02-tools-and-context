'use strict';

class List {
    constructor() {
      this.length = 0;
    }
    push(item) {
      this[this.length++] = item;
      this.length;
    } 
    pop() {
      this[this.length--];
      delete this[this.length];
      return this;
      }
   
    forEach(func) {
        for(let i = 0; i < this.length; i++) {
          func(this[i]);
        }
        return undefined;
      }
    }

    // toArray() {

    //   let array = [];

       //start at zero, end at length

    //   for (let i = 0; i < this.length; i++) {

    //       array[i] = this[i];
    //   }

//       return array;

    module.exports =List;


