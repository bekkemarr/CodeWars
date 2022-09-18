//8kyu `Basic Mathematical Operations`

  // Code
  
  //p - operation, and then two numbers (value1,value2)
  //r - the two numbers against that first operation
  //e ('+', 4, 7) --> 11
  //  ('-', 15, 18) --> -3
  //  ('*', 5, 5) --> 25
  //  ('/', 49, 7) --> 7
  //p - recognize the operation, find the syntax for sum, and put in val1 and val2. Change the operation, uh, what's the word, character and you go onto that again for each different operation - whatever the syntax is
  
  function basicOp(operation, value1, value2){
    if(operation === '+'){
      return value1 + value2
    } else if (operation === '-'){
      return value1 - value2
    } else if (operation === '/'){
      return value1 / value2
    } else if (operation === '*'){
      return value1 * value2}
  } 