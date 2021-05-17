class Solution {
    solve(a, b) {
        let final = []
        
 
        for(let char of a){
            final.push(char)

        }
        for(let num of b){
            final.push(num)
        }
        return final.sort((a,b) => a - b)
    }
}
