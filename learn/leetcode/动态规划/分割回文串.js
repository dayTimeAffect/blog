/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/6
 */
/*
* https://leetcode-cn.com/problems/palindrome-partitioning/
* */
var partition = function(s) {
    let res = [], tem = [], len = s.length
    //默认子串均为回文串，即包含长度为1的子串
    let f = new Array(len).fill(0).map(v => new Array(len).fill(true))
    for (let i = len - 1; i >= 0; i --){
        for (let j = i + 1; j < len; j ++){
            //首尾字符相同且 s[i+1..j-1]s[i+1..j−1] 为回文串
            f[i][j] = (s[i] === s[j]) && f[i + 1][j - 1]
        }
    }
    const dfs = (i) => {
        if (i === len) {
            res.push([...tem]);
            return;
        }
        for (let j = i; j < len; j ++) {
            if (f[i][j]) {
                tem.push(s.slice(i, j + 1));
                dfs(j + 1);
                tem.pop();
            }
        }
    }
    dfs(0)
    return res
};
console.log(partition('aab'));