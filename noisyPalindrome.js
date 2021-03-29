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

// class Solution {
//     solve(matrix) {
//     const grid = matrix.map(arr => arr.map(cell => 0))

//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix.length; j++){
//             console.log("??", matrix[i][j])
//             //console.log("grid", grid[i][j])
//             grid[i][j] = matrix[i][j] + matrix[i][j]
//            // grid[[j] += matrix[i - 1] + matrix[i]
            
            
//             }
//         }
//         console.log("grid", grid)
//      //   return grid
//     }
// }