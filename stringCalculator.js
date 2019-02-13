"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringCalculator {
    stringAdd(numbers) {
        var sum = 0;
        if (numbers.search("-") != -1) {
            var err = "Negatives not allowed: ";
            var neg = numbers.split("-");
            for (var i = 1; i < neg.length; i++) //erster nach split -> leerstring..
                err += "-" + neg[i][0] + ",";
            err = err.substring(0, err.length - 1);
            throw err;
        }
        if (numbers.length == 1 && Number(numbers) <= 1000)
            sum += Number(numbers);
        else if (!numbers.length)
            sum = 0;
        else if (numbers.charAt(0) == "/" && numbers.charAt(1) == "/") {
            var newString;
            var delimiter;
            var delLen = 0;
            newString = numbers.substr(numbers.lastIndexOf("\n") + 1);
            if (numbers.lastIndexOf("\n") == 3)
                delimiter = numbers.charAt(2);
            else {
                var delTmp = "";
                var reg = /(?<=\[)(.*?)(?=\])/g;
                var dels = numbers.match(reg);
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
            for (var j in strs) {
                if (Number(strs[j]) <= 1000)
                    sum += Number(strs[j]);
            }
        }
        else {
            var strs = numbers.split(/[\n|,]/);
            for (var j in strs) {
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
