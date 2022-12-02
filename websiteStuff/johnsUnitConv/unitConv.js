// make some sort of 2 dimensional array (table) with all the values of possible unit 
// types and the number you must multiply one of those units by to get meters
 
let UNIT_TABLE  = [
   ["inch",       (1 / 39.3701), ["inch", "inches", "in"]],
   ["foot",       (1 / 3.28084), ["foot", "feet", "ft"]],
   ["kilometer",  1000,          ["kilometer", "kilometers", "km"]],
   ["meter",      1,             ["meter", "meters", "m"]]
];


function convertToUnit(value, inputUnitType, outputUnitType) {
   inputUnitType = relaxUnitSyntax(inputUnitType, UNIT_TABLE)
   outputUnitType = relaxUnitSyntax(outputUnitType, UNIT_TABLE)
   if (inputUnitType === "meter") {
      return meterToUnit(value, outputUnitType)
   } else {
      let changedValue = value * getToMeterFac(inputUnitType, UNIT_TABLE)
      return meterToUnit(changedValue, outputUnitType)
   }
}

function meterToUnit(value, outputUnitType) {
   return value / getToMeterFac(outputUnitType, UNIT_TABLE)
}


function getToMeterFac(nonMeterUnitType, UNIT_TABLE) {
   for (let i = 0; i < UNIT_TABLE.length; i++) {
      if (UNIT_TABLE[i][0] === nonMeterUnitType) {
         return UNIT_TABLE[i][1]
      }
   }
   return -1;
}


// optional functions that are nice

// function addUnit(2dArray UNIT_TABLE,string unitType, number toMeterFac)
//    add a new row to the 2dArray (table) of the form
//    [unitType, toMeterFac]
//    return the updated array
function addUnit(UNIT_TABLE, unitType, toMeterFac, allowedAlternatives) {
   let changedUNIT_TABLE = UNIT_TABLE.concat([[unitType, toMeterFac, allowedAlternatives]])
   return changedUNIT_TABLE
}
//takes in a string corresponding to a unchecked unit
//also takes in a table of the units
//returns the corresponding strict unit string
//if there is no equivalent it returns "invalid unit"
function relaxUnitSyntax(possibleUnit, UNIT_TABLE) {
   possibleUnit = possibleUnit.toLowerCase();
   //for every row in the table
   for (let i = 0; i < UNIT_TABLE.length; i++) {
      //if the allowed list contains the possible unit
      if (UNIT_TABLE[i][2].includes(possibleUnit)) {
         //then return the strict version contained in the first column of that row
         return UNIT_TABLE[i][0]
      }
   }
   //if nothing has been returned by this point then the 
   //unit was not anywhere in the table so it isnt supported
   return "invalid unit"
}
//expression is a string of the form 100miles -> meters
//returns the number of meters in 100 miles as a number
function convertExpression(expression) {
   if (isValidExpression(expression)) {
      parsedArr = expression.split(" -> ")
      parsedArr[0] = parsedArr[0].trim()
      parsedArr[1] = parsedArr[1].trim()
      let i = 0
      while (i < parsedArr[0].length) {
         if (charIsDigit(parsedArr[0].charAt(i))) {
            i++
         } else {
            break
         }
      }
      i--;
      value = parseInt(parsedArr[0].slice(0, i + 1).trim())
      inputUnitType = parsedArr[0].substring(i + 1, parsedArr.length[0]).trim()
      outputUnitType = parsedArr[1].trim()
      return convertToUnit(value, inputUnitType, outputUnitType)
   } else {
      return "brennan"
   }
}

function isValidExpression(expression) {
   if (!expression.includes(" -> ")) {
      return false
   } else if (!charIsDigit(expression.charAt(0))) {
      console.log(expression.charAt(0))
      expression = expression.trim()
      console.log("0 not digit")
      return false
   } else {
      return true
   }
}

function charIsDigit(char) {
   if (char >= '0' && char <= '9') {
      return true
   } else {
      return false
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

console.log("\ntesting the operator conversion")
console.log(convertExpression("100ft -> m") + " = 30.48")
console.log(convertExpression("100 ft     ->     m") + " = 30.48")



