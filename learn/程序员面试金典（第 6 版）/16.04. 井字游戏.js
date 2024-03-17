/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/23
 */
/*
* https://leetcode.cn/problems/tic-tac-toe-lcci/description/
* */
/**
 * @param {string[]} board
 * @return {string}
 */
var tictactoe = function(board) {
    let N = board.length, map = {"X": 1, "O": -1, " ": 0}, hasEmpty = false
    for (let i = 0; i < N; i ++){
        let temp = [0, 0, 0] // 横向 纵向 对角线
        for (let j = 0; j < N; j ++){
            if (board[i][j] === " "){
                hasEmpty = true
            }
            temp[0] += map[board[i][j]]
            temp[1] += map[board[j][i]]
            if (i === 0){
                // 正对角线
                temp[2] += map[board[j][j]]
            }
            if (i === N - 1){
                // 反对角线
                temp[2] += map[board[j][N - 1 - j]]
            }
        }
        console.log(temp);
        if (Math.abs(temp[0]) === N || Math.abs(temp[1]) === N || Math.abs(temp[2]) === N){
            return temp[0] === N || temp[1] === N || temp[2] === N ? "X" : "O"
        }
    }
    return hasEmpty ? "Pending" : "Draw"
};
// console.log(tictactoe(["O X", " XO", "X O"]));
console.log(tictactoe(["O X"," XO","X O"]));