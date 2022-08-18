//8kyu `I love you, a little , a lot, passionately ... not at all`

//

//P phrases
//R phrase
//E 
//P 

//f = nb_petals => {switch(nb_petals % 6) { case 0: return 'not at all'; case 1: return 'I love you'; case 2: return 'a little'; case 3: return 'a lot'; case 4: return 'passionately'; case 5: return 'madly';}}

// function howMuchILoveYou(nbPetals){
//     const responses = [
//         'I love you',
//         'a little',
//         'a lot',
//         'passionately',
//         'madly',
//         'not at all'
//     ]
//     let index = nbPetals % 6 - 1 //add a minus one to account for the index starting at 0
//     if (index === -1) index = responses.length - 1; 
//     return responses[index]
// }


const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}