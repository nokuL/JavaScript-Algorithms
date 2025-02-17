const maximumProfit = (prices) => {
    //use two pinter technique
    //left pointer and right pointer
    //while right pointer is less than the length of the array
    //if left pointer is less than right pointer, then calculate the profit
    //if profit is greater than max profit, then update max profit 


    let maxProfit = 0;
    let left =0;
    let right = 1;

    while (right < prices.length){
        if(prices[left]< prices[right]){
            let profit = prices[right] -prices[left];
            let maxProfit = Math.max(profit, maxProfit);

        } else {
            //if left pointer is greater than right pointer, then move the left pointer to the right pointer
            left = right;
        }
        right++;
    }

  
};
