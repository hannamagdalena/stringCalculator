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
class StringCalc {
    stringAdd(nrString) {
        let sum;
        if (!nrString)
            sum = 0;
        else if (nrString.startsWith('//')) {
        }
        else {
            const numArr = nrString
                .split(/[,|\n]/)
                .map(Number)
                .filter(y => y < 1000);
            sum = _.sum(numArr);
        }
        //return sum;
    }
    getDelimiters(numString) {
        let delimiters;
        if (numString.includes('[')) {
            delimiters = numString.match(/(?<=\[)(\D*?)(?=\])/g);
        }
        else {
            delimiters = numString.match(/(?<=\/\/)(\D*?)(?=\n)/g);
        }
        if (delimiters !== null)
            delimiters = delimiters.map(x => _.escapeRegExp(x)).join('|');
        return delimiters;
    }
}
exports.StringCalc = StringCalc;
let v1 = new StringCalc();
console.log(v1.getDelimiters('//;\n1;2'));
console.log(v1.getDelimiters('//[,][%]\n2,2%2'));
