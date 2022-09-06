//8kyu `Are You Playing Banjo?`

//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:

//P name (string)
//R name + " plays banjo" || name + " does not play banjo" 
//E "Ringo" -> "Ringo plays banjo" or "Adam" -> "Adam does not play banjo"
//P convert to array -> if name[0] is R, return name plays bango, else return name does not play banjo

function areYouPlayingBanjo(name) {
    if(name.substring(0,1) == 'r' || name.substring(0,1) == 'R'){
    return name + " plays banjo" ;
    } else {
    return name + " does not play banjo"
    }
}