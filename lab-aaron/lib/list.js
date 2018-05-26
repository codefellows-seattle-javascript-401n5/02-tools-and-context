'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(item) {
    this[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    this.length--;
    return this.length;
  }

  filter() {
    return this.length;
    // return newList;
    // console.log(newList);
  }

  reduce(item) {
    return item;
  }

  forEach(item) {
    return item;
  }
}
module.exports = List;