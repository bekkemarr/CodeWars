//8kyu `Reversed Words`

//Complete the solution so that it reverses all of the words within the string passed in.

//P String
//R Return a the string in reverse (not totally reverse, just reverse order)
//E "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
//P take a string -> array, split and join, then re-return as a string

function reverseWords(str){
    return str.split(" ").reverse().join(" ")
  }