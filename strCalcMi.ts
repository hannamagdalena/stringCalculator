import * as _ from 'lodash';
export class StringCalc {
  public stringAdd(nrString: string) {
    let sum: number;
    if (!nrString) sum = 0;
    else if (nrString.startsWith('//')) {
      sum = _.sum(
        this.addNumbersWithDelimiters(this.getDelimiters(nrString), nrString)
      );
    } else {
      const numArr = nrString
        .split(/[,|\n]/)
        .map(Number)
        .filter(y => y < 1000);
      sum = _.sum(numArr);
    }

    return sum;
  }
  public getDelimiters(numString: string) {
    let delimiters = '';
    let dels;
    if (numString.includes('[')) {
      dels = numString.match(/(?<=\[)(\D*?)(?=\])/g);
    } else {
      dels = numString.match(/(?<=\/\/)(\D*?)(?=\n)/g);
    }
    if (dels !== null) delimiters = dels.map(x => _.escapeRegExp(x)).join('|');
    return delimiters;
  }
  public addNumbersWithDelimiters(delimiter: string, numString: string) {
    numString = numString.substr(numString.indexOf('\n'));
    return numString
      .split(new RegExp(delimiter))
      .map(Number)
      .filter(x => x < 1000);
  }
  public checkNegatives(nrArr: number[]) {
    const neg = nrArr.filter(x => x < 0).join(',');
    if (neg) throw new Error('Negatives not allowed: ' + neg);
  }
}
