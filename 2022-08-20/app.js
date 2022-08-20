//8kyu `What is between?`

//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

//P two integers
//R array
//E   it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
//    it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
//P go up in a count, count up by one

function between(a, b) {
    let betweenArray = [];
    for (let i = a; i <= b; i++){
        betweenArray.push(i)
    }
    return betweenArray
}