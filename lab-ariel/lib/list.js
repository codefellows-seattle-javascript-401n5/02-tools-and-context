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
    return this[lastIndex];
  }

  forEach(func) {
    let listLength = this.length;
    for (let i = 0; i < listLength; i++) {
      this[i] = func(this[i]);
    }
  }

  map(func) {
    let listLength = this.length;
    let resultList = new List();
    for (let i = 0; i < listLength; i++) {
      resultList.push(func(this[i]));
    }
    return resultList;
  }

  filter(func) {
    let listLength = this.length;
    let resultList = new List();
    const cond = true;
    for (let i = 0; i < listLength; i++) {
      if (func(this[i]) == cond) {
        resultList.push(this[i]);
      }
    }
    return resultList;
  }
}

module.exports = List;