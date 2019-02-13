export class StringCalculator {

    stringAdd(numbers: string): number {
        let sum: number = 0

        if (numbers.search("-") != -1) {
            let err: string = "Negatives not allowed: "
            const neg = numbers.split("-")
            for (let i = 1; i < neg.length; i++)   //erster nach split -> leerstring..
                err += "-" + neg[i][0] + ",";
            err = err.substring(0, err.length - 1)
            throw err;

        }

        if ( /^\d*\.?\d+$/.test(numbers)&& Number(numbers) <= 1000)
            sum += Number(numbers)

        else if (!numbers.length)
            sum = 0

        else if (numbers.charAt(0) == "/" && numbers.charAt(1) == "/") {
            let newString: string
            let delimiter: string
            let delLen: number = 0
            newString = numbers.substr(numbers.lastIndexOf("\n") + 1)

            if (numbers.lastIndexOf("\n") == 3)
                delimiter = numbers.charAt(2)
            else {
                let delTmp: string = ""
                const reg = /(?<=\[)(.*?)(?=\])/g
                const dels = numbers.match(reg)
                if (dels != null) {
                    for (var f in dels)
                        if (dels[f].includes("|"))
                            delTmp += "\\" + dels[f] + "|"
                        else
                            delTmp += dels[f] + "|"
                }

                delimiter = "[" + delTmp + "]"
                delLen = delimiter.length
            }
            if (delimiter.length == delLen)
                var strs = newString.split(new RegExp(delimiter))
            else
                var strs = newString.split(delimiter)

            for (let j in strs) {
                if (Number(strs[j]) <= 1000)
                    sum += Number(strs[j])
            }
        }

        else {
            var strs = numbers.split(/[\n|,]/)
            for (let j in strs) {
                if (Number(strs[j]) <= 1000)
                    sum += Number(strs[j])
            }
        }
        return sum
    }
}

var obj = new StringCalculator()
//console.log(obj.stringAdd("//[;]\n1;2;1"))
console.log(obj.stringAdd("123"))
