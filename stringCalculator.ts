export class StringCalculator {

    stringAdd(numbers: string): number {
        var sum: number = 0

        if (numbers.search("-") != -1) {
            var err: string = "Neatives not allowed: "
            var neg = numbers.split("-")
            for (var i = 1; i < neg.length; i++)   //erster nach split -> leerstring..
                err+="-"+neg[i][0]+","

            console.log(err)
            sum = -1
        }

        else if (numbers.length == 1)
            sum += Number(numbers)

        else if (!numbers.length)
            sum = 0

        else if (numbers.charAt(0) == "/" && numbers.charAt(1) == "/") {
            var newString: string
            var delimiter: string
            newString = numbers.substr(4)
            delimiter = numbers.charAt(2)

            var strs = newString.split(delimiter)
            for (var j in strs)
                sum += Number(strs[j])
        }
        else {
            var strs = numbers.split(/[\n,]/)
            for (var j in strs)
                sum += Number(strs[j])
        }


        return sum
    }

}

var obj = new StringCalculator()
obj.stringAdd("-1,-3,4,5,-6")
