//8kyu `Beginner Series #2 Clock`

//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

//P Integer
//R Integer
//E h = 0, m = 1, s = 1 => result = 61000
//P seconds = 1000 milleconds, *60 for minutes, *60 for hours

function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000;
}
