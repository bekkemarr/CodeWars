//8kyu `Opposites Attract`

//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
//If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

//P two integers
//R boolean
//E lovefunc(1,4) => true, lovefunc(2,2) => false
//P if 1 is even AND 2 is odd OR 1 is odd AND 2 is even, return true, else return false

function lovefunc(flower1, flower2){
    if ( ((flower1 % 2 === 0) && (flower2 % 2 !== 0)) || ((flower1 % 2 !== 0) && (flower2 % 2 === 0)) ){
        return true
    } else {
        return false
    }
  }