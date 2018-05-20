'use strict';

class List {

  constructor() {
    this.length = 0;
  }

  push(item) {
    this[this.length++] = item;
    return this.length;
  }

  pop() {
    let remove = this[this.length - 1];

    this.length--;

    if(this.length < 0) {
      return undefined;
    }
    else {
      delete this[this.length];
    }

    return remove;
  }


  forEach(func) {
    for(let i = 0; i < this.length; i++) {
      func(this[i]);
    }
    return undefined;
  }

}

// this[++this.length] = item;

module.exports = List;