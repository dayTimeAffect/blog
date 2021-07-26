/*
* https://leetcode-cn.com/problems/rotate-array/
* */
var rotate = function(nums, k) {
    // 使用额外数组
    let n = nums.length
    let res = []
    for (let i = 0; i < n; i ++){
        res[(i + k) % n] = nums[i]
    }
    for (let i = 0; i < n; i ++){
        nums[i] = res[i]
    }
    return nums
};
const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
};
var rotate = function(nums, k) {
    // 反转数组
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k % nums.length - 1)
    reverse(nums, k % nums.length + 1, nums.length - 1)
};