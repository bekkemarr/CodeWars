//7kyu `Sum of Array Singles`

//In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
//For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

//P An array
//R A single integer
//E describe("Basic tests", function(){
//Test.assertEquals(repeats([4,5,7,5,4,8]),15);
//Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
//Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
//Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
//Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);
//});
//P Filter for duplicates, and reduce whatever hasn't been filtered
// Filter for duplicates -- give the "if lastIndex of === indexOf", then reduce, and then sum those items
//Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
//Filter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
//indexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
//lastIndexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

// function repeats(arr){

// };

// LESSON LEARNED: The order of the methods you need to do is a good way to scope out what should be wrapped OR chained in what

// let arr = [3,5,4,4,5,2,7]

// let noRepeats = arr.reduce((acc, c) => {
//         return arr.indexOf(acc) !== i
// })

// const repeats = arr => (arr.reduce((acc, c) => 
//     if (repeats.indexOf === repeats.lastIndexOf) ? : 

// ))

const repeats = arr => {
    //check the index of from the beginning and comparing 
    //check the last index and keeps iterating to the first index
    //add the elements that appears only once in the array
    return arr.filter( (num, _, noDuplicatesArr) => {                       // Param1 is always the element, param2 is always the index, param3 is always the whole array, so because I'm not using param2 AKA the index, I can replace "i" with "_"
        noDuplicatesArr.indexOf(num) === noDuplicatesArr.lastIndexOf(num)}  //reduce is just another loop - you could write it as a for loop but like..bigger
    ).reduce((prev,curr)=> prev + curr, 0) // the accumulator, and the current value -- previously shown as "a" and "b" which are not great param names
  };

  const repeats2 = arr => {
    //check the index of from the beginning and comparing 
    //check the last index and keeps iterating to the first index
    //add the elements that appears only once in the array
    return arr.filter(num => {                       // We don't even use params 2 and 3
      arr.indexOf(num) === arr.lastIndexOf(num); //put spaces around your arrows too! YOU WHORE.
    }).reduce((prev, curr) => prev + curr, 0); //put spaces after your parameters! YOU WHORE.
  };                         //learn to use semi-colons appropriately! YOU WHORE.