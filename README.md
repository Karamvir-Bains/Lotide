# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @karamvir-bains/lotide`

**Require it:**

`const _ = require('@karamvir-bains/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Takes in an array and returns the first element in the array.
* `tail(array)`: Takes in an array and returns everything but the first element in the array.
* `eqArrays(array1, array2)`: Reclusively checks both arrays and returns true if they match or false if they don't.
* `without(array1, array2)`: Takes in 2 arrays, an original array (array1) and an array with items to remove (array2). Returns a new array with all the original values excluding the removed values.
* `flatten(array)`: Takes in an array that has nested arrays, and returns an array with all the same values but no nested arrays.
* `middle(array)`: Takes in an array and returns elements that are closest to the middle of an array.
* `countOnly(array, object)`: Takes in an object and counts the number of times a given object value appears in the array and returns an object of those counted values, if the value was not in the array returns undefined for the key value.
* `countLetters(string)`: Takes in a string and returns a object with an count of each letter in the string
* `letterPositions(string)`: Takes in a string, and returns an array of indexes for each letter in an object
* `findKeyByValue(object, value)`: Takes in an object and a value, if the value is associated with a key it returns the key, otherwise undefined
* `eqObjects(object1, object2)`: Reclusively checks if both objects have identical keys with identical values. Returns true if they match or false if they don't.
* `map(array, callback)`: Takes in an array, loops through each item and applies the callback function requirements. Returns an array with the changes.
* `takeUntil(array, callback)`: Takes in an array, and returns everything in the array until callback function returns false.
* `findKey(object, callback)`: Takes in an object and a callback. If the callback function returns true return the associated key, otherwise undefined.