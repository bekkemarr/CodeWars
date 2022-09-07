//8kyu `Fake Binary`

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string

//P string
//R string
//E '45385593107843568'=>'01011110001100111'
//P turn the string into an array -> if <5, 0, if >5, 1 -> join and re-string

function fakeBin(x){
    let binary = '';
    for(let i = 0; i < x.length; i++){
      (x[i] < 5) ? binary += 0 : binary += 1;
    }
    return binary;
  }