// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.
// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.
//sample grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
//               ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
//               ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//               ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
//               ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
//               ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
//               ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
//               ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
//               ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
//output = true
function sudoku2(grid) {
    for(let i=0;i<9;i++){//row and column checker
        let column = {}
        let row = {}
        for(let j=0;j<9;j++){
            if(grid[i][j]!='.'){//checking the rows
                if(row[Number(grid[i][j])]) return false
                row[Number(grid[i][j])]= -~row[Number(grid[i][j])] //1
            }
            if(grid[j][i]!='.'){//checking columns
                if(column[Number(grid[j][i])]) return false
                column[Number(grid[j][i])]= -~column[Number(grid[j][i])]
            }
        }
    }
    for(let x=0;x<7;x+=3){//groups of 3 rows
        for(let y=0;y<7;y+=3){//groups of 3 columns
            let numbers = {}
            for(let h=0;h<3;h++){//these two for loops check through every value in a 3X3 min board
                for(let k=0;k<3;k++){
                   if(grid[x+h][y+k]!='.') {
                       if(numbers[grid[x+h][y+k]]) return false
                       numbers[grid[x+h][y+k]] = 1
                   }
                }
            }
        }
    }
    return true
}
