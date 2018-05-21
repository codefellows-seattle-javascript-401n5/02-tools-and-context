# Code Fellows 401n5 - Lab 02: Tools and Context
[![Build Status](https://travis-ci.com/hjmendoza/02-tools-and-context.svg?branch=lab-haley)](https://travis-ci.com/hjmendoza/02-tools-and-context)

## List Module
  * implemented a List constructor using a class containing various array methods. Completed without using any built-in methods.
  * `push()` has an airty of 1. Expects elements to add to the end of the array. Returns the new length of the array.
  * `pop()` has an airty of 0. Expects an element to remove from the end of an array. Returns the removed element and changes the length of the array. Returns `undefined` if the array is empty.
  * `forEach()` has an airty of 1. Expects a callback function to execute for each element in ascending order. Callback is invoked with element value, element index, and the array being traversed. Returns the value `undefined`.
  * `map()` has an airty of 1. Expects a callback function to execute onece for each element in an array, in order. Callback is invoked with: the value of the element, the index of the element, and the Array object being traversed. Returns a new array, constructed from the results. 
  * `filter()` has an airty of 1. Expects a callback function to execute once for each element in an array. Callback is invoked with: the value of the elment, theh index of the lement, and the Array object being traveresed. Returns a new array of all the values for which callback returns a value that is true.
  * `reduce()` has an airty of 1. Expect a callback function to execute once for each element presen tin the array. This function takes four arguments: accumulator, current value, current index,and array. Returns the value that results from the reduction.
  * NodeJS module in the __test__/ directory named list.test.js asserts the correctness of the list module.

 