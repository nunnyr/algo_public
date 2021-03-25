class Solution {
    solve(matrix) {
        let grid = []
        for(let i = 0; i < matrix.length; i++){
            grid.push([])
            for(let j = 0; j < matrix.length; j++){
                let temp = 0
                // if(temp < matrix[i][j]){
                //     return
                // }
                if( matrix[i][j] >= temp){
                grid[i].push(matrix[i][j])

                console.log("grid", grid)
                }
            }
        }
    }
}