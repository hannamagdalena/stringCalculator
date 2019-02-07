import { expect } from "chai";
import { StringCalculator} from './stringCalculator';

describe ('StringCalculator', function(){
    const sc=new StringCalculator()
    describe('add', function(){
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
        
    })
})