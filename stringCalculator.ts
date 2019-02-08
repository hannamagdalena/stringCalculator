export class StringCalculator {

    stringAdd(numbers: string): number {
        var sum: number = 0

            if (numbers.search("-") != -1) {
                var err: string = "Negatives not allowed: "
                var neg = numbers.split("-")
                for (var i = 1; i < neg.length; i++)   //erster nach split -> leerstring..
                    err += "-" + neg[i][0] + ",";
                throw err;

            }

        if (numbers.length == 1 && Number(numbers) <= 1000)
            sum += Number(numbers)

        else if (!numbers.length)
            sum = 0

        else if (numbers.charAt(0) == "/" && numbers.charAt(1) == "/") {
            var newString: string
            var delimiter: string
            var delLen:number=0
            newString = numbers.substr(numbers.lastIndexOf("\n") + 1)

            if (numbers.lastIndexOf("\n") == 3)
                delimiter = numbers.charAt(2)
            else if(numbers.indexOf("[")==numbers.lastIndexOf("["))
                delimiter = numbers.substring(numbers.indexOf("[") + 1, numbers.indexOf("]"))
            else{
                var delTmp:string=""
                for(var i=0; i<numbers.length;i++){
                    if(numbers.charAt(i)=="["){
                        i++
                        for(var k=i;numbers.charAt(k)!="]";k++)
                            delTmp+=numbers.charAt(i)
                    }
                }
                delimiter="["+delTmp+"]"
                delLen=delimiter.length
            }
            if(delimiter.length==delLen)
                var strs = newString.split(new RegExp(delimiter))
            else
                var strs = newString.split(delimiter)
            for (var j in strs) {
                if (Number(strs[j]) <= 1000)
                    sum += Number(strs[j])
            }
        }
        else {
            var strs = numbers.split(/[\n,]/)
            for (var j in strs) {
                if (Number(strs[j]) <= 1000)
                    sum += Number(strs[j])
            }
        }


        return sum
    }

}

var obj = new StringCalculator()
console.log(obj.stringAdd("//[,][;]\n2;2,1"))
//var str4:string="[;]asd[||]asd[:]"
/*if(str4.indexOf("[")==str4.lastIndexOf("["))
    console.log("nur eine klammer")
else
    console.log("mehrere klammern")
 */
