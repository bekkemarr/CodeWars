//5kyu `Extract the domain name from a URL`

//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

//P String
//R String
//E * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//    url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//    url = "https://www.cnet.com"                -> domain name = cnet"
//P Split the URL into individual pieces, slice out the unnecessary bits 

// Anything with a .
// if it contains a :// -> OR if it contains www.
// IF starts with http, www, else...
// split off of that, get rid of the beginning
// THEN we look for the period, and everything after the period will delete
// 2 things - first eliminate the first half, then eliminate the second half
// split by / first, then by . second ????


// function domainName(url){
//     url.slice(0,3)
//     // url.split('/')
//     console.log(url)
// }


// function domainName(url){
//     url.slice(0,3)
//     // url.split('/')
//     console.log(url.slice(0,3))
//     if (url.slice='htt'){
//       url.split('/')
//       console.log(url.split('/'))
//     }  else if (url.slice='www'){
//       url.split('.')
//     } else {
//       url.split('.')
//     }
    
// }

// function domainName(url){
//     if (url.slice(0,3) === 'htt'){
//         let httSplit = url.split('/')
//         let httOne = httSplit[2].split('.')
//         if (httOne.slice(0,3) === 'www'){
//             let httSplit = url.split('.')
//             return httSplit[1]
//         } else {
//         return httOne[0]
//         }
//     } else if (url.slice(0,3) === 'www'){
//         let httSplit = url.split('.')
//         return httSplit[1]
//     } else {
//         let httSplit = url.split('.')
//         return httSplit[0]
//     }
// }

// function domainName(url){
//     if(url.slice(0,3) === 'htt'){
//     let httpsplit = url.split('/')
//     let httpOne = httpsplit[2].split('.')
    
//     if(httpOne.slice(0,3) === 'www'){
//        let httpsplit = url.split('.')
//        return httpsplit[1]
//     } else{
//     return httpOne[0]
//       }
//   }
//   else if(url.slice(0,3) === 'www'){
//     let httpsplit = url.split('.')
//     return httpsplit[1]
//   }
//   else{
//     let httpsplit = url.split('.')
//     return httpsplit[0]
//   }
// }

// split, filter, join

// function domainName(url){
//     let splitFirstHalf = url.split('/')
//     let filterOutHttpProtocol = splitFirstHalf.filter(foo => (foo !== "http:") && (foo !== "https:"))   //Don't need / because we already have it covered in split
//     let firstHalfComplete = filterOutHttpProtocol
//     //returns filtered out first half but doesn't exclude www., but it does exclude http and https

//     let splitSecondHalf = firstHalfComplete.split('.')
//     let filterOutWWWs = splitSecondHalf.filter( foo => (foo !== 'www'))
    
//     return filterOutWWWs[0]
// }


// function domainName(url){
//     let splitFirstHalf = url.split('/')
//     let filterOut = splitFirstHalf.filter(foo => (foo !== "") && (foo !== "http:") && (foo !== "https:"))  
//     let join =  filterOut.join(' ')

//     let splitSecondHalf = join.split('.')
//     let filterOutWWWs = splitSecondHalf.filter( foo => (foo !== 'www') && (foo !=='.'))
    
//     return filterOutWWWs[0].trim()
// }

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };