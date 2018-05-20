'use strict';

class List {

  constructor(array = []) {
    this.length = array.length;
    for (let i = 0; i < array.length; i++) {
      this[i] = array[i];
    }
  }

  push(item) {
    this[this.length++] = item;
    return this.length;
  }

  pop() {
    let lastIndex = (this.length -1);
    delete this[lastIndex];
    this.length--;
    return this.length;
  }

//   toArray() {
//     let array = [];
//     for (let i = 0; i < array.length; i++) {
//       array[i] = this[i];
//     }
//     return array;  
//   }
}

module.exports = List;