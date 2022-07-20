//8kyu `Keep Hydrated!`

//Nathan loves cycling.

//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

//P Integer
//R Return a whole positive integer, rounded down
//E 3 = 1, 6.7 = 3, 11.8 = 5
//P multiply the litres by 0.5 and round down; return that number

function litres(time) {
    let litresDrank = Math.floor(time * 0.5)
    return litresDrank
  }