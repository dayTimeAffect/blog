/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/11
 */
/*
* https://leetcode.cn/problems/battleships-in-a-board/description/?envType=daily-question&envId=2024-06-11
* */
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let res = 0
    for (let i = 0; i < board.length; i ++){
        for (let j = 0; j < board[0].length; j ++){
            if (board[i][j] === 'X'){
                if (i === 0 && j === 0) {
                    res ++
                }else if(i === 0 && j !== 0){
                    if (board[i][j - 1] !== 'X') res ++
                }else if(j === 0 && i !== 0){
                    if (board[i - 1][j] !== 'X') res ++
                }else if (board[i][j - 1] !== 'X' && board[i - 1][j] !== 'X'){
                    res ++
                }
            }
        }
    }
    return res
};