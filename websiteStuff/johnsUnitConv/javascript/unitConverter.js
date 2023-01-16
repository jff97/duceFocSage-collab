class UnitConverter {
   //private instance variables
   #UNIT_TABLE = null

   constructor() {
      this.#UNIT_TABLE = [
         ["inch",       (1 / 39.3700787402), ["inch",       "inches",      "in"]],
         ["foot",       (1 / 3.2808399), ["foot",       "feet",        "ft"]],
         ["kilometer",  1000,          ["kilometer",  "kilometers",  "km"]],
         ["meter",      1,             ["meter",      "meters",      "m"]]
      ];
      this.#addAllMetricUnits()
      this.#addAllOtherUnits()
   }

   //3 public methods
   convertToUnit(value, inputUnitType, outputUnitType) {
      inputUnitType = this.#relaxUnitSyntax(inputUnitType)
      outputUnitType = this.#relaxUnitSyntax(outputUnitType)
      if (inputUnitType === "meter") {
         return this.#meterToUnit(value, outputUnitType)
      } else {
         let changedValue = value * this.#getToMeterFac(inputUnitType)
         return this.#meterToUnit(changedValue, outputUnitType)
      }
   }
   
   // function addUnit(2dArray #UNIT_TABLE,string unitType, number toMeterFac)
   //    add a new row to the 2dArray (table) of the form
   //    [unitType, toMeterFac]
   //    return the updated array
   addUnit(unitType, toMeterFac, allowedAlternatives) {
      this.#UNIT_TABLE = this.#UNIT_TABLE.concat([[unitType, toMeterFac, allowedAlternatives]])
   }

   //expression is a string of the form 100miles -> meters
   //returns the number of meters in 100 miles as a number
   convertArrow(expression) {
      if (this.#isValidArrowExpression(expression)) {
         let parsedArr = expression.split(" -> ")
         parsedArr[0] = parsedArr[0].trim()
         parsedArr[1] = parsedArr[1].trim()
         let splitLabeledValue = this.#splitLabeledValue(parsedArr[0])

         let value = splitLabeledValue[0]
         let inputUnitType = splitLabeledValue[1]
         let outputUnitType = parsedArr[1].trim()
         return this.convertToUnit(value, inputUnitType, outputUnitType)
      } else {
         return (expression + " is bad syntax")
      }
   }


   convertMath(expression) {
      let parsedExp = this.#parseInput(expression)

      if (parsedExp != null) {
         let leftVal = parsedExp[0]
         let rightVal = parsedExp[1]
         let leftUnit = parsedExp[2]
         let rightUnit = parsedExp[3]
         let operator = parsedExp[4]
         
         leftVal = this.convertToUnit(leftVal, leftUnit, "meter")
         rightVal = this.convertToUnit(rightVal, rightUnit, "meter")
         let resultVal = this.#doOperator(operator, leftVal, rightVal)
         
         return (this.convertToUnit(resultVal, "meter", leftUnit)).toString() + leftUnit
      } else {
         return null
      }
   }

   #parseInput(input) {
      input = input.replace(/ /g, '')
      input = input.toLowerCase()
      let pattern = /^\s*([+\-\.\d]+)\s*([a-zA-Z]+)\s*([+\-\%])\s*([+\-\.\d]+)\s*([a-zA-Z]+)\s*$/;
      var match = input.match(pattern)
      if (match === null) {
         return null
      } else {
         return [match[1], match[4], match[2], match[5], match[3]];
      }
   }

   ///////////////////////////////////////////////////////////////
   //all methods below this point are private methods to the class
   #meterToUnit(value, outputUnitType) {
      return value / this.#getToMeterFac(outputUnitType)
   }
   
   #getToMeterFac(nonMeterUnitType) {
      for (let i = 0; i < this.#UNIT_TABLE.length; i++) {
         if (this.#UNIT_TABLE[i][0] === nonMeterUnitType) {
            return this.#UNIT_TABLE[i][1]
         }
      }
      return (nonMeterUnitType + " is a unsupported unit");
   }
   
   //takes in a string corresponding to a unchecked unit
   //also takes in a table of the units
   //returns the corresponding strict unit string
   //if there is no equivalent it returns "invalid unit"
   #relaxUnitSyntax(possibleUnit) {
      possibleUnit = possibleUnit.toLowerCase();
      //for every row in the table
      for (let i = 0; i < this.#UNIT_TABLE.length; i++) {
         //if the allowed list contains the possible unit
         if (this.#UNIT_TABLE[i][2].includes(possibleUnit)) {
            //then return the strict version contained in the first column of that row
            return this.#UNIT_TABLE[i][0]
         }
      }
      //if nothing has been returned by this point then the 
      //unit was not anywhere in the table so it isnt supported
      return "invalid unit"
   }
   
   #isValidArrowExpression(expression) {
      if (!expression.includes(" -> ")) {
         return false
      } else if (!this.#charIsDigit(expression.charAt(0))) {
         console.log(expression.charAt(0))
         expression = expression.trim()
         console.log("0 not digit")
         return false
      } else {
         return true
      }
   }
   
   #charIsDigit(char) {
      if (char >= '0' && char <= '9') {
         return true
      } else {
         return false
      }
   }

   #splitLabeledValue(labeledValue) {
      let i = 0
         while (i < labeledValue.length) {
            if (this.#charIsDigit(labeledValue.charAt(i))) {
               i++
            } else {
               break
            }
         }
         i--;
         let value = parseInt(labeledValue.slice(0, i + 1).trim())
         let label = labeledValue.substring(i + 1, labeledValue.length).trim()
         return [value, label]
   }

   #doOperator(operator, left, right) {
      if (operator == "+") {
         return left + right
      } else if (operator == "-") {
         return left - right
      } else if (operator == "%") {
         return left % right
      } else {
         return "operator not supported"
      }
   }

   #addAllMetricUnits() {
      this.addUnit("picometer",  1/1000000000000,  ["picometer", "picometers", "pm"])
      this.addUnit("nanometer",  1/1000000000,     ["nanometer", "nanometers", "nm"])
      this.addUnit("micrometer", 1/1000000,        ["micrometer", "micrometers", "um"])
      this.addUnit("milimeter",  1/1000,           ["milimeter", "milimeters", "mm"])
      this.addUnit("centimeter", 1/100,            ["centimeter", "centimeters", "cm"])
      this.addUnit("decimeter",  1/10,             ["decimeter", "decimeters", "dm"])
      //meter allready done
      this.addUnit("decameter",  10,               ["decameter", "decameters", "dam"])
      this.addUnit("hectometer", 100,              ["hectometer", "hectometers", "hm"])
      this.addUnit("megameter",  1000000,          ["megameter", "megameters"])
      this.addUnit("gigameter",  1000000000,       ["gigameter", "gigameters", "gm"])
      this.addUnit("terameter",  1000000000000,    ["terameter", "terameters", "tm"])
   }

   #addAllOtherUnits() {
      this.addUnit("mile",             1609.34,                   ["mile", "miles", "mi"])
      this.addUnit("yard",             0.9144,                    ["yard", "yards", "yd"])
      this.addUnit("angstrom",         Math.pow(10, -10),         ["angstrom", "angstroms", "a"])
      this.addUnit("astronomicalunit", 1.496 * Math.pow(10, 11),  ["astronomicalunit", "astronomicalunits", "au"])
      this.addUnit("parsec",           3.086 * Math.pow(10, 16),  ["parsec", "parsecs", "pc"])
      this.addUnit("lightyear",        9.461 * Math.pow(10, 15),  ["lightyear", "lightyears", "ly"])
      this.addUnit("rod",              5.0292,                    ["rod", "rods"])
      this.addUnit("chamam",           .25,                       ["chamam", "chamams"])
      this.addUnit("lightyear",        9.461 * Math.pow(10, 15),  ["lightyear", "lightyears", "ly"])
      this.addUnit("nauticalmile",     1852,                      ["nauticalmile", "nauticalmiles"])
   }
}