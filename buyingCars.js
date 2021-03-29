class Solution {
    solve(prices, k) {
        let sortedPrice = prices.sort((a,b) => a - b) //ascending order
        let diff = k
        let count = 0
        for(let car of prices){    
          
            diff -= car
            if(diff < 0){
                break
            } 
                count ++
        }
        return count
    }
}