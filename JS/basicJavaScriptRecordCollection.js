/* Accessing and changing data in JSON objects
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection */

// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
    if (value == ""){
      delete collection[id][prop];
    }
    else if (prop == "tracks"){
      if (collection[id][prop]){
        collection[id].tracks.push(value);
      }
      else {
        collection[id][prop] = [value];
      }
    }
    else if (prop != "tracks"){
      collection[id][prop] = value;
    }
  
    return collection;
  }
  
  // Alter values below to test your code
  updateRecords(5439, "artist", "ABBA");
  