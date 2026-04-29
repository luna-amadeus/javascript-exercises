const findTheOldest = function(arrOfObjects) {
    return arrOfObjects.reduce((oldest, next) => {
        if (next.yearOfDeath === undefined) {next.yearOfDeath = 2026};
        if (oldest.yearOfDeath - oldest.yearOfBirth > next.yearOfDeath - next.yearOfBirth) {
            return oldest;
        } else {
            return next;
        }
    }, arrOfObjects[0])
};

// Do not edit below this line
module.exports = findTheOldest;
