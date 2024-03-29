//8kyu `No Loops 2 - You only need one`

// No Loops Allowed

//You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

//Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

//P two params - array, value
//R boolean
//E Test.assertEquals(check([66, 101], 66), true);
//Test.assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
//Test.assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
//Test.assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);
//P Array.includes() goes through every item and looks for a match

// function check(a,x){
//     let foo = false;
//     a.forEach(a => {
//         if (a == x) {
//             foo = true;
//         }
//     })
// }

check = (a,x) => a.includes(x) 