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
class StringCalcDi {
    stringAdd(numString) {
        let sum;
        let numArr;
        if (!numString)
            sum = 0;
        else if (numString.startsWith("//")) {
            sum = this.addNumbersWithDelimiters(numString, this.getDelimiters(numString));
        }
        else {
            numArr = numString.split(/,|\n/).map(x => Number(x));
            this.checkNegatives(numArr);
            sum = _.sum(numArr);
        }
        return sum;
    }
    getDelimiters(numstring) {
        let delimiters;
        if (numstring.includes("[")) {
            delimiters = numstring.match(/(?<=\[)(\D*?)(?=\])/g);
            if (delimiters !== null)
                delimiters = delimiters.map(x => _.escapeRegExp(x)).join("|");
        }
        else
            delimiters = numstring.substring(numstring.lastIndexOf("/") + 1, numstring.lastIndexOf("\n"));
        return delimiters;
    }
    checkNegatives(numArr) {
        const neg = numArr.filter(x => x < 0).join(",");
        if (neg.length > 0)
            throw new Error("Negatives not allowed: " + neg);
    }
    addNumbersWithDelimiters(numString, delimiters) {
        numString = numString.substr(numString.lastIndexOf("\n"));
        const numArr = numString.split(new RegExp(delimiters)).map(x => Number(x));
        this.checkNegatives(numArr);
        return _.sum(numArr);
    }
}
exports.StringCalcDi = StringCalcDi;
