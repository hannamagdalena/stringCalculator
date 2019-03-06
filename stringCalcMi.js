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
class StringCalcMi {
    stringAdd(numString) {
        let sum;
        if (!numString)
            sum = 0;
        else if (numString.startsWith("//")) {
            sum = this.addNumbersWithDelimiters(numString, this.getDelimiters(numString));
        }
        else {
            const numArray = numString.split(/[,|\n]/).map(Number).filter(x => x <= 1000);
            this.checkNegatives(numArray);
            sum = _.sum(numArray);
        }
        return sum;
    }
    getDelimiters(numString) {
        let delimiters = "";
        if (numString.includes("[")) {
            let del = numString.match(/(?<=\[)(\D*?)(?=\])/g);
            if (del !== null)
                delimiters = del.map(x => _.escapeRegExp(x)).join("|");
        }
        else
            delimiters = numString.substring(numString.lastIndexOf("/") + 1, numString.lastIndexOf("\n"));
        return delimiters;
    }
    addNumbersWithDelimiters(numString, delimiters) {
        if (numString.includes("]"))
            numString = numString.substr(numString.lastIndexOf("]") + 2);
        else
            numString = numString.substr(numString.lastIndexOf("\n"));
        let numArray = numString.split(new RegExp(delimiters)).map(Number).filter(x => x <= 1000);
        this.checkNegatives(numArray);
        return _.sum(numArray);
    }
    checkNegatives(numArray) {
        const neg = numArray.filter(x => x < 0).join(",");
        if (neg) {
            throw new Error("Negatives not allowed: " + neg);
        }
    }
}
exports.StringCalcMi = StringCalcMi;
let v1 = new StringCalcMi();
/* console.log(v1.stringAdd("//;\n2;2"))
console.log(v1.stringAdd("//[::][\n]\n2::2\n2"))
console.log(v1.stringAdd("//;\n2;-2;-3"))
 */
