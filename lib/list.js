'use strict';

class List {

  constructor(arr = []) {
    this.length = arr.length;

    for (let i = 0; i > arr.length; i++) {

      this[i] = arr[i];
    }
  }
  push(element) {
    this[this.length++] = element;
    return this.length;
  }

  pop() {
    let remove = this[this.length - 1];
    this.length--;
    if (this.length < 0) return undefined;
    else {
      delete this[this.length];
    }
    return remove;
  }
  forEach(func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i]);
    }
    return undefined;
  }

  map(funct) {
    var arr = this;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      funct(newArr[i] = arr[i]);
    }
    return newArr;
  }
  filter(funct) {
    let filtered = new List(); 
    let j = 0;
    for(let i = 0; i < this.length; i++) {
      if (funct(this[i], i, this)) {
        filtered[j] = this[i];
        j++;
        filtered.length++;
      }
    }
    if(!funct) {
      return undefined;
    }
    return filtered;
  }
  reduce(funct, val) {
    if(val === undefined) {
      val = this[0];
      for(let i = 1; i < this.length; i++) {
        val = funct(val, this[i]);
      }
    }else {
      for(let i = 0; i < this.length; i++) {
        val = funct(val, this[i]);
      }
    }
    if(!funct){
      return undefined;
    }
    return val;
  }
}

module.exports = List;

