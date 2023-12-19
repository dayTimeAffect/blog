/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/27
 */
/*
* https://leetcode.cn/problems/M1oyTv/
* */
const RecordMap = function (arr = [], char){
    let map = {charMap: {}}
    for (let key of char){
        map.charMap[key] = 0
    }
    map.charMap.length = arr.length
    for (let i = 0; i < arr.length; i ++){
        map.charMap[arr[i]] ++
    }
    map.add = (key) => {
        if (char.has(key)) map.charMap[key] ++
        map.charMap.length ++
    }
    map.delete = (key) => {
        if (map.charMap[key]) {
            map.charMap[key] --
            map.charMap.length --
        }
    }
    map.isContain = (otherMap) => {
        if (map.charMap.length < otherMap.charMap.length) return false
        for (let key in map.charMap){
            if (map.charMap[key] < otherMap.charMap[key]) return false
        }
        return true
    }
    return map
}
var minWindow = function(s, t) {
    const m = s.length, n = t.length
    if (m < n) return ''
    const char = new Set(t.split(''))
    let tMap = new RecordMap(t.split(''), char)
    let temMap = new RecordMap([], char)
    let ans = ''
    for (let i = 0;  i < n; i ++){
        temMap.add(s[i])
    }
    if (temMap.isContain(tMap)) return s.slice(0, n)
    for (let i = n, j = 0; i < m; i ++){
        temMap.add(s[i])
        if (temMap.isContain(tMap)){
            while (temMap.isContain(tMap)){
                temMap.delete(s[j])
                j ++
            }
            if (i - j + 1 < ans.length || ans === ''){
                if (i - j + 1 === t.length - 1) return s.slice(j - 1, i + 1)
                ans = s.slice(j - 1, i + 1)
            }
        }
    }
    return ans
};
// console.log(minWindow("ADOBECODEBANC", "ABC"));
// console.log(minWindow("bca", "ca"));
// console.log(minWindow("a", "b"));
// console.log(minWindow("ab", "b"));
// console.log(minWindow("bbaa", "aba"));
console.log(minWindow("bdab", "ab"));
