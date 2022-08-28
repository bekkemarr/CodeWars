//8kyu `Invert values`

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//P 
//R 
//E 
//P 

function invert(array) {
    var res = array.map(function(num){
      return -num;
      });
    return res;
 }