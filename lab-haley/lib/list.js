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

  // forEach() method executes a provided function once for each array element. Return value is undefined.
  forEach(execute){
    for(let i=0; i < this.length; i++){
      execute(this[i]);
    } 
    return undefined;
  }
}

module.exports = List;