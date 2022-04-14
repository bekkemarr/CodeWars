//8kyu `Grasshopper - Summation`

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//For example:
//summation(2) -> 3
//1 + 2
//summation(8) -> 36
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//P Parameter will be the last number (n)
//R Result is iterating through each number and adding them together until you reach the end of the numbers (n)
//E Examples 1+2+3+4+5 = 15, plus above
//P Pseudo-code - run a for loop, add itself plus i, and return the result

const summation = function (n) {
    let totals = 0
    for (i=1; i <= n; i++){
        totals += i
    }
    return totals
}

console.log(summation)