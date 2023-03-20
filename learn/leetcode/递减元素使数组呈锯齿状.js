/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/27
 */
/*
* https://leetcode.cn/problems/decrease-elements-to-make-array-zigzag/
* */
var movesToMakeZigzag = function(nums) {
    let tem1 = [...nums], tem2 = [...nums], flag = nums.reduce((sum, next) => sum + next)
    for (let i = 1; i < nums.length; i ++){
        //偶数索引最大模拟
        if (i % 2 === 0) {
            if (tem1[i] <= tem1[i - 1]){
                tem1[i - 1] = tem1[i] - 1
            }
        }else {
            if (tem1[i] >= tem1[i - 1]){
                tem1[i] = tem1[i - 1] - 1
            }
        }

        //奇数索引最大模拟
        if (i % 2 === 0) {
            if (tem2[i] >= tem2[i - 1]){
                tem2[i] = tem2[i - 1] - 1
            }
        }else {
            if (tem2[i] <= tem2[i - 1]){
                tem2[i - 1] = tem2[i] - 1
            }
        }
    }
    return Math.min(tem1.reduce((sum, next) => sum - next, flag), tem2.reduce((sum, next) => sum - next, flag))
};
console.log(movesToMakeZigzag([1,2,3]));
console.log(movesToMakeZigzag([9,6,1,6,2]));
console.log(movesToMakeZigzag([2,7,10,9,8,9]));
console.log(movesToMakeZigzag([10,4,4,10,10,6,2,3]));