// Write a function that takes an array of integers representing the price of a stock on different days.
//Return the maximum profit that can be made from buying and selling a single stock
const arrayInt = [100, 200, 10, 500, 700];

var maxProfit = function (prices) {
  let mProfit = 0;
  let lowestPrice = prices[0];
  

  for (i = 1; i < prices.length; i++) {
    let newPrice = prices[i];

    if (newPrice < lowestPrice) lowestPrice = newPrice;

    let profit = newPrice - lowestPrice;
    mProfit = Math.max(profit, mProfit);
    console.log(mProfit);
  }
};
maxProfit(arrayInt);
