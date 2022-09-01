//8kyu Abbreivate a Two Word Name`

//P A string (two words)
//R String - letter.letter, capitalized
//E Sam Harris => S.H; patrick feeney => P.F
//P Split words into letters ... map the first entries only... join with a period ... upercase

function abbrevName(name){
    return name.split(" ").map((n)=>n[0]).join(".").toUpperCase();
}