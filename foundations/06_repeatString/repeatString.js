const repeatString = (string, num) => {
    if (num < 0) {
        return "ERROR";
    }
    let finalString = "";
    for (let a = 1; a <= num; a ++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
