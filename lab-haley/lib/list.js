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
    if (!this.length) {
      return undefined;
    }
    const toRemove = this[this.length - 1];
    delete this[this.length - 1];
    this[this.length--];
    return toRemove;
  }

  forEach(execute) {
    for (let i = 0; i < this.length; i++) {
      execute(this[i]);
    }
    return undefined;
  }

  map(execute) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr[i] = execute(this[i]);
    }
    return newArr;
  }

  filter(execute) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      if (execute(this[i]) === true) {
        newArr[i] = (this[i]);
      }
    }
    return newArr;
  }

  reduce(executer, initialValue) {

    if (initialValue === undefined) {
      initialValue = this[0];

      for (let i = 0; i < this.length - 1; i++) {
        initialValue = executer(initialValue, this[i + 1]);
      }

    } else {
      for (let i = 0; i < this.length; i++) {
        initialValue = executer(initialValue, this[i]);
      }
    }
    return initialValue;
  }
}

module.exports = List;