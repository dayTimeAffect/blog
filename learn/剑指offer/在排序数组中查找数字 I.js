/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/16
 */
/*
* https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
* */
const helper = (nums, target, boundary) =>{
    // boundary true为右边界，false为左边界
    let left = 0, right = nums.length - 1
    while (left <= right){
        const mid = Math.floor((right + left) / 2)
        if (nums[mid] > target || (boundary && nums[mid] === target)){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return boundary ? right : left
}
var search = function(nums, target) {
    // 分别找到分别大于或者小于target的边界值
    let left = helper(nums, target, true)
    let right = helper(nums, target, false)
    return right - left - 1
};
console.log(search([5,7,7,8,8,10], 8));