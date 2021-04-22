import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianNumber'
})
export class PersianNumberPipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    if (value === undefined || value === null) {
      return '';
    }

    let persianNumber = value.toString().trim();

    persianNumber = persianNumber.replace(/0/g, '۰');
    persianNumber = persianNumber.replace(/1/g, '۱');
    persianNumber = persianNumber.replace(/2/g, '۲');
    persianNumber = persianNumber.replace(/3/g, '۳');
    persianNumber = persianNumber.replace(/4/g, '۴');
    persianNumber = persianNumber.replace(/5/g, '۵');
    persianNumber = persianNumber.replace(/6/g, '۶');
    persianNumber = persianNumber.replace(/7/g, '۷');
    persianNumber = persianNumber.replace(/8/g, '۸');
    persianNumber = persianNumber.replace(/9/g, '۹');

    return persianNumber;
  }
}
