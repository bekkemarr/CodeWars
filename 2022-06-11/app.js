//8kyu `Do I get a bonus?` 

//Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

//If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

//Return the total figure the individual will receive as a string prefixed with "£"

//P Two parameters - salary and bonus
//R Return the total figure prefixed by a pound symbol
//E (10000, true), '£100000');
//P if bonus is true, then return salary*10 with £ in front, else return salary with £ in front (not multiplied)

function bonusTime(salary, bonus) {
    // your code here
    return bonus === true ? "£" + (salary * 10) : "£" + (salary)
    }