




function parseInput(input) {
   input = input.replace(/ /g, '')
   var regex = /(-?\d+\.?\d*)\s*([a-zA-Z]+)\s*([+\-%])\s*(-?\d+\.?\d*)\s*([a-zA-Z]+)/;
   var match = input.match(regex);
   if (match === null) {
      return null
   } else {
      return [match[1], match[4], match[2], match[5], match[3]];
   }
}

function testGpt(text) {
   let result = parseInput(text)
   if (result != null) {
   console.log("ChatGPT: for text = \"" + text + "\" num1 = " + result[0] + ", num2 = " + result[1] + ", unit1 = " + result[2] + ", unit2 = " + result[3] + ", operator = " + result[4])
   } else {
      console.log("bad expression")
   }
}

function myRound(numUnit) {
   let val = numUnit.match(/[0-9]+.?[0-9]+/)
   let unit = numUnit.match(/[a-zA-Z]+/)

   val = Math.round(val * 10) / 10 
   return val + unit
}



// testGpt("12in + 2ft")
// testGpt("12 in + 2 ft")
// testGpt("12iNchEs+12ft")

// testGpt("12iNchEs + 12f t")

// testGpt("12in  12 ft")
// testGpt("12in  12 *ft")
// testGpt("in1 + 12ft")
myRound("12.0000ft")


