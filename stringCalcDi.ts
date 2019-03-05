import * as _ from 'lodash';
export class StringCalcDi{

    public stringAdd(numString: string): number{
        let sum: number;
        let numArr: number[];
        if(!numString)
            sum = 0;
        else if(numString.startsWith("//")){
            
            sum = this.addNumbersWithDelimiters(numString, this.getDelimiters(numString))
            
        }
        else{
            numArr = numString.split(/,|\n/).map(x=> Number(x))
            this.checkNegatives(numArr)
            sum = _.sum(numArr)
        }
        return sum;
    }
    public getDelimiters(numstring: string){
        let delimiters;
        if(numstring.includes("[")){
             delimiters = numstring.match(/(?<=\[)(\D*?)(?=\])/g)
             if(delimiters!==null)
                delimiters = delimiters.map(x=> _.escapeRegExp(x)).join("|")
            }
        else
             delimiters = numstring.substring(numstring.lastIndexOf("/")+1, numstring.lastIndexOf("\n"))
        return delimiters;
    }
    public checkNegatives(numArr:number[]){
        const neg = numArr.filter(x => x<0).join(",")
        if(neg.length>0)
            throw new Error("Negatives not allowed: "+neg)
    }
    public addNumbersWithDelimiters(numString:string, delimiters:any){
        numString = numString.substr(numString.lastIndexOf("\n"))
        const numArr = numString.split(new RegExp(delimiters)).map(x=>Number(x))
        this.checkNegatives(numArr)
        return _.sum(numArr)
    }
    
}

