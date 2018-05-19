'use strict';

class List {
  
  constructor() {
    this.length = 0;
  }
  push(element) {
    this[this.length++] = element;
    return this.length;
  }

//   pop(element) {
//     this.length++;
//     return this.length;
//   }
}

module.exports = List;