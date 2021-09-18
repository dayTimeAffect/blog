/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/18
 */
/*
* https://leetcode-cn.com/problems/nim-game/
* */
var canWinNim = function(n) {
    // 博弈论，找规律，证明
    // 1 - 3,先手比赢，4后手必输
    // 5 - 7，先手比赢，8后手必输
    // 9 - 11...
    return n % 4 !== 0
};