/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/24
 */
/*
* https://leetcode-cn.com/problems/valid-sudoku/
* */
var isValidSudoku = function(board) {
    let line_map = new Array(10).fill(0)
    let vertical_map = new Array(10).fill(0)
    let grid_map = new Array(10).fill(0)
    for (let i = 1; i <= 9; i ++){
        line_map = new Array(10).fill(0)
        vertical_map = new Array(10).fill(0)
        grid_map = new Array(10).fill(0)
        for (let j = 1; j <= 9; j ++){
            let lineValue = board[i - 1][j - 1]
            let verticalValue = board[j - 1][i - 1]
            let gridValue = board[(Math.ceil(i / 3) - 1) * 3 + Math.ceil(j / 3) - 1][((i % 3 === 0 ? 3 : i % 3) - 1) * 3 + ((j % 3 === 0 ? 3 : j % 3) - 1)]
            //行
            if (lineValue !== '.'){
                if (line_map[lineValue] === 0) line_map[lineValue] = 1;
                else return false;
            }
            //竖
            if (verticalValue !== '.') {
                if (vertical_map[verticalValue] === 0) vertical_map[verticalValue] = 1
                else return false;
            }
            //九宫格
            if ( gridValue!== '.') {
                if (grid_map[gridValue] === 0) grid_map[gridValue] = 1
                else return false
            }
        }
    }
    return true
};
/*console.log(isValidSudoku(
    [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]));*/
console.log(isValidSudoku(
    [["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]]));
