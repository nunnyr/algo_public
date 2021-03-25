class Solution {
    solve(matrix) {
        //switch the matrix and columns
        //iterate through the row
        let grid = []
        for(let i = 0; i < matrix.length; i++){
            grid.push([])
            for(let j = 0; j < matrix.length; j++){
               // console.log("cell", matrix[i][j])
               grid[i].push(matrix[j][i])
            }
        }
        return grid
    }
}