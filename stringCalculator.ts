export class StringCalculator {

    stringAdd(numbers:string):number{
        var sum:number=0
        
        
        if(numbers.length==1)
            sum+=Number(numbers)
        
        else if(!numbers.length)
            sum=0
        else{
                var strs=numbers.split(/[\n,]/)
                for(var j in strs)
                    sum+=Number(strs[j])
            }

        
        return sum
    }

}
