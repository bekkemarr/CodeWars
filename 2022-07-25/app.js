//7kyu `Help the Fruit Guy`

//P bagOfFruits
//R Array in all lowercase
//E Test.assertSimilar(removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"])
//  Test.assertSimilar(removeRotten([]), [])
//P Search for rotten\Fruit\, and remove the word rotten from whatever it's attached to

function removeRotten(bagOfFruits){
    if (!bagOfFruits){
        return []
    }
    for (let i=0; i < bagOfFruits.length; i++){
        if(bagOfFruits[i].includes("rotten")){
            bagOfFruits[i] = bagOfFruits[i].slice(6).toLowerCase()
        }
    }
    return bagOfFruits
  }