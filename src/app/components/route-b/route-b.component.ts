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

  private resultSubscription: Subscription;
  result: Profit = {
    buyDay: 0,
    sellDay: 0,
    profit: 0,
  };

  constructor(private resultProfitService: ResultProfitService,
    private router: Router) {
    this.resultSubscription = this.resultProfitService.getProfit().subscribe({
      next: (resp) => {
        this.result = resp;
      },
      error: (error) => {
        console.error("Error resultProfitService.result$: ", error);
      }
    });
  }


  ngOnDestroy(): void {
    this.resultSubscription.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/route-a']);
  }

}
