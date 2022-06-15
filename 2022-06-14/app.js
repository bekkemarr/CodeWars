//8kyu `Grasshopper - Terminal game move function`

//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
//Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

//P There are two parameters - position, roll
//R Return a number that represents the new position
//E move(3, 6) should equal 15; 0,4 -> 8; 3, 6 -> 15; 2, 5 -> 12
//P position starts as 0, and increases positively with the roll. position 1 is done once, and the second one is done twice

function move (position, roll) {
    return position + (roll*2)
  }