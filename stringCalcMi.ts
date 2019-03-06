import * as _ from 'lodash';
export class StringCalcMi{
    public stringAdd(numString: string){
        let sum:number;
        
        if(!numString)
            sum =0;
        else if(numString.startsWith("//")){
            sum = this.addNumbersWithDelimiters(numString, this.getDelimiters(numString))
        }
        else{
            const numArray = numString.split(/[,|\n]/).map(Number).filter(x=>x<=1000)
            this.checkNegatives(numArray)
            sum= _.sum(numArray)

        }
    return sum;
    }
    public getDelimiters(numString:string){
        let delimiters:string = "";
        if(numString.includes("[")){
            let del = numString.match(/(?<=\[)(\D*?)(?=\])/g)
            if(del!==null)
                delimiters = del.map(x=> _.escapeRegExp(x)).join("|")
        }
        else
            delimiters = numString.substring(numString.lastIndexOf("/")+1, numString.lastIndexOf("\n"))
        
        return delimiters;
    }
    public addNumbersWithDelimiters(numString:string, delimiters:string){
        if(numString.includes("]"))
            numString = numString.substr(numString.lastIndexOf("]")+2);
        else
            numString = numString.substr(numString.lastIndexOf("\n"))
            
        let numArray = numString.split(new RegExp(delimiters)).map(Number).filter(x=>x<=1000)
        this.checkNegatives(numArray)
        return _.sum(numArray)
    }
    public checkNegatives(numArray:number[]){
        const neg = numArray.filter(x=> x<0).join(",")
        if(neg){
            throw new Error("Negatives not allowed: "+neg)
        }
    }
}


