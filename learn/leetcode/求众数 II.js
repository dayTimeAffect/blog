/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/12
 */
/*
* https://leetcode.cn/problems/majority-element-ii/
* */
var majorityElement = function(nums) {
    let len = nums.length, map = {}
    for (let i = 0; i < len; i ++){
        if (map[nums[i]]){
            map[nums[i]] ++
        }else {
            map[nums[i]] = 1
        }
    }
    return Object.keys(map).filter(v => map[v] / len > (1 / 3))
};
console.log(majorityElement([3,2,3]));