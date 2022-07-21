module.exports = function toReadable(number) {
    const units = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const dozens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    let unitStr = `${units[number % 10]}`;
    let dozenStr = `${dozens[Math.floor(number / 10)]}`;
    let hundredStr = `${units[Math.floor(number / 100)]} hundred`;
    let simleHundredStr = `${units[number / 100]} hundred`;
    let dozenHundredStr = `${
        dozens[Math.floor((number - Math.floor(number / 100) * 100) / 10)]
    }`;

    if (number < 20) {
        return `${units[number]}`;
    }
    if (number < 100 && number % 10 === 0) {
        return `${dozenStr}`;
    }
    if (number % 100 === 0) {
        return `${simleHundredStr}`;
    }
    if (number > 20 && number < 100) {
        return `${dozenStr} ${unitStr}`;
    }
    if (number > 100 && number % 100 < 20) {
        return `${hundredStr} ${units[number - (Math.floor(number / 100))*100]}`;
    }
    if (number > 100 && number % 10 === 0) {
        return `${hundredStr} ${dozenHundredStr}`;
    }
    if (number > 100 && number < 1000) {
        return `${hundredStr} ${dozenHundredStr} ${unitStr}`;
    }
};
console.log(module.exports(510));
