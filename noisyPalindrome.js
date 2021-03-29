class Solution {
    solve(s) {

        let onlyLow = s.match(/[a-z]/g)
        if(!onlyLow) return true //why am i returning true here
        
        let i  = 0
        let back = onlyLow.length - 1
        //iteratively check them
        //while loop as long as i is less than back
        while(i < back){
            if(onlyLow[i] !== onlyLow[back]) {
                return false //bc we are looking for a palindrome
            }
            i++
            back--
        }
        //exit while loop...return true
        return true
    }
}