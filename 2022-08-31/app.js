//8kyu `Convert number to reversed array of digits`

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//P an integer
//R an array
//E 
//P 

function digitize(n) {
    return String(n).split('').reverse().map(item => Number(item));
  }