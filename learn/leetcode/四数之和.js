/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/16
 */
/*
* https://leetcode-cn.com/problems/4sum/
* */
var fourSum = function(nums, target) {
    if (nums.length < 4) return []
    nums.sort((a, b) => a - b)
    let res = new Set(), len = nums.length - 1
    for (let i = 0; i <= len - 3; i ++){
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break;
        }
        if (nums[i] + nums[len - 2] + nums[len - 1] + nums[len] < target) {
            continue;
        }
        for (let j = i + 1; j <= len - 2; j ++){
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                break;
            }
            if (nums[i] + nums[j] + nums[len - 1] + nums[len] < target) {
                continue;
            }
            let m = j + 1, n = len, tem = target - nums[i] - nums[j]
            while (m < n){
                if (tem === nums[m] + nums[n]) {
                    res.add(JSON.stringify([nums[i], nums[j], nums[m], nums[n]]))
                    n --
                    m ++
                }
                if (tem < nums[m] + nums[n]) n --
                if (tem > nums[m] + nums[n]) m ++
            }
        }
    }
    return Array.from(res).map(v => JSON.parse(v))
};
var fourSum = function(nums, target) {
    const quadruplets = [];
    if (nums.length < 4) {
        return quadruplets;
    }
    nums.sort((x, y) => x - y);
    const length = nums.length;
    for (let i = 0; i < length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break;
        }
        if (nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {
            continue;
        }
        for (let j = i + 1; j < length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                break;
            }
            if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {
                continue;
            }
            let left = j + 1, right = length - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    left++;
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return quadruplets;
};
// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// console.log(fourSum([2,2,2,2,2], 8));
// console.log(fourSum([-5,5,4,-3,0,0,4,-2], 4));
// console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11));
console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11));