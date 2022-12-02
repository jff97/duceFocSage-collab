class UnitConvUtil {
   constructor() {
      this.UNIT_TABLE = [
         ["inch",       (1 / 39.3701), ["inch",       "inches",      "in"]],
         ["foot",       (1 / 3.28084), ["foot",       "feet",        "ft"]],
         ["kilometer",  1000,          ["kilometer",  "kilometers",  "km"]],
         ["meter",      1,             ["meter",      "meters",      "m"]]
      ];
   }

   convertToUnit(value, inputUnitType, outputUnitType) {
      inputUnitType = this.relaxUnitSyntax(inputUnitType)
      outputUnitType = this.relaxUnitSyntax(outputUnitType)
      if (inputUnitType === "meter") {
         return meterToUnit(value, outputUnitType)
      } else {
         let changedValue = value * this.getToMeterFac(inputUnitType)
         return this.meterToUnit(changedValue, outputUnitType)
      }
   }
   
   meterToUnit(value, outputUnitType) {
      return value / this.getToMeterFac(outputUnitType)
   }
   
   
   getToMeterFac(nonMeterUnitType) {
      for (let i = 0; i < this.UNIT_TABLE.length; i++) {
         if (this.UNIT_TABLE[i][0] === nonMeterUnitType) {
            return this.UNIT_TABLE[i][1]
         }
      }
      return -1;
   }
   
   
   // optional functions that are nice
   
   // function addUnit(2dArray UNIT_TABLE,string unitType, number toMeterFac)
   //    add a new row to the 2dArray (table) of the form
   //    [unitType, toMeterFac]
   //    return the updated array
   addUnit(UNIT_TABLE, unitType, toMeterFac, allowedAlternatives) {
      let changedUNIT_TABLE = UNIT_TABLE.concat([[unitType, toMeterFac, allowedAlternatives]])
      return changedUNIT_TABLE
   }
   //takes in a string corresponding to a unchecked unit
   //also takes in a table of the units
   //returns the corresponding strict unit string
   //if there is no equivalent it returns "invalid unit"
   relaxUnitSyntax(possibleUnit) {
      possibleUnit = possibleUnit.toLowerCase();
      //for every row in the table
      for (let i = 0; i < this.UNIT_TABLE.length; i++) {
         //if the allowed list contains the possible unit
         if (this.UNIT_TABLE[i][2].includes(possibleUnit)) {
            //then return the strict version contained in the first column of that row
            return this.UNIT_TABLE[i][0]
         }
      }
      //if nothing has been returned by this point then the 
      //unit was not anywhere in the table so it isnt supported
      return "invalid unit"
   }
   //expression is a string of the form 100miles -> meters
   //returns the number of meters in 100 miles as a number
   convertExpression(expression) {
      if (this.isValidExpression(expression)) {
         let parsedArr = expression.split(" -> ")
         parsedArr[0] = parsedArr[0].trim()
         parsedArr[1] = parsedArr[1].trim()
         let i = 0
         while (i < parsedArr[0].length) {
            if (this.charIsDigit(parsedArr[0].charAt(i))) {
               i++
            } else {
               break
            }
         }
         i--;
         let value = parseInt(parsedArr[0].slice(0, i + 1).trim())
         let inputUnitType = parsedArr[0].substring(i + 1, parsedArr.length[0]).trim()
         let outputUnitType = parsedArr[1].trim()
         return this.convertToUnit(value, inputUnitType, outputUnitType)
      } else {
         return "brennan"
      }
   }
   
   isValidExpression(expression) {
      if (!expression.includes(" -> ")) {
         return false
      } else if (!this.charIsDigit(expression.charAt(0))) {
         console.log(expression.charAt(0))
         expression = expression.trim()
         console.log("0 not digit")
         return false
      } else {
         return true
      }
   }
   
   charIsDigit(char) {
      if (char >= '0' && char <= '9') {
         return true
      } else {
         return false
      }
   }

}







/////////////////////////////////////////////
//driver

// console.log("testing original units in table")
// console.log(convertToUnit(200, "in", "km") + " = 0.00507" )
// console.log(convertToUnit(12, "incHes", "feet") + " = 1")
// console.log(convertToUnit(5, "m", "feet") + " = 16.4042")

// console.log("\ntesting addition of new units")
// console.log("adding ")
// UNIT_TABLE = addUnit(UNIT_TABLE, "mile", 1609.34, ["mile", "miles", "mi"])
// console.log(convertToUnit(200, "m", "mi") + " = 0.124274")

// console.log("\ntesting the operator conversion")
// console.log(convertExpression("100ft -> m") + " = 30.48")
// console.log(convertExpression("100 ft     ->     m") + " = 30.48")



