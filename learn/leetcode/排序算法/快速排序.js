/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/3
 */
/*
* 原理：
*   随便取一个基准值，将数组分为大于基准值的greater和小于基准值的less
*   那么 less + 基准值 + greater就已经相对有序了
*   继续对less、greater进行重复的操作
*   最后返回的所有小的有序的数组进行拼接，此时的数组就是个有序的数据
*   O(nlogn)
* */
const quicksort = (nums) => {
    if (nums.length <= 1) return nums
    let base = nums[0], len = nums.length
    let less = [], greater = [], equal = []
    for (let i = 0; i < len; i ++){
        if (nums[i] === base){
            equal.push(nums[i])
        }else if (nums[i] > base){
            greater.push(nums[i])
        }else{
            less.push(nums[i])
        }
    }
    return [...quicksort(less), ...equal, ...quicksort(greater)]
}
console.log(quicksort([2,5,9,4,3,6,4,1,5,9,5,3]));