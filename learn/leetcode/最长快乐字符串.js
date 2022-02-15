/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/7
 */
/*
* https://leetcode-cn.com/problems/longest-happy-string/
* */
var longestDiverseString = function(a, b, c) {
    let res = '', arr = [[a, 'a'], [b, 'b'], [c, 'c']]
    while (1){
        arr.sort((a, b) => b[0] - a[0])
        let next = false
        for (const [i, [count, text]] of arr.entries()){
            if (count <= 0) break;
            let len = res.length;
            if (len >= 2 && res[len - 2] === text && res[len - 1] === text) continue;
            res += text
            arr[i][0] --
            next = true
            break;
        }
        if (!next) break;
    }
    return res
};
// console.log(longestDiverseString(2,2,1));
console.log(longestDiverseString(1,1,7));