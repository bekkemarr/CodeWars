//8kyu `Count of positives / sum of negatives`

//Given an array of integers.

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.

//P Array
//R Smaller array
//E For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
//P count of positive numbers is an iterator that increments the count in a loop maybe? and the negative is a sum. disregard all 0's first, then do an iterator, and then the sum.

function countPositivesSumNegatives(input) {
    let positiveNums=0;
    let negativeNums=0;
    if (input === null || input.length === 0){
        return [];
    } else {
        input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums, negativeNums]
}