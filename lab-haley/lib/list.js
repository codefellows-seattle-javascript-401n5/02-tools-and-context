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

  map(execute){
    let newArr = [];
    for(let i=0; i < this.length; i++){
      newArr[i] = execute(this[i]);
    }
    return newArr;
  }

  // The filter() method creates a new array with all elements that pass the test implemented by the provided function.

  filter(execute){
    let newArr = [];
    for(let i=0; i < this.length; i++){
      if(execute(this[i]) === true){
        newArr[i] = (this[i]);
      }
    }
    return newArr;
  }
}

module.exports = List;