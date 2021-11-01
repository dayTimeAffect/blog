/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/21
 */
/*
* https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
* */
var minArray = function(numbers) {
    if (numbers.length === 1) return numbers[0]
    let left = 0, right = numbers.length - 1
    while (left < right){
        let mid = (left + right) >> 1
        if (numbers[mid] < numbers[right]){
            right = mid
        }else if (numbers[mid] > numbers[right]){
            left = mid + 1
        }else{
            right --
        }
    }
    return numbers[left]
};
console.log(minArray([3, 4, 5, 1, 2]));
