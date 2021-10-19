/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/18
 */
/*
* https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
* */
var findRepeatNumber = function(nums) {
    let hash = new Set()
    for (let i = 0; i < nums.length; i ++){
        if (hash.has(nums[i])) return nums[i]
        hash.add(nums[i])
    }
};
var findRepeatNumber = function(nums) {
    let n = nums.length - 1
    for (let i = 0; i <= n; i ++){
        if (i === nums[i]) continue;
        while (nums[i] !== i){
            let tem = nums[i]
            if (nums[tem] === tem) return tem
            nums[i] = nums[tem]
            nums[tem] = tem
        }
    }
    return -1
};
// console.log(findRepeatNumber([2,0,2,3,4,5]));
console.log(findRepeatNumber([3, 4, 2, 0, 0, 1]));