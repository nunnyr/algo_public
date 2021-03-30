class Solution {
    solve(s) {

        let onlyLow = s.match(/[a-z]/g)
        if(!onlyLow) return true //why am i returning true here
        //if string is empty then return true 


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

class Solution {
    solve(matrix) {
        if(matrix.length===0) return []
        const r = matrix.length, c = matrix[0].length
        for(let i=0;i<r;i++){
            for(let j=1;j<c;j++){
                matrix[i][j]+=matrix[i][j-1]
            }
        }
        for(let j=0;j<c;j++){
            for(let i=1;i<r;i++){
                matrix[i][j]+=matrix[i-1][j]
            }
        }
        return matrix
    }
}