/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/7
 */
/*
* https://leetcode.cn/problems/3sum/submissions/
* */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let res = []
    if (nums.length < 3) return []
    for (let i = 0; i < nums.length - 2; i ++){
        let cur = nums[i]
        if (nums[i] === nums[i - 1]) continue;
        if (cur > 0) return res
        let left = i + 1, right = nums.length - 1
        while (left < right){
            if (cur + nums[left] + nums[right] === 0) {
                res.push([cur, nums[left], nums[right]])
                while (nums[left] === nums[left + 1]){
                    left ++
                }
                while (nums[right] === nums[right - 1]){
                    right --
                }
                left ++
                right --
            }else if (cur + nums[left] + nums[right] > 0){
                right --
            }else {
                left ++
            }
        }
    }
    return res
};
console.log(threeSum([-1,0,1,2,-1,-4]));