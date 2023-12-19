/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/21
 */
/*
* https://leetcode.cn/problems/kLl5u1/
* */
var twoSum = function(numbers, target) {
    if (numbers.length === 2) return [0, 1]
    for (let i = 0; i < numbers.length; i ++){
        let left = i + 1, right = numbers.length - 1, tem = target - numbers[i]
        while (left <= right){
            let mid = Math.floor((left + right) / 2)
            if (numbers[mid] === tem) return [i, mid]
            if (numbers[mid] > tem){
                right = mid - 1
            }else {
                left = mid + 1
            }
        }
    }
};
console.log(twoSum([1,2,4,6,10], 8));
console.log(twoSum([2,3,4], 6));