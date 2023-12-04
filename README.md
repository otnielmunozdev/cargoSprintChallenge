# CargoSprintChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Problem
Create a web application in Angular with the following features.

- The web page should contain 2 routes, A and B.

- In route A, the following problem should be solved:

Given an array of 7 positions where each position represents a day of the week (e.g., [25, 36, 78, 14, 64, 27, 80]), an algorithm should be created to determine the best buying and selling prices to achieve the highest profit. Consider that:

- Selling should occur after buying.
  
  - Only one traversal of the array should be performed.

  - Return 0 if no profit can be obtained.

Add a button on route A that executes the algorithm and displays the result on route B.

## Method `calculateBestProfit`

### Description

This method calculates the best possible profit by buying and selling stocks on specific days, considering daily price variations. It has been modified to handle edge cases and ensure accurate results.

### Parameters

- `prices: number[]`: An array of numbers representing daily stock prices.

### Return Value

- `Profit`: An object containing information about the best possible profit, including the day of purchase (`buyDay`), the day of sale (`sellDay`), and the profit (`profit`).

### Behavior

1. If the prices array (`prices`) is undefined or has fewer than two elements, the method returns a `Profit` object with all values set to zero.

2. The method traverses the prices array to find the best possible profit.
   - It initializes `minPrice` with the first element of the array.
   - It initializes `maxProfit` to zero.
   - It initializes `buyDay` and `sellDay` to one.
   - It introduces `currentBuyDay` to keep track of the current potential buy day.
   - It introduces `isNotDecreasing` to track whether the prices are not strictly decreasing.

3. For each subsequent day, the method updates `minPrice` and `currentBuyDay` if the current price is less than the minimum price. It also updates `maxProfit`, `buyDay`, and `sellDay` if the current profit is greater than the maximum profit or if the current profit is zero and the prices are not decreasing.

4. Finally, the method adjusts `sellDay` if `buyDay` is equal to `sellDay` and `sellDay` is less than the length of the prices array.

### Example Usage

```typescript
const prices = [100, 180, 260, 310, 40, 535, 695];
const result = calculateBestProfit(prices);

// Output:
// { buyDay: 5, sellDay: 7, profit: 655 }
```

### Notes

- The purchase day (`buyDay`) and sale day (`sellDay`) are based on one-based indices, where one represents the first day.
- The method ensures accuracy in scenarios where prices are not strictly decreasing. If prices are strictly decreasing, it returns a `Profit` object with all values set to zero.

This method is useful for making informed decisions on when to buy and sell stocks to maximize profits. Ensure you provide a valid prices array for accurate results.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
