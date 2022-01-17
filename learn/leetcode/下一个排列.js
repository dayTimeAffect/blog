/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/11
 */
/*
* https://leetcode-cn.com/problems/next-permutation/
* */
var nextPermutation = function(nums) {
    if (nums.length <= 2) {
        nums.reverse()
        return nums
    }
    const sort = (index) => {
        let len = nums.length - 1, mid = (len - index) >> 1
        for (let i = 0; i <= mid; i ++){
            [nums[index + i], nums[len - i]] = [nums[len - i], nums[index + i]]
        }
    }
    let len = nums.length, flag = true
    for (let i = len - 1; i > 0; i --){
        if (nums[i] > nums[i - 1]){
            flag = false
            let tem = nums[i - 1], index= i, handleIndex = i
            while (index < len){
                if (nums[index] > tem && nums[index] <= nums[handleIndex]) handleIndex = index
                index ++
            }
            nums[i - 1] = nums[handleIndex]
            nums[handleIndex] = tem
            sort(i)
            break;
        }
    }
    if (flag) nums.reverse()
    return nums
};
// console.log(nextPermutation([1,2,3]));
// console.log(nextPermutation([3,2,1]));
// console.log(nextPermutation([0,5,4,3,2,1]));
// console.log(nextPermutation([1,3,2]));
console.log(nextPermutation([2,3,1,3,3]));
console.log(nextPermutation([2,1,3,3,3]));
