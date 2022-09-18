//8kyu `Remove First and Last Character`
 
function removeChar(str){
    //You got this!
   //P STRING
   //R String but ends are chopped off
   //E PREP -> RE  HONDA -> OND  MRSMARR -> RSMAR
   //P .removeChar(1, .length-1?)
   // Create an array -> some of the methods create a new array
     let newStr = str.split('').slice(1, str.length-1).join('')
     return newStr
   };
   
