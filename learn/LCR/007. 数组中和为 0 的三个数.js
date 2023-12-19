/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/21
 */
/*
* https://leetcode.cn/problems/1fGaJU/
* */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < nums.length - 2; i ++){
        if (nums[i] > 0) return res
        if (nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1, tem = -nums[i]
        while (left < right){
            if (nums[left] + nums[right] === tem) {
                res.push([nums[i], nums[left], nums[right]])
                while (nums[left] === nums[left + 1]){
                    left ++
                }
                while (nums[right] === nums[right - 1]){
                    right --
                }
                left ++
                right --
            }else if (nums[left] + nums[right] > tem){
                right --
            }else {
                left ++
            }
        }
    }
    return res
};
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([-2,0,1,1,2]));