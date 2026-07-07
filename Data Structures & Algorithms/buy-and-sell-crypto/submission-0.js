class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (let price of prices) {
            if (price < minPrice) {
                minPrice = price; // naya sabse sasta din mila
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice; // profit update karo
            }
        }

        return maxProfit;
    }
}