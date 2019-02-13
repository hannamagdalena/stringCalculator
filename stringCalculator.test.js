"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const stringCalculator_1 = require("./stringCalculator");
describe('StringCalculator', function () {
    const sc = new stringCalculator_1.StringCalculator();
    describe('stringAdd', function () {
        it('check add nothing', function () {
            chai_1.expect(sc.stringAdd("")).to.equal(0);
        });
        it('check add 1 number', function () {
            chai_1.expect(sc.stringAdd("2")).to.equal(2);
        });
        it('check add 2 numbers', function () {
            chai_1.expect(sc.stringAdd("2,2")).to.equal(4);
        });
        it('check add more than 2 numbers', function () {
            chai_1.expect(sc.stringAdd("1,1,1,1,1")).to.equal(5);
        });
        it('check add numbers with new line', function () {
            chai_1.expect(sc.stringAdd("1,1\n1")).to.equal(3);
        });
        it('check add with new delimiter', function () {
            chai_1.expect(sc.stringAdd("//;\n1;2")).to.equal(3);
        });
        it('check negatives throwing msg', function () {
            chai_1.expect(() => sc.stringAdd("1,-1,2,-3")).to.throw("Negatives not allowed: -1,-3");
        });
        it('check add number bigger than 1000', function () {
            chai_1.expect(sc.stringAdd("2,1002,3,2000")).to.equal(5);
        });
        it('check add with delimiters any length', function () {
            chai_1.expect(sc.stringAdd("//[||||]\n2||||2")).to.equal(4);
        });
        it('check add with multiple delimiters', function () {
            chai_1.expect(sc.stringAdd("//[,][%]\n2,2%2")).to.equal(6);
        });
        it('check add multiple delimiters any length', function () {
            chai_1.expect(sc.stringAdd("//[;;][|||][:]\n2|||2;;2:2")).to.equal(8);
        });
    });
});
