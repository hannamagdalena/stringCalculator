import { expect } from "chai";
import { StringCalculator} from './stringCalculator';

describe ('StringCalculator', function(){
    const sc=new StringCalculator()
    describe('stringAdd', function(){
        it('check add nothing', function(){
            expect(sc.stringAdd("")).to.equal(0)
        })
        it('check add 1 number', function(){
            expect(sc.stringAdd("2")).to.equal(2)
        })
        it('check add 2 numbers', function(){
            expect(sc.stringAdd("2,2")).to.equal(4)
        })
        it('check add more than 2 numbers', function(){
            expect(sc.stringAdd("1,1,1,1,1")).to.equal(5)
        })
        it('check add numbers with new line', function(){
            expect(sc.stringAdd("1,1\n1")).to.equal(3)
        })
        it('check add with new delimiter', function(){
            expect(sc.stringAdd("//;\n1;2")).to.equal(3)
        })
        it('check negatives throwing msg', function(){
            expect(() => sc.stringAdd("1,-1,2,-3")).to.throw("Negatives not allowed: -1,-3")
        })
        it('check add number bigger than 1000', function(){
            expect(sc.stringAdd("2,1002,3,2000")).to.equal(5)
        })
        it('check add with delimiters any length', function(){
            expect(sc.stringAdd("//[||||]\n2||||2")).to.equal(4)
        })
        it('check add with multiple delimiters', function(){
            expect(sc.stringAdd("//[,][%]\n2,2%2")).to.equal(6)
        })
        it('check add multiple delimiters any length', function(){
            expect(sc.stringAdd("//[;;][|||][:]\n2|||2;;2:2")).to.equal(8)
        })
    })
    
})