class Solution {
    solve(prices, k) {
        //return the maximum number of cars
        //then start with the cheapest car
        let sortedPrice = prices.sort((a,b) => a - b)
        console.log("sortedPrice", sortedPrice)
        let sum = null
        let count = 0

        if( k === 0){
            return 0
        }
        for(let dollar of prices){

            sum = k - dollar
            if(sum >= 0){
                console.log("sum", sum)
                console.log("count", count)
                count ++
            } 
        }
        return count
    }