/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/26
 */
/*
* https://leetcode-cn.com/problems/boats-to-save-people/
* */
var numRescueBoats = function(people, limit) {
    //排序+双指针。优先安排体重最重的，假设每一轮体重最重的单独一个船，判断船上剩余空间是否还可以放一个体重最轻的。
    let sortPeople = people.sort((a, b) => a - b), n = people.length
    let left = 0, right = n - 1, res = 0;
    while (left <= right){
        if (sortPeople[right] + sortPeople[left] <= limit){
            left ++
        }
        right --
        res ++
    }
    return res
};
console.log(numRescueBoats([1, 2], 3));
console.log(numRescueBoats([3,2,2,1], 3));
console.log(numRescueBoats([3,5,3,4], 5));