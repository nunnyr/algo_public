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


class Solution {
    solve(matrix) {
        let temp = []
        for (let i = 0; i < matrix[0].length; i++) {
            temp = matrix.map(x => x[i]).sort((a, b) => a - b)
            for (let row of matrix) {
                row[i] = temp[0]
                temp.shift()
            }
        }
        return matrix
    }
}