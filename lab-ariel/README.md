[![Build Status](https://travis-ci.com/stariel/02-tools-and-context.svg?branch=master)](https://travis-ci.com/stariel/02-tools-and-context)

**02: Tools and Context**

This function uses the ES6 "class" method to create a List, which is an object with similar properties to an array.

The list class created here has several built-in methods similar to arrays.

    push() has an arity of one. It adds an element to the list and returns the updated length of the list.

    pop() has an arity of zero. It removes and returns the last item in the array and decreases the array length by one.

    forEach() has an arity of one. It takes a function as a parameter and applies it to each item in the List. If the parameter is not a function, it returns null.

    map() has an arity of one. It takes a function as a parameter and applies it to each item in the List, putting that item in a new list. If the parameter is not a function, it returns null.

    filter() has an arity of one. It creates a new list with all items that pass the test implemented by the function it takes. If the parameter is not a function, it returns null.

    reduce() has an arity of one. It applies a function to each item in the list and an accumulator, returning a single value. If the parameter is not a function, it returns null.