const sumAll = (firstNum, secondNum) => {
    //check validity of numbers
    if (typeof firstNum !== "number" || typeof secondNum !== "number" || Number.isInteger(firstNum) === false || Number.isInteger(secondNum) === false || firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }
    //put lowest number first
    let smallNum;
    let largeNum;
    if (firstNum > secondNum) {
        smallNum = secondNum;
        largeNum = firstNum;
    } else {
        smallNum = firstNum;
        largeNum = secondNum;
    }
    const sumArr = [];
    for (let a = smallNum; a <= largeNum; a ++) {
        sumArr.push(a);
    }
    return sumArr.reduce((accumulator, currentVal) => {
        return accumulator + currentVal;
    }, 0);
};

// Do not edit below this line
module.exports = sumAll;
