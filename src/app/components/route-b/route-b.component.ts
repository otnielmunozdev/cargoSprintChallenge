import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Profit } from '../../models/Profit.model';

@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.scss']
})
export class RouteBComponent implements OnInit {

  private resultSubscription: Subscription;
  result: Profit = {
    buyDay: 0,
    sellDay: 0,
    profit: 0,
  };

  constructor(private dataSharingService: DataSharingService,
              private router: Router) {

    this.resultSubscription = this.dataSharingService.result$.subscribe({
      next: (resp) => {
        this.result = resp;
      },
      error: (error) => {
        console.error("Error dataSharingService.result$: ", error);
      }
    });

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.resultSubscription.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/route-a']);
  }

}
