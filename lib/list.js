'use strict';

class List {
  
  constructor() {
    this.length = 0
  }
  push(item) {
    this.length++;
    return this.length;
  }

}

module.exports = List;