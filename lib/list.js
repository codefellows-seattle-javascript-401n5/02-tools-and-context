'use strict';

class List {

  constructor() {
    this.length = 0;
  }
  push(element) {
    this[this.length++] = element;
    return this.length;
  }

  pop(element) {
    let remove = this[this.length - 1];
    this.length--;
    if (this.length < 0) return undefined;
    else {
      delete this[this.length];
    }
    return remove;
  }
}
module.exports = List;

