// Code your solution here
//findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
function findMatching(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === attribute.toLowerCase() })
  }
// function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
  function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
  }
//This function takes an array of driver objects and a string as arguments.
  function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }