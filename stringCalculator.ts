export class StringCalculator {

    stringAdd(numbers: string): number {
        var sum: number = 0
try{
        if (numbers.search("-") != -1) {
            var err: string = "Negatives not allowed: "
            var neg = numbers.split("-")
            for (var i = 1; i < neg.length; i++)   //erster nach split -> leerstring..
                err+="-"+neg[i][0]+","

            throw(err)
            
        }
    }catch(e){
        console.log(e)
    }
        if (numbers.length == 1&&Number(numbers)<=1000)
            sum += Number(numbers)

        else if (!numbers.length)
            sum = 0

        else if (numbers.charAt(0) == "/" && numbers.charAt(1) == "/") {
            var newString: string
            var delimiter: string
            newString = numbers.substr(4)
            delimiter = numbers.charAt(2)

            var strs = newString.split(delimiter)
            for (var j in strs){
                if(Number(strs[j])<=1000)
                sum += Number(strs[j])
            }
        }
        else {
            var strs = numbers.split(/[\n,]/)
            for (var j in strs){
                if(Number(strs[j])<=1000)
                sum += Number(strs[j])
            }
        }


        return sum
    }

}

var obj = new StringCalculator()
obj.stringAdd("-1,-3,4,5,-6")
