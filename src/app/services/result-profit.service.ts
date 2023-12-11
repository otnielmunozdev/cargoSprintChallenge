import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profit } from '../models/Profit.model';

@Injectable({
  providedIn: 'root'
})
export class ResultProfitService {

  private resultProfitSubject = new BehaviorSubject<Profit>({ buyDay: 0, sellDay: 0, profit: 0 });
  private resultProfit$: Observable<Profit> = this.resultProfitSubject.asObservable();
  daysOfWeek:string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor() {}

  setProfit(resultProfit: Profit): void {
    this.resultProfitSubject.next(resultProfit);
  }

  getProfit(): Observable<Profit>{
    return this.resultProfit$;
  }

  getDaysOfWeek(): string[]{
    return this.daysOfWeek;
  }

}
