//8kyu `Sum Mixed Array`

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

//P 
//R 
//E 
//P 

function sumMix(arr){
    return arr.reduce((a,c)=>a+Number(c),0)
}