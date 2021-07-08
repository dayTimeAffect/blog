/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/8
 */
/*
* https://leetcode-cn.com/problems/two-sum/
* */
var twoSum = function(nums, target) {
    // 两轮for循环
    /*for (let i = 0; i < nums.length; i ++) {
        for (let j = i + 1; j < nums.length; j ++){
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }*/
    // 哈希
    let record = new Map()
    for (let i = 0; i < nums.length; i ++) {
        record.set(target - nums[i], i)
    }
    for (let i = 0; i < nums.length; i ++) {
        if (record.get(nums[i]) && i !== record.get(nums[i])){
            return [i, record.get(nums[i])]
        }
    }
};
console.log(twoSum([3,3], 6));