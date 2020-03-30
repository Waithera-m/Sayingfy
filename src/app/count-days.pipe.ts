import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDays'
})
export class CountDaysPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayMonthDateDay: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(todayMonthDateDay - value);
    const daySeconds = 86400;
    var dateDifferenceInSeconds = dateDifference*0.001;
    var dateCount = dateDifferenceInSeconds/daySeconds;

    if(dateCount >= 1 && value < todayMonthDateDay){
      return dateCount;
    }else{
      return 0;
    }
  }

}
