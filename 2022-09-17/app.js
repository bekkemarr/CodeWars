//7kyu `Descending Order`

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//P a single positive integer
//R a single positive integer
//E Input: 42145 Output: 54421; Input: 123456789 Output: 987654321
//P sort the integer so that the return is sorted from the highest integer to the lowest (0 is low).
//  First stringify the number, then split. Sort. Reverse. Then join.
// use parseInt() -> "The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN."
// https://www.youtube.com/watch?v=Cda9N6C7l6Y <- explains parseInt

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }