import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profit } from '../models/Profit.model';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private resultSubject = new BehaviorSubject<Profit>({ buyDay: 0, sellDay: 0, profit: 0 });
  result$: Observable<Profit> = this.resultSubject.asObservable();

  constructor() {}

  setProfit(result: Profit): void {
    this.resultSubject.next(result);
  }

}
