/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    //create the grid system
    let grid = []
    for(let i = 0; i < m; i++){
        grid.push([])
        for(let j = 0; j < n; j++){
            //the last array I pushed in, push 1
            grid[grid.length - 1].push(1)
            
        }
    }
    //iterate through rows and columns
    //row zero will be filled with 1s
    //column zero will be filled with 1s
    //start iterating at 1
    for(let r = 1; r < m; r++){
        for(let c = 1; c < n; c++){
            //coordinates for each element in the grid are
            //grid[r][c] grid at row and c
              grid[r][c] = grid[r - 1][c] + grid[r][c - 1]
        }
    }
    return grid[m-1][n-1]
    
    
};