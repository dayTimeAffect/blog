/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/22
 */
/*
* https://leetcode-cn.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
* */
var winnerOfGame = function(colors) {
    let aSum = 0, bSum = 0, cur = '', count = 0
    for (let i = 0; i < colors.length; i ++){
        if (colors[i] !== cur){
            cur = colors[i]
            count = 1
        }else{
            count ++
            if (count >= 3){
                if (cur === 'A') aSum ++
                if (cur === 'B') bSum ++
            }
        }
    }
    return aSum > bSum
};