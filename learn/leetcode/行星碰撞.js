/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/13
 */
/*
* https://leetcode.cn/problems/asteroid-collision/
* */
var asteroidCollision = function(asteroids) {
    let res = [...asteroids], flag = true
    while (flag && res.length > 0){
        flag = false
        let tem = [res[0]], len = res.length
        for (let i = 1; i < len; i ++){
            let last_v = tem[tem.length - 1]
            if (res[i] < 0 && last_v > 0){
                flag = true
                tem.pop()
                if (-res[i] > last_v){
                    tem.push(res[i])
                }else if (-res[i] < last_v){
                    tem.push(last_v)
                }
            }else {
                tem.push(res[i])
            }
        }
        res = tem
    }
    return res
};
// console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([5,-5]));