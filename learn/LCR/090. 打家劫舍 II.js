/**
 * @Author: dayTimeAffect
 * @Date: 2023/9/13
 */
/*
* https://leetcode.cn/problems/PzWKhm/description/
* */
var rob = function(nums) {
    //分类讨论，去掉最后一个与去掉第一个。然后结果取最大值。
    if (nums.length <= 3) return Math.max(...nums)
    const dp_1 = [], dp_2 = []
    dp_1[0] = 0
    dp_1[1] = nums[0]
    dp_2[0] = 0
    dp_2[1] = nums[1]
    for (let i = 1; i < nums.length - 1; i ++){
        dp_1[i + 1] = Math.max(dp_1[i], dp_1[i - 1] + nums[i])
    }
    for (let i = 2; i < nums.length; i ++){
        dp_2[i] = Math.max(dp_2[i - 1], dp_2[i - 2] + nums[i])
    }
    return Math.max(dp_1[nums.length - 1], dp_2[nums.length - 1])
};
console.log(rob([200,3,140,20,10]));
console.log(rob([1,2,1,1]));