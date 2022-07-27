//8kyu `How much water do I need?`

//P Water, load, clothes
//R Number (possibly with decimal points) or an edge case
//E     Test.assertEquals(howMuchWater(10,10,21), 'Too much clothes','');
//    Test.assertEquals(howMuchWater(10,10,2), 'Not enough clothes','');
//    Test.assertEquals(howMuchWater(10,11,20), 23.58,'');
//   Test.assertEquals(howMuchWater(50,15,29), 189.87,'');
//P  Two edgecases: 1) Too much clothes, 2) Not enough clothes
//   1.1* x

function howMuchWater(water, load, clothes){
    // Insert your brilliant code here
    if (clothes > (2 * load)){
      return 'Too much clothes'
    } else if (clothes < load){
      return 'Not enough clothes'
    } else {
      return  +((water * 1.1 ** (clothes - load)).toFixed(2))
    }
  }