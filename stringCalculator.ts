export class StringCalculator {

    stringAdd(numbers:string):number{
        var sum:number=0
        
        
        if(numbers.length==1)
            sum+=Number(numbers)
        
        else if(!numbers.length)
            sum=0
        
        else if(numbers.charAt(0)=="/"&&numbers.charAt(1)=="/"){
            var newString:string
            var delimiter:string
            newString=numbers.substr(4)
            delimiter=numbers.charAt(2)
            
            var strs=newString.split(delimiter)
                for(var j in strs)
                    sum+=Number(strs[j])
        }
        else{
                var strs=numbers.split(/[\n,]/)
                for(var j in strs)
                    sum+=Number(strs[j])
            }

        
        return sum
    }

}


