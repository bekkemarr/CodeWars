//8kyu `Find Maximum and Minimum Values of a List`

//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

//P Array
//R Integer
//E [4,6,2,1,9,63,-134,566] -> max = 566, min = -134; [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//P 

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);