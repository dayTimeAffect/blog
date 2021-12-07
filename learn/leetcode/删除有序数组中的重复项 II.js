/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/29
 */
/*
* https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/
* */
var removeDuplicates = function(nums) {
    let len = nums.length
    let left = 0, right = 0, map = {}
    while (right < len){
        map[nums[right]] = (map[nums[right]] || 0) + 1
        if (map[nums[right]] <= 2){
            nums[left] = nums[right]
            left ++
        }
        right ++
    }
    console.log(nums);
    return left
};
console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));