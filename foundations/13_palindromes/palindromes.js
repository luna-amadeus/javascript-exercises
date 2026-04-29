const palindromes = function (str) {
    const filtStr = str.replace(/[^\w\s\']/g, "").replace(/\s+/g, "").toLowerCase();
    console.log(filtStr);
    return filtStr === filtStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
