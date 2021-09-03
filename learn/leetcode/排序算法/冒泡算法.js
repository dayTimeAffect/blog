/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/3
 */
/*
* 原理：
* 重复遍历需要排序的列，每一次比较相邻两个元素，将大（小）的值向后交换，则每一趟遍历结束，最后的一个数就是最大（小）的值，
* 循环n - 1 次
* O(n^2)
* 优化：设定一个状态，如果某一趟状态没有被改变，那么就不用继续循环了
* */
const bubbleSort = (nums) => {
    if (nums.length <= 1) return nums
    let isComplete = true, len = nums.length;
    for (let i = 0; i < len; i ++){
        isComplete = true
        for (let j = 1; j < len - i; j ++){
            if (nums[j - 1] > nums[j]) {
                isComplete = false;
                [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
            }
        }
        if (isComplete) break;
    }
    return nums
}
console.log(bubbleSort([6, 5, 4, 3, 2, 1, 8, 10, 9]));