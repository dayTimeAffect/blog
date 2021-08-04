/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/4
 */
/*
* https://leetcode-cn.com/problems/valid-triangle-number/
* */
// 两边之和大于第三边，两边只差小于第三边
/*var triangleNumber = function(nums) {
    // 三轮循环
    let count = 0
    let n = nums.length - 1
    if (n < 2) return count
    for (let i = 0; i <= n; i ++){
        for (let j = i + 1; j <= n; j ++){
            for (let k = j + 1; k <= n; k ++){
                if (nums[i] + nums[j] > nums[k] && Math.abs(nums[i] - nums[j]) < nums[k]) count ++
            }
        }
    }
    return count
};*/
/*var triangleNumber = function(nums) {
    // 先排序，再使用二分法查找第三条边最大的可能值的位置
    // 排序后，只要 a + b > c。那么一定是个三角形
    // 固定a,b。二分查找c，每一轮查找c时间复杂度为logn，所以总时间复杂度为n^2*logn
    let count = 0
    let n = nums.length - 1
    if (n < 2) return count
    let sortNums = nums.sort((a, b) => a - b)
    for (let a = 0; a <= n - 2; a ++){
        if (sortNums[a] === 0) continue;
        for (let b = a + 1; b <= n - 1; b ++){
            let left = b + 1, right = n, c = b
            while (left <= right){
                let mid = Math.floor((left + right) / 2)
                if (sortNums[a] + sortNums[b] > sortNums[mid]){
                    c = mid
                    left = mid + 1
                }else{
                    right = mid - 1
                }
            }
            count += c - b
        }
    }
    return count
};*/
var triangleNumber = function(nums) {
    // 先排序，再使用双指针维护一个范围
    // 排序后，只要 a + b > c。那么一定是个三角形
    // 当固定a之后，再固定b，移动c,寻找最大边界。如果b增加，那么再移动c寻找最新边界。每一轮，寻找b、c的边界的时间复杂度为n。所以总时间复杂度为n^2
    let count = 0
    let n = nums.length - 1
    if (n < 2) return count
    let sortNums = nums.sort((a, b) => a - b)
    for (let a = 0; a <= n - 2; a ++){
        if (sortNums[a] === 0) continue;
        let c = a + 2
        for (let b = a + 1; b <= n - 1; b ++){
            while (c <= n && sortNums[a] + sortNums[b] > sortNums[c]){
                c ++
            }
            count += c - b - 1
        }
    }
    return count
};
console.log(triangleNumber([2, 3, 4]));
console.log(triangleNumber([2, 3, 4, 5]));