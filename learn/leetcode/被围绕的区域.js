/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/16
 */
/*
* https://leetcode.cn/problems/surrounded-regions/description/
* */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let m = board.length, n = board[0].length
    const dfs = (i, j) => {
        board[i][j] = 'A'
        if (i - 1 >= 0 && board[i - 1][j] === 'O') dfs(i - 1, j)
        if (i + 1 < m && board[i + 1][j] === 'O') dfs(i + 1, j)
        if (j - 1 >= 0 && board[i][j - 1] === 'O') dfs(i, j - 1)
        if (j + 1 < n && board[i][j + 1] === 'O') dfs(i, j + 1)
    }

    for (let i = 0; i < m; i ++){
        if (board[i][0] === 'O'){
            dfs(i, 0)
        }
        if (board[i][n - 1] === 'O'){
            dfs(i, n - 1)
        }
    }
    for (let i = 0; i < n; i ++){
        if (board[0][i] === 'O'){
            dfs(0, i)
        }
        if (board[m - 1][i] === 'O'){
            dfs(m - 1, i)
        }
    }
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            } else if
            (board[i][j] === 'A') {
                board[i][j] = 'O'
            }
        }
    }
    return board
};