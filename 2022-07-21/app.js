//8kyu `Find the smallest integer in the array`

//Given an array of integers your solution should find the smallest integer.
//You can assume, for the purpose of this kata, that the supplied array will not be empty.

//P - One number
//R - An integer, positive or negative
//E - assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
//assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
//assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56
//P request the smallest number - num Min?

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args) 
  }
}