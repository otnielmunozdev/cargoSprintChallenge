# CargoSprintChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Method `calculateBestProfit`

### Description

This method calculates the best possible profit by buying and selling stocks on specific days, given the daily price variations.

### Parameters

- `prices: number[]`: An array of numbers representing daily stock prices.

### Return Value

- `Profit`: An object containing information about the best possible profit, including the buy day (`buyDay`), sell day (`sellDay`), and profit (`profit`).

### Behavior

1. If the prices array (`prices`) is undefined or has less than two elements, the method returns a `Profit` object with all values set to zero.

2. The method iterates through the prices array to find the best possible profit.
   - Initializes `minPrice` with the first element of the array.
   - Initializes `maxProfit` to zero.
   - Initializes `buyDay` and `sellDay` to one.

3. For each subsequent day, the method calculates the potential profit if bought at `minPrice` and sold at the current price.
   - If the current price is less than `minPrice`, updates `minPrice` and adjusts `buyDay` and `sellDay` to the current day.
   - If the current profit is greater than the maximum profit (`maxProfit`), updates `maxProfit` and adjusts `sellDay` to the current day.

4. Finally, the method returns a `Profit` object containing information about the best possible profit.

### Example Usage

```typescript
const prices = [100, 180, 260, 310, 40, 535, 695];
const result = calculateBestProfit(prices);

// Output:
// { buyDay: 5, sellDay: 7, profit: 655 }
```

### Notes

- The buy day (`buyDay`) and sell day (`sellDay`) are based on one to N indices, where N is the length of the prices array.
- The method also logs the result to the console for ease of debugging or tracking the process.

This method is useful for making informed decisions on when to buy and sell stocks to maximize profits. Make sure to provide a valid prices array for accurate results.

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
