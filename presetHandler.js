// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsIndex, newPresetArray) => {
  var returnArray = [];
  if (requestType === "GET") {
    if (presetsIndex>=0 && presetsIndex<4) {
      returnArray[0] = 200;
    } else {
      returnArray[0] = 404;
    }
        returnArray[1] = presets[presetsIndex];
  } else if (requestType === "PUT"){
    if (presetsIndex>=0 && presetsIndex<4) {
      returnArray[0] = 200;
    } else {
      returnArray[0] = 404;
    }
    presets[presetsIndex] = newPresetArray;
    returnArray[1] = newPresetArray;
  } else {
    returnArray[0] = 400;
  }





  return returnArray;

};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
