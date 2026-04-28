const removeFromArray = (inputArr, ...toRemove) => {
    return inputArr.filter((str) => {
        return !toRemove.includes(str);
    })
};

// Do not edit below this line
module.exports = removeFromArray;
