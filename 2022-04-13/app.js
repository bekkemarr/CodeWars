//8kyu `Removing Elements`
//Note: Coded along with `helloitsrufio`


//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//Example:
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//None of the arrays will be empty, so you don't have to worry about that!


//P: PARAMETERS. No arrays will be empty. Doesn't matter if they are special characters
//R: RETURN. Return an array with every other element starting with no.1 (i.e. odd nums only) 
//E: EXAMPLES. If given [1,3,'fish','fishsticks',3] you should get [1,'fish',3]
//P: PSEUDOCODE. Make a function that takes in an array.


function removeEveryOther(arr){
    let newArr = []
    //make a for loop where I can grab index number
    for (i=0; i<arr.length; i++){
        if (i % 2 == 0){
            newArr.push(arr[i])
        }   
    }
    //if index number is every other number, pop
    //return new array
    return newArr 
}