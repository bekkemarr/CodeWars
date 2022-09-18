//8kyu `Century From Year`

//P two, three or four digit year
//R first two characters of a number
//E 1705 --> 18
//1900 --> 19
//1601 --> 17
//2000 --> 20
//P return the first two digits of any number but add 1 if it ends with a 1 or higher

let century = year =>   year > Math.floor(year/100)*100 ? Math.floor(year/100) + 1 : Math.floor(year/100)
