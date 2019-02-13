import * as _ from 'lodash'
export class StringCalculator {

    stringAdd(numbers: string): number {
        let sum: number = 0

        if ( /^\d*\.?\d+$/.test(numbers)&& Number(numbers) <= 1000){
            let nrToCheck:string[]=[numbers]
            this.checkNegatives(nrToCheck)
            sum += Number(numbers)
        }

        else if (!numbers.length)
            sum = 0

        else if (numbers.startsWith("//")) { 
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
                    if(dels!=null){
                    for (let f in dels){
                        delTmp += _.escapeRegExp(dels[f]) + "|"
                    }
                }
                delimiter = "[" + delTmp + "]"
                delLen = delimiter.length
            }
            if (delimiter.length == delLen)
                var strs = newString.split(new RegExp(delimiter))
            else
                var strs = newString.split(delimiter)
            
            this.checkNegatives(strs)
            let nrs =strs.map(element=>Number(element)).filter(element=>element<=1000)
            sum= _.sum(nrs)
        }

        else {
            var strs = numbers.split(/[\n|,]/)
            this.checkNegatives(strs)
            let nrs =strs.map(element=>Number(element)).filter(element=>element<=1000)
            sum= _.sum(nrs)
        }
        return sum
    }
    checkNegatives(numbers:string[]){ 
        let neg = numbers.filter(element=>Number(element)<0)
        if(neg.length>0)
            throw new Error("Negatives not allowed: "+neg.join(","))  
    }

}

var obj = new StringCalculator()
console.log(obj.stringAdd("//[::][||]\n1::3||7||56::67"))
//console.log(obj.checkNegatives(["1", "-2", "-3","4","-8"]))

