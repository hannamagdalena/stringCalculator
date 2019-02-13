"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringCalculator {
    stringAdd(numbers) {
        let sum = 0;
        if (numbers.search("-") != -1) {
            let err = "Negatives not allowed: ";
            const neg = numbers.split("-");
            for (let i = 1; i < neg.length; i++) //erster nach split -> leerstring..
                err += "-" + neg[i][0] + ",";
            err = err.substring(0, err.length - 1);
            throw new Error(err);
        }
        if (/^\d*\.?\d+$/.test(numbers) && Number(numbers) <= 1000)
            sum += Number(numbers);
        else if (!numbers.length)
            sum = 0;
        else if (numbers.startsWith("//")) { //numbers.charAt(0) == "/" && numbers.charAt(1) == "/"
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
                    for (var f in dels)
                        if (dels[f].includes("|"))
                            delTmp += "\\" + dels[f] + "|";
                        else
                            delTmp += dels[f] + "|";
                }
                delimiter = "[" + delTmp + "]";
                delLen = delimiter.length;
            }
            if (delimiter.length == delLen)
                var strs = newString.split(new RegExp(delimiter));
            else
                var strs = newString.split(delimiter);
            for (let j in strs) {
                if (Number(strs[j]) <= 1000)
                    sum += Number(strs[j]);
            }
        }
        else {
            var strs = numbers.split(/[\n|,]/);
            for (let j in strs) {
                if (Number(strs[j]) <= 1000)
                    sum += Number(strs[j]);
            }
        }
        return sum;
    }
}
exports.StringCalculator = StringCalculator;
var obj = new StringCalculator();
console.log(obj.stringAdd("//[;]\n1;2;1"));
