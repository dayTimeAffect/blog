/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/15
 */
/*
* https://leetcode.cn/problems/can-make-palindrome-from-substring/
* 优质题解：https://leetcode.cn/problems/can-make-palindrome-from-substring/solution/yi-bu-bu-you-hua-cong-qian-zhui-he-dao-q-yh5p/
* */
var canMakePaliQueries = function(s, queries) {
    let arr = new Array(26).fill(0), res = []
    for (let i = 0; i < s.length; i ++){
        let bit = 1 << s[i].charCodeAt(0) - 'a'.charCodeAt(0)
        arr[i + 1] = arr[i] ^ bit
    }
    for (let [left, right, k] of queries){
        let tem = arr[right + 1] ^ arr[left], flag = 0
        while (tem > 0){
            tem &= tem - 1
            flag ++
        }
        res.push(Math.floor(flag / 2) <= k) //  出现奇数的字母个数，只要有一半能被替换，那么就可以构成回文串
    }
    return res
};
// console.log(canMakePaliQueries('abcda', [[3, 3, 0], [1, 2, 0], [0, 3, 1], [0, 3, 2], [0, 4, 1]]));
console.log(canMakePaliQueries('ofcvmry', [[0,1,0],[5,6,2],[5,5,1],[2,3,2]]));
