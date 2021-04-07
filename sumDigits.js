class Solution {
    solve(num) {
        let final = 0
        while(num > 0) {
            final += num % 10
            num = Math.floor(num/10)
        }
        return final
    }
}