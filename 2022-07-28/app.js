//8kyu `Sum without highest and lower number`

//P Sum array numbers with no highest or lowest
//R A positive or negative integer, but if array have 2 or fewer elements return 0
//E { 6, 2, 1, 8, 10 } => 16
//  { 1, 1, 11, 2, 3 } => 6
//P Find highest number, find lowest number, sort from highest to lowest, pop & shift, then sum

function sumArray(array){
    return !array ? 0 : array.sort((a,b) => a - b).slice(1,-1).reduce((acc, c) => acc + c, 0)
}