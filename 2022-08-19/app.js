//7kyu `Row Weights`

//Several people are standing in a row divided into two teams.
//The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

//Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.  

//P array
//R two integers
//E     assert.deepEqual(rowWeights([13,27,49]), [62,27]);
//      assert.deepEqual(rowWeights([70,58,75,34,91]), [236,92]);
//      assert.deepEqual(rowWeights([29,83,67,53,19,28,96]), [211,164]);
//P Alternate between the numbers, and sum the results into num 1 and num 2 -> could do only reduce, , i = array.length but have if !(i % 2 == 0) return .reduce() else return .reduce() 
//function rowWeights(array){
// make one array
//make array here
// return sum1, sum2

function rowWeights(array){
    let firstBoat = array.filter((boatOne, i) => i % 2 === 0).reduce((acc, c) => (acc + c), 0)
    let secondBoat = array.filter((boatTwo, i) => i % 2 !== 0).reduce((acc, c) => (acc + c), 0)

    return [firstBoat, secondBoat]
}