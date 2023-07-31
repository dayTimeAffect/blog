/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/24
 */
/*
* https://leetcode.cn/problems/jewels-and-stones/
* */
var numJewelsInStones = function(jewels, stones) {
    let jewelsMap = {}, res = 0
    for (let key of jewels){
        jewelsMap[key] = true
    }
    for (let key of stones){
        if (jewelsMap[key]) res ++
    }
    return res
};