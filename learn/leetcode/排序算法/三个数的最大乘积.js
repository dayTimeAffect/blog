/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/8
 */
/*
* https://leetcode.cn/problems/maximum-product-of-three-numbers/
* */
var maximumProduct = function(nums) {
    if (nums.length === 3) return nums[0] * nums[1] * nums[2]
    const quicksort = (nums) => {
        if (nums.length <= 1) return nums
        let base = nums[0], len = nums.length
        let less = [], greater = [], equal = []
        for (let i = 0; i < len; i ++){
            if (nums[i] === base){
                equal.push(nums[i])
            }else if (nums[i] > base){
                greater.push(nums[i])
            }else{
                less.push(nums[i])
            }
        }
        return [...quicksort(less), ...equal, ...quicksort(greater)]
    }
    const sortNums = quicksort(nums), len = nums.length
    return Math.max( sortNums[0] * sortNums[1] * sortNums[len - 1], sortNums[len - 3] * sortNums[len - 2] * sortNums[len - 1])
};
console.log(maximumProduct([-100,-2,-3,1]));