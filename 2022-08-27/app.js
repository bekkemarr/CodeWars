//8kyu `A Needle in the Haystack`

//P array
//R String "found the needle at position [x]"
//E var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]; -> found the needle at position 3
//P .includes "needle"? .findIndex?  

function findNeedle(haystack) {
    const needleFound = haystack.findIndex((e) => e === "needle")
    return `found the needle at position ${needleFound}`;
  }