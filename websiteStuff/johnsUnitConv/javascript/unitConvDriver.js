// let x = new UnitConverter()
// console.log(x.convertExpression("100ft -> m") + " = 30.48")
// console.log("\ntesting addition of new units")
// console.log("adding miles")
// //UNIT_TABLE = x.addUnit("mile", 1609.34, ["mile", "miles", "mi"])
// console.log(x.convertToUnit(200, "m", "mi") + " = 0.124274")
function threeBoxConvert() {
   let inputValue = document.getElementById('threeBoxInputValue').value
   let inputUnitType = document.getElementById('threeBoxInputUnitType').value
   let outputUnitType = document.getElementById('threeBoxOutputUnitType').value

   if (inputValue != "" && inputUnitType != "" && outputUnitType != "") {
      let converter = new UnitConverter()
      let output = converter.convertToUnit(inputValue, inputUnitType, outputUnitType)
      document.getElementById('threeBoxOutput').innerHTML = output
   } else {
      document.getElementById('threeBoxOutput').innerHTML = "fill input boxes"
   }
}

function arrowConvert() {
   let inputExpression = document.getElementById('arrowExpression').value
  
   if (inputExpression != "" ) {
      let converter = new UnitConverter()
      let output = converter.convertArrow(inputExpression)
      document.getElementById('arrowOutput').innerHTML = output
   } else {
      document.getElementById('arrowOutput').innerHTML = "fill input box"
   }
}

function mathConvert(type) {
   let inputExpression = document.getElementById('mathExpression').value
  
   if (inputExpression != "" ) {
      let converter = new UnitConverter()
      let output = converter.convertMath(inputExpression)
      if (output != null) {
         document.getElementById('mathOutput').innerHTML = myRound(output)
      } else {
         document.getElementById('mathOutput').innerHTML = "invalid math expression"
      }
   } else {
      document.getElementById('mathOutput').innerHTML = "fill input box"
   }
}
function myRound(numUnit) {
   let decimalPlaces = 10
   let tolerance = .0000001
   
   let val = numUnit.match(/[0-9]+.?[0-9]+/)
   let unit = numUnit.match(/[a-zA-Z]+/)

   let factor = Math.pow(10, decimalPlaces)
   let difference = Math.abs(Math.round(val) - val)

   if (difference <= tolerance) {
      val = Math.round(val * factor) / factor
      return val + unit + "l"
   } 
   return val + unit 
}
console.log(myRound("2.9999999units"))
console.log(myRound("0.0000001units"))
console.log(myRound("100000000000.000000000023units"))
console.log(myRound("100000000000.0000023units"))
console.log(myRound("100000000000.000001units"))


