/**
 * @Author: dayTimeAffect
 * @Date: 2023/9/26
 */
/*
* https://leetcode.cn/problems/pass-the-pillow/?envType=daily-question&envId=2023-09-26
* */
var passThePillow = function(n, time) {
    if (Math.floor(time / (n - 1)) % 2 === 0){
        return time % (n - 1) + 1
    }else {
        return n - time % (n - 1)
    }
};