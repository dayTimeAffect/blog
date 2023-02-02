/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/28
 */
/*
* https://leetcode.cn/problems/ways-to-make-a-fair-array/
* */
//暴力模拟
var waysToMakeFair = function(nums) {
    let count = 0, oddSum = 0, evenSum = 0
    for (let i = 0; i < nums.length; i ++){
        let temOddSum = oddSum, temEvenSum = evenSum
        for (let j = i + 1; j <nums.length; j ++){
            if ((j - 1) % 2 === 0){
                temEvenSum += nums[j]
            }else {
                temOddSum += nums[j]
            }
        }
        count += Number(temOddSum === temEvenSum)
        if (i % 2 === 0){
            evenSum += nums[i]
        }else {
            oddSum += nums[i]
        }
    }
    return count
};
//前缀和
var waysToMakeFair = function(nums) {
    let count = 0, oddPrefixArr = [0], evenPrefixArr = [nums[0], nums[0]]
    for (let i = 1; i < nums.length; i ++){
        if (i % 2 === 0){
            evenPrefixArr[i + 1] = evenPrefixArr[i] = evenPrefixArr[i - 1] + nums[i]
        }else {
            oddPrefixArr[i + 1] = oddPrefixArr[i] = oddPrefixArr[i - 1] + nums[i]
        }
    }
    for (let i = 0; i < nums.length; i ++){
        //删除元素前的奇数前缀和 + 删除元素后的偶数前缀和
        //删除元素前的偶数前缀和 + 删除元素后的奇数前缀和
        if (
            ((oddPrefixArr[i - 1] || 0) + (evenPrefixArr[nums.length - 1] - evenPrefixArr[i]))
            ===
            ((evenPrefixArr[i - 1] || 0) + (oddPrefixArr[nums.length - 1] - oddPrefixArr[i]))
        ){
            count ++
        }
    }
    return count
};
console.log(waysToMakeFair([2,1,6,4]));
console.log(waysToMakeFair([1,1,1]));
console.log(waysToMakeFair([1,2,3]));