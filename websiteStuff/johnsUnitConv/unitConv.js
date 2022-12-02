// make some sort of 2 dimensional array (table) with all the values of possible unit 
// types and the number you must multiply one of those units by to get meters
 
let UNIT_TABLE  = [
   ["inch", (1 / 39.3701)],
   ["foot", (1 / 3.28084)],
   ["kilometer", 1000]
];

function convertToUnit(value, inputUnitType, outputUnitType) {
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
function addUnit(UNIT_TABLE, unitType, toMeterFac) {
   let changedUNIT_TABLE = UNIT_TABLE.concat([unitType, toMeterFac])
   return changedUNIT_TABLE
}






/////////////////////////////////////////////
//driver
alert(convertToUnit(2000, "inch", "kilometer"))
//alert(getToMeterFac("inch", UNIT_TABLE))