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

  // pop() {
  //   let remove = this[this.length - 1];
  //   this.length--;
  //   if (this.length < 0) return undefined;
  //   else {
  //     delete this[this.length];
  //   }
  //   return remove;
  // }
}

module.exports = List;