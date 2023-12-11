import { Pipe, PipeTransform } from '@angular/core';
import { ResultProfitService } from 'src/app/services/result-profit.service';

@Pipe({
  name: 'daysOfWeek'
})
export class DaysOfWeekPipe implements PipeTransform {

  constructor(public resultProfitService: ResultProfitService) {}

  transform(dayNumber: number): string {
    const daysOfWeek = this.resultProfitService.getDaysOfWeek();
    return daysOfWeek[dayNumber - 1] ? `${daysOfWeek[dayNumber - 1]} (${dayNumber})` : `Sin ganancia (${dayNumber})`;
  }

}
