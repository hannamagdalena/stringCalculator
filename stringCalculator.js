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
        if (/^\d*\.?\d+$/.test(numbers) && Number(numbers) <= 1000) {
            let nrToCheck = [numbers];
            this.checkNegatives(nrToCheck);
            sum += Number(numbers);
        }
        else if (!numbers.length)
            sum = 0;
        else if (numbers.startsWith("//")) {
            let newString;
            let delimiter;
            let delLen = 0;
            newString = numbers.substr(numbers.lastIndexOf("\n") + 1);
            if (numbers.lastIndexOf("\n") == 3)
                delimiter = numbers.charAt(2);
            else {
                let delTmp = "";
                const reg = /(?<=\[)(.*?)(?=\])/g;
                const dels = numbers.match(reg);
                if (dels != null) {
                    for (let f in dels) {
                        delTmp += _.escapeRegExp(dels[f]) + "|";
                    }
                }
                delimiter = "[" + delTmp + "]";
                delLen = delimiter.length;
            }
            if (delimiter.length == delLen)
                var strs = newString.split(new RegExp(delimiter));
            else
                var strs = newString.split(delimiter);
            this.checkNegatives(strs);
            for (let j in strs) {
                if (Number(strs[j]) <= 1000)
                    sum += Number(strs[j]);
            }
        }
        else {
            var strs = numbers.split(/[\n|,]/);
            this.checkNegatives(strs);
            for (let j in strs) {
                if (Number(strs[j]) <= 1000)
                    sum += Number(strs[j]);
            }
        }
        return sum;
    }
    checkNegatives(numbers) {
        let neg = numbers.filter(element => Number(element) < 0);
        if (neg.length > 0)
            throw new Error("Negatives not allowed: " + neg.join(","));
    }
}
exports.StringCalculator = StringCalculator;
var obj = new StringCalculator();
//console.log(obj.stringAdd("//[::][||]\n1::-3||7||-56::-67"))
//console.log(obj.checkNegatives(["1", "-2", "-3","4","-8"]))
