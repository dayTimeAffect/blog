/**
 * 小行星碰撞
 * https://leetcode.cn/problems/XagZNi/
 */
var asteroidCollision = function(asteroids) {
    let flag = true
    while(flag && asteroids.length > 1){
        flag = false
        let tem = [asteroids[0]]
        for(let i = 1; i < asteroids.length; i ++){
            if (asteroids[i] < 0 && tem[tem.length - 1] > 0){
                flag = true
                while(tem.length && tem[tem.length - 1] > 0){
                    let num = tem.pop()
                    if (num > -asteroids[i]){
                        asteroids[i] = 0
                        tem.push(num)
                        break;
                    } else if (num === -asteroids[i]){
                        asteroids[i] = 0
                        break;
                    }
                }
                if (asteroids[i] < 0) tem.push(asteroids[i])
            }else{
                tem.push(asteroids[i])
            }
        }
        asteroids = tem
    }
    return asteroids
};
console.log(asteroidCollision([-2,-2,1,-2]))