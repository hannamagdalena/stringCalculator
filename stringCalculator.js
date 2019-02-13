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
    stringAdd(numbers) {
        let sum = 0;
        if (!numbers.length)
            return 0;
        else if (numbers.startsWith("//")) {
            let newString = numbers.substr(numbers.lastIndexOf("]") + 2);
            var strs = newString.split(new RegExp(this.getDelimiter(numbers)));
            sum = this.addNumbersWithDelimiter(strs);
        }
        else {
            var strs = numbers.split(/[\n|,]/);
            sum = this.addNumbersWithDelimiter(strs);
        }
        return sum;
    }
    addNumbersWithDelimiter(strs) {
        this.checkNegatives(strs);
        let nrs = strs.map(element => Number(element)).filter(element => element <= 1000);
        return _.sum(nrs);
    }
    checkNegatives(numbers) {
        let neg = numbers.filter(element => Number(element) < 0);
        if (neg.length > 0)
            throw new Error("Negatives not allowed: " + neg.join(","));
    }
    getDelimiter(numbers) {
        let delimiter = "";
        if (numbers.includes("[")) {
            const dels = numbers.match(/(?<=\[)(\D*?)(?=\])/g);
            if (dels != null) {
                delimiter = dels.map(element => _.escapeRegExp(element)).join("|");
            }
        }
        else
            delimiter = numbers.substring(2, numbers.lastIndexOf("\n"));
        return delimiter;
    }
}
exports.StringCalculator = StringCalculator;
var obj = new StringCalculator();
console.log(obj.stringAdd("//[*][|||][\n]\n2*1|||3\n1"));
console.log(obj.getDelimiter("//[;][||]\n1||1;1"));
console.log("as\|");
