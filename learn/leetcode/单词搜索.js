/*
* https://leetcode.cn/problems/word-search/
* */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length, n = board[0].length
    const check = (i, j, k) => {
        if (board[i][j] !== word[k]) return false
        if (k === word.length - 1) return true
        let cur = board[i][j]
        board[i][j] = false
        if (i + 1 < m && board[i + 1][j] && check(i + 1, j, k + 1)) return true
        if (i - 1 >= 0 && board[i - 1][j] && check(i - 1, j, k + 1)) return true
        if (j + 1 < n && board[i][j + 1] && check(i, j + 1, k + 1)) return true
        if (j - 1 >= 0 && board[i][j - 1] && check(i, j - 1, k + 1)) return true
        board[i][j] = cur
        return false
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (check(i, j, 0)) return true;
        }
    }
    return false
};
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCCED'));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"));
console.log(exist([["b"],["a"],["b"]], "bbabab"));