class Solution {
    solve(matrix) {
        //switch the matrix and columns
        for(let r = 0; r < matrix.length; r++){
            console.log("r", r )
            for(let c = 0; c < matrix.length; c++){
                //console.log("c", c)
                console.log("this", matrix[r][c])
                matrix[r][c] = matrix[c][r]
            }
        }
        return matrix
    }
}