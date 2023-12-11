import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResultProfitService } from 'src/app/services/result-profit.service';
import { Profit } from '../../models/Profit.model';

@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.scss']
})
export class RouteBComponent implements OnDestroy {

  private resultProfitSubs: Subscription = new Subscription;
  result: Profit = {
    buyDay: 0,
    sellDay: 0,
    profit: 0,
  };

  constructor(private resultProfitService: ResultProfitService,
    private router: Router) {
      this.resultProfitSubscription();
  }

  resultProfitSubscription(): void{
    this.resultProfitSubs = this.resultProfitService.getProfit().subscribe({
      next: (resp) => {
        this.result = resp;
      },
      error: (error) => {
        console.error("Error esultProfitService.result$: ", error);
      }
    });
  }

  ngOnDestroy(): void {
    this.resultProfitSubs.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/route-a']);
  }

}
