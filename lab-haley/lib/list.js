'use strict';

class List{
  constructor(){
    this.length = 0;
  }

  push(item){
    this[this.length++] = item;
    return this.length;
  }

  pop(){
    if(!this.length){
      return undefined;
    }
    const toRemove = this[this.length-1];
    delete this[this.length-1];
    this[this.length--];
    return toRemove;
  }

  forEach(execute){
    for(let i=0; i < this.length; i++){
      execute(this[i]);
    } 
    return undefined;
  }

  // The map() method creates a new array with the results of calling a provided function on every element in the calling array.
  map(execute){
    let newArr = [];
    for(let i=0; i < this.length; i++){
      newArr[i] = execute(this[i]);
    }
    return newArr;
  }
}

module.exports = List;