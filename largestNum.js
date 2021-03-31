class Solution {
    solve(nums) {
        let sorted = nums.sort((a, b) => b - a)
        console.log("sorted", sorted)
        return sorted[0] > sorted[1] * 2
    }
}