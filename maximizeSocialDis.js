class Solution {
    solve(seats) {
        let ans=1, last=-1
        for(let i=0;i<seats.length;i++){
            if(seats[i]===1){
                last === -1 ? ans = Math.max(ans,i) : ans = Math.max(ans,Math.floor((i-last)/2))
                last=i
            }
        }
        ans = Math.max(ans,seats.length-last-1)
        return ans
    }
}