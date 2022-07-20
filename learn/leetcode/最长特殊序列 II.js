/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/27
 */
/*
* https://leetcode.cn/problems/longest-uncommon-subsequence-ii/
* */
var findLUSlength = function(strs) {
    const judge = (str1, str2) => {
        if (str1.length === str2.length) return str1 === str2
        let i = 0, j = 0
        while (i < str1.length && j < str2.length){
            if (str1[i] === str2[j]){
                i ++
            }
            j ++
        }
        return i === str1.length
    }
    strs.sort((a, b) => b.length - a.length)
    for (let i = 0; i < strs.length; i ++){
        let flag = true
        for (let j = 0; j < strs.length; j ++) {
            if (strs[i].length > strs[j].length) continue;
            if (i !== j && judge(strs[i], strs[j])){
                flag = false
            }
        }
        if (flag){
            return strs[i].length
        }
    }
    return -1
};
console.log(findLUSlength(["aaa","aaa","aa"]));