module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundred = "hundred";

    if (number <= 19) {
        return units[number];
    }
    if (number >= 20 && number <= 99) {
        const firstNum = Math.floor(number / 10);
        const secondNum = number % 10;
        return secondNum === 0
            ? tens[firstNum - 2]
            : tens[firstNum - 2] + " " + units[secondNum];
    }

    if (number >= 100 && number <= 999) {
        const firstNum = Math.floor(number / 100);
        const num = number % 100;
        const secondNum = num ? " " + toReadable(num) : "";
        return units[firstNum] + " " + hundred + secondNum;
    }
};
