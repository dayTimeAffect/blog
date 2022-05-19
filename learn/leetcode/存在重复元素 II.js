/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/5
 */
/*
* https://leetcode-cn.com/problems/contains-duplicate-ii/
* */
var containsNearbyDuplicate = function(nums, k) {
    let len = nums.length, map = new Set()
    if (len <= 1) return false
    for (let l = 0, r = 0; r < len; r ++){
        if (r - l > k){
            map.delete(nums[l ++])
        }
        if (map.has(nums[r])) return true
        map.add(nums[r])
    }
    return false
};
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));