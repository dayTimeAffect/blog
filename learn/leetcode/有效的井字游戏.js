/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/9
 */
/*
* https://leetcode-cn.com/problems/valid-tic-tac-toe-state/
* */
//X字符可以比O字符多一个，但不能少
//不能同时存在X过关与O过关
var validTicTacToe = function(board) {
    const isWin = (tag) => {
        let res = tag + tag + tag
        for (let i = 0; i < 3; i ++){
            if (board[i][0] + board[i][1] + board[i][2] === res) return true
            if (board[0][i] + board[1][i] + board[2][i] === res) return true
        }
        return (board[0][0] + board[1][1] + board[2][2] === res || board[0][2] + board[1][1] + board[2][0] === res)
    }
    let X = 0, O = 0, isWinX = isWin('X'), isWinO = isWin('O')

    for (let i = 0; i < 3; i ++){
        for (let j = 0; j < 3; j ++){
            if (board[i][j] === 'X') X ++
            if (board[i][j] === 'O') O ++
        }
    }
    //X赢，那么X必须比O多一个
    if (isWinX && !isWinO) return X - O === 1
    //O赢，那么X必须和O的数量相同
    if (!isWinX && isWinO) return X === O
    //两个都不赢，只能按先手算，X最多多一个，或者相同
    if (!isWinX && !isWinO) return X >= O && X - O <= 1
    //不可能两个都赢
    return false
}
console.log(validTicTacToe(["XOX", "O O", "XOX"]));
// console.log(validTicTacToe(["XXX","   ","OOO"]));
// console.log(validTicTacToe(["   ","   ","   "]));
// console.log(validTicTacToe(["O  ","   ","   "]));
// console.log(validTicTacToe(["XXX","XOO","OO "]));