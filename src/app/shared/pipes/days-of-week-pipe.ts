import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysOfWeek'
})
export class DaysOfWeekPipe implements PipeTransform {

  transform(dayNumber: number): string {
    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    return daysOfWeek[dayNumber - 1] ? `${daysOfWeek[dayNumber - 1]} (${dayNumber})` : `Sin información (${dayNumber})`;
  }

}
