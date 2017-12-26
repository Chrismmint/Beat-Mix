// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);
console.log(kicks)
function toggleDrum(arrayName, indexNumber) {
  if (indexNumber>=0 && indexNumber < 16) {
  switch (arrayName) {
    case "kicks":
      if (kicks[indexNumber]) {
        kicks[indexNumber] = false;
      } else {
        kicks[indexNumber] = true;
      }
      break;
    case "snares":
      if (snares[indexNumber]) {
        snares[indexNumber] = false;
      } else {
        snares[indexNumber] = true;
      }
      break;
    case "hiHats":
      if (hiHats[indexNumber]) {
        hiHats[indexNumber] = false;
      } else {
        hiHats[indexNumber] = true;
      }
      break;
    case "rideCymbals":
      if (rideCymbals[indexNumber]) {
        rideCymbals[indexNumber] = false;
      } else {
        rideCymbals[indexNumber] = true;
      }
      break;
    default:
  }
  }
}
function clear(arrayName) {
  switch (arrayName) {
    case "kicks":
      kicks = Array(16).fill(false);
      break;
    case "snares":
      snares = Array(16).fill(false);
      break;
    case "hiHats":
      hiHats = Array(16).fill(false);
      break;
    case "rideCymbals":
      rideCymbals = Array(16).fill(false);
      break;
    default:
  }
}
function invert(arrayName) {
  switch (arrayName) {
    case "kicks":
      for (var i = 0; i < kicks.length; i++) {
        kicks[i] = !kicks[i];
      }
      break;
    case "snares":
      for (var i = 0; i < snares.length; i++) {
        snares[i] = !snares[i];
      }
      break;
    case "hiHats":
      for (var i = 0; i < hiHats.length; i++) {
        hiHats[i] = !hiHats[i];
      }
      break;
    case "rideCymbals":
      for (var i = 0; i < rideCymbals.length; i++) {
        rideCymbals[i] = !rideCymbals[i];
      }
      break;
    default:
  }
}
function getNeighborPads(x,y,size) {
  var retA = [];
  if (x>=0 && x<size && y>=0 && y<size) {
    if (x>0) {
      retA[0] = [x-1,y] // left
    }
    if (x<(size-1)) {
    retA[1] = [x+1,y] // right
    }
    if (y<(size-1)) {
    retA[2] = [x,y+1] // above
    }
    if (y>0) {
    retA[3] = [x,y-1] // below
    }
  }
    retA = retA.filter(function(n){return n != undefined})
  return retA;
}
