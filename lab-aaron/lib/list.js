'use strict'

class List {
    constructor(){
        this.length = 0;
    }

    push(item){
        this.length++;
        return this.length;
    }

    pop(item){
        this.length--;
        return this.length;
    }

    filter(item){
        return this.length;
    }

    reduce(item){
        
    }
}
module.exports = List;