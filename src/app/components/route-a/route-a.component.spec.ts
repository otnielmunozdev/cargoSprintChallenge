import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DataSharingService } from 'src/app/services/data-sharing.service';

import { RouteAComponent } from './route-a.component';

describe('RouteAComponent', () => {
  let component: RouteAComponent;
  let routerSpy: jasmine.SpyObj<Router>;
  let dataSharingServiceSpy: jasmine.SpyObj<DataSharingService>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    dataSharingServiceSpy = jasmine.createSpyObj('DataSharingService', ['setProfit']);

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: DataSharingService, useValue: dataSharingServiceSpy },
      ],
    });

    component = new RouteAComponent(routerSpy, dataSharingServiceSpy);
  });

  it('should calculate the best profit for the given array', () => {
    const prices: number[] = [1, 2, 3, 4, 5, 6, 7];
    const expectedProfit = { buyDay: 1, sellDay: 7, profit: 6 };

    const result = component.calculateBestProfit(prices);

    expect(result).toEqual(expectedProfit);
  });

  it('should calculate the best profit for another array', () => {
    const prices: number[] = [10, 20, 30, 40, 50];
    const expectedProfit = { buyDay: 1, sellDay: 5, profit: 40 };

    const result = component.calculateBestProfit(prices);

    expect(result).toEqual(expectedProfit);
  });

  it('should return all 0', () => {
    const prices: number[] = [10];
    const expectedProfit = { buyDay: 0, sellDay: 0, profit: 0 };

    const result = component.calculateBestProfit(prices);

    expect(result).toEqual(expectedProfit);
  });

  it('should calculate the only avalaible days ', () => {
    const prices: number[] = [10,100];
    const expectedProfit = { buyDay: 1, sellDay: 2, profit: 90 };

    const result = component.calculateBestProfit(prices);

    expect(result).toEqual(expectedProfit);
  });

  it('should handle an array with equal prices', () => {
    const prices: number[] = [50, 50, 50, 50, 50];
    const expectedProfit = { buyDay: 1, sellDay: 1, profit: 0 };

    const result = component.calculateBestProfit(prices);

    expect(result).toEqual(expectedProfit);
  });
});
