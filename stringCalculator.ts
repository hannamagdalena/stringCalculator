import * as _ from 'lodash'
export class StringCalculator {

    stringAdd(numbers: string): number {
        let sum: number = 0


        if (!numbers.length)
            return 0

        else if (numbers.startsWith("//")) {

            let newString = numbers.substr(numbers.lastIndexOf("]") + 2)
            var strs = newString.split(new RegExp(this.getDelimiter(numbers)))
            sum=this.addNumbersWithDelimiter(strs)
        }
        else {
            var strs = numbers.split(/[\n|,]/)
            sum=this.addNumbersWithDelimiter(strs)
        }
        return sum
    }
    addNumbersWithDelimiter(strs:string[]):number{
        this.checkNegatives(strs)
        let nrs = strs.map(element => Number(element)).filter(element => element <= 1000)
        return _.sum(nrs)
    }
    checkNegatives(numbers: string[]) {
        let neg = numbers.filter(element => Number(element) < 0)
        if (neg.length > 0)
            throw new Error("Negatives not allowed: " + neg.join(","))
    }
    getDelimiter(numbers: string): string {
        let delimiter: string = ""
        if (numbers.includes("[")) {
            const dels = numbers.match(/(?<=\[)(\D*?)(?=\])/g) 
            if (dels != null){
                delimiter = dels.map(element => _.escapeRegExp(element)).join("|")}
        }
        else
            delimiter = numbers.substring(2, numbers.lastIndexOf("\n"))
        return delimiter
    }

}

var obj = new StringCalculator()
console.log(obj.stringAdd("//[*][|||][\n]\n2*1|||3\n1"))

