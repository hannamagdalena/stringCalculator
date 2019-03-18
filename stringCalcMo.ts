import * as _ from 'lodash';

export class StringCalculator {
  public stringAdd(numString: string) {
    let sum: number;

    if (!numString) sum = 0;
    else if (numString.startsWith('//')) {
      const numArray = this.addNumbersWithDelimiters(
        numString,
        this.getDelimiters(numString)
      );
      this.checkNegatives(numArray);
      sum = _.sum(numArray);
    } else {
      const numArray = numString
        .split(/[,|\n]/)
        .map(Number)
        .filter(x => x < 1000);
      this.checkNegatives(numArray);
      sum = _.sum(numArray);
    }
    return sum;
  }
  public getDelimiters(numString: string) {
    let delimiters;
    if (numString.includes('['))
      delimiters = numString.match(/(?<=\[)(\D*?)(?=\])/g);
    else delimiters = numString.match(/(?<=\/\/)(\D*?)(?=\n)/g);
    if (delimiters !== null) return delimiters.map(_.escapeRegExp).join('|');
    else return '';
  }
  public addNumbersWithDelimiters(numString: string, delimiters: string) {
    numString = numString.substr(numString.lastIndexOf(']') + 2);
    const numArray = numString
      .split(new RegExp(delimiters))
      .map(Number)
      .filter(x => x < 1000);
    return numArray;
  }
  public checkNegatives(numArray: number[]) {
    const neg = numArray.filter(x => x < 0).join(',');
    if (neg) throw new Error(`Negatives not allowed: ${neg}`);
  }
}
