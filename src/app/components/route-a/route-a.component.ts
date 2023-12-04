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
  tablePrices: number[] = [];
  result: Profit = {
    buyDay: 0,
    sellDay: 0,
    profit: 0,
  };

  constructor(private router: Router,
    private dataSharingService: DataSharingService) {

  }

  ngOnInit(): void {
    this.tablePrices = [...this.prices];
  }

  executeAlgorithm(): void {
    this.result = this.calculateBestProfit(this.tablePrices);
    this.dataSharingService.setProfit(this.result);
    this.goToRouteB();
  }

  /**
   * Calculates the best possible profit by buying and selling stocks on specific days,
   * given the daily stock prices.
   * 
   * @param prices - An array of stock prices over a period of time.
   * @returns An object representing the best profit, buy day, and sell day.
   * 
   * If input is invalid or prices are decreasing, returns { buyDay: 0, sellDay: 0, profit: 0 }.
   * 
   * Algorithm:
   * - Tracks minimum price, maximum profit, buy day, and sell day.
   * - Iterates through prices, updating variables for better opportunities.
   * - Returns calculated profit object.
   * 
  */

  calculateBestProfit(prices: number[]): Profit {
    if (!prices || prices.length < 2) {
      return { buyDay: 0, sellDay: 0, profit: 0 };
    }

    let minPrice: number = prices[0];
    let maxProfit: number = 0;
    let buyDay: number = 1;
    let sellDay: number = 1;
    let currentBuyDay: number = 1;
    let pricesLength = prices.length;

    for (let i = 1; i < pricesLength; i++) {

      const currentProfit = prices[i] - minPrice;

      if (prices[i] < minPrice) {
        minPrice = prices[i];
        currentBuyDay = i + 1;
      } else if (currentProfit > maxProfit || (currentProfit === 0 && (prices[i] > prices[i - 1]))) {
        maxProfit = currentProfit;
        buyDay = currentBuyDay;
        sellDay = i + 1;
      }
    }
    return maxProfit === 0 ? { buyDay: 0, sellDay: 0, profit: 0 } : { buyDay, sellDay, profit: maxProfit };
  }

  goToRouteB(): void {
    this.router.navigate(['/route-b']);
  }

}