/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/7
 */
/*
* https://leetcode-cn.com/problems/ransom-note/
* */
var canConstruct = function(ransomNote, magazine) {
    const map = new Array(26).fill(0)
    for (let val of magazine){
        map[val.charCodeAt(0) - 97] ++
    }
    for (let val of ransomNote){
        map[val.charCodeAt(0) - 97] --
    }
    return !map.find(v => v < 0)
};
console.log(canConstruct('a', 'b'));