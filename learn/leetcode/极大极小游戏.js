/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/16
 */
/*
* https://leetcode.cn/problems/min-max-game/
* */
var minMaxGame = function(nums) {
    if (nums.length === 1) return nums[0]
    const tem = new Array(nums.length / 2)
    for (let i = 0; i < tem.length; i ++){
        if (i % 2 === 0){
            tem[i] = Math.min(nums[2 * i], nums[2 * i + 1])
        }else {
            tem[i] = Math.max(nums[2 * i], nums[2 * i + 1])
        }
    }
    return minMaxGame(tem)
};
console.log(minMaxGame([1,3,5,2,4,8,2,2]));
console.log(minMaxGame([3]));