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


  map(func) {
    let mappedList = new List();

    for(let i = 0; i < this.length; i++) {
      mappedList[i] = func(this[i]);
      mappedList.length++;
    }
    if(!func) {
      return undefined;
    }

    return mappedList;
  }


  filter(func) {
    let filteredList = new List();
    let j = 0;
    for(let i = 0; i < this.length; i++) {
      if (func(this[i], i, this)) {
        filteredList[j]  = this[i];
        j++;
        filteredList.length++;
      }
    }
    if(!func) {
      return undefined;
    }

    return filteredList;
  }


  reduce(fun, val) {
    
    if(val === undefined) {
      val = this[0];
      for(let i = 1; i < this.length; i++) {
        val = fun(val, this[i]);
      }
    }else {
      for(let i = 0; i < this.length; i++) {
        val = fun(val, this[i]);
      }
    }

    if(!fun) {
      return undefined;
    }

    return val; 
  }


}

module.exports = List;