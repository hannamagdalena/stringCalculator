import * as _ from 'lodash';
export class StringCalculator {
  public stringAdd(numString: string) {
    let sum: number;
    if (!numString) sum = 0;
    else if (numString.startsWith('//')) {
      const numArr = this.addNumbersWithDelimiters(
        numString,
        this.getDelimiters(numString)
      );
      this.checkNegatives(numArr);
      sum = _.sum(numArr);
    } else {
      const numArr = numString
        .split(/[\n|,]/)
        .map(Number)
        .filter(x => x < 1000);
      this.checkNegatives(numArr);
      sum = _.sum(numArr);
    }
    return sum;
  }
  public getDelimiters(numString: string) {
    let delimiters;
    if (numString.includes('['))
      delimiters = numString.match(/(?<=\[)(\D*?)(?=\])/g);
    else delimiters = numString.match(/(?<=\/\/)(\D*?)(?=\n)/g);

    if (delimiters !== null)
      return delimiters.map(x => _.escapeRegExp(x)).join('|');
    else return '';
  }
  public addNumbersWithDelimiters(numString: string, delimiters: string) {
    numString = numString.substr(numString.lastIndexOf('\n'));
    let numArr = numString
      .split(new RegExp(delimiters))
      .map(Number)
      .filter(x => x < 1000);
    return numArr;
  }
  public checkNegatives(numArr: number[]) {
    const neg = numArr.filter(x => x < 0).join(',');
    if (neg) throw new Error('Negatives not allowed: ' + neg);
  }
}
