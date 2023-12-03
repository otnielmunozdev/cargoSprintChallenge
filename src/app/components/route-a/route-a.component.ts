import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Profit } from '../../models/Profit.model';

@Component({
  selector: 'app-route-a',
  templateUrl: './route-a.component.html',
  styleUrls: ['./route-a.component.scss']
})
export class RouteAComponent implements OnInit {

  daysOfWeek: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  prices: number[] = [25, 36, 78, 14, 64, 27, 80];
  result: Profit = {
    buyDay: 0,
    sellDay: 0,
    profit: 0,
  };

  constructor(private router: Router,
              private dataSharingService: DataSharingService) {

  }

  ngOnInit(): void {
  }

  executeAlgorithm(): void {
    this.result = this.calculateBestProfit(this.prices);
    this.dataSharingService.setProfit(this.result);
    this.goToRouteB();
  }

  /**
 * Calculates the best possible profit by buying and selling stocks on specific days,
 * given the daily stock prices.
 * For each subsequent day, the method calculates the potential profit if bought at
 * minPrice and sold at the current price.
 *
 * @param prices An array of numbers representing the daily stock prices.
 * @returns A Profit object with information about the best possible profit.
 */

  calculateBestProfit(prices: number[]): Profit {
    if (!prices || prices.length < 2) {
      return { buyDay: 0, sellDay: 0, profit: 0 };
    }
  
    let minPrice: number = prices[0];
    let maxProfit: number = 0;
    let buyDay: number = 1;
    let sellDay: number = 1;
  
    for (let i = 1; i < prices.length; i++) {
      const currentProfit = prices[i] - minPrice;
      
      if (prices[i] < minPrice) {
        minPrice = prices[i];
        buyDay = i + 1;
        sellDay = i + 1;
      } else if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
        sellDay = i + 1;
      }
    }
  
    const profitResult: Profit = { buyDay, sellDay, profit: maxProfit };
  
    console.log("calculateBestProfit result: ", profitResult);
  
    return profitResult;
  }

  goToRouteB(): void {
    this.router.navigate(['/route-b']);
  }

}