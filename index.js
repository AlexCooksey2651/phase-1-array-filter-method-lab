function findMatching(array, string) {
    let matchingDrivers = [];
    let stringLowerCase = string.toLowerCase();
    matchingDrivers = array.filter(name => name.toLowerCase() === stringLowerCase);
    return matchingDrivers;
}

function fuzzyMatch(array, string) {
    let fuzzyDrivers = [];
    fuzzyDrivers = array.filter(name => name.slice(0, 2) === string);
    return fuzzyDrivers;
}

function matchName(array, string) {
    let matchDrivers = [];
    matchDrivers = array.filter(driver => driver.name === string);
    return matchDrivers;
}