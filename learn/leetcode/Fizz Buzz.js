/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/13
 */
/*
* https://leetcode-cn.com/problems/fizz-buzz/
* */
var fizzBuzz = function(n) {
    let res = new Array(n).fill("")
    for (let i = 1; i <= n; i ++){
        if (i % 3 !== 0 && i % 5 !== 0) res[i - 1] += i
        if (i % 3 === 0) res[i - 1] += "Fizz"
        if (i % 5 === 0) res[i - 1] += "Buzz"
    }
    return res
};
console.log(fizzBuzz(5));