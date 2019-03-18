"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
class StringCalculator {
    stringAdd(numString) {
        let sum;
        if (!numString)
            sum = 0;
        else if (numString.startsWith('//')) {
            const numArray = this.addNumbersWithDelimiters(numString, this.getDelimiters(numString));
            this.checkNegatives(numArray);
            sum = _.sum(numArray);
        }
        else {
            const numArray = numString
                .split(/[,|\n]/)
                .map(Number)
                .filter(x => x < 1000);
            this.checkNegatives(numArray);
            sum = _.sum(numArray);
        }
        return sum;
    }
    getDelimiters(numString) {
        let delimiters;
        if (numString.includes('['))
            delimiters = numString.match(/(?<=\[)(\D*?)(?=\])/g);
        else
            delimiters = numString.match(/(?<=\/\/)(\D*?)(?=\n)/g);
        if (delimiters !== null)
            return delimiters.map(_.escapeRegExp).join('|');
        else
            return '';
    }
    addNumbersWithDelimiters(numString, delimiters) {
        numString = numString.substr(numString.lastIndexOf(']') + 2);
        const numArray = numString
            .split(new RegExp(delimiters))
            .map(Number)
            .filter(x => x < 1000);
        return numArray;
    }
    checkNegatives(numArray) {
        const neg = numArray.filter(x => x < 0).join(',');
        if (neg)
            throw new Error(`Negatives not allowed: ${neg}`);
    }
}
exports.StringCalculator = StringCalculator;
