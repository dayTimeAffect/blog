/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/21
 */
/*
* https://leetcode.cn/problems/VabMRr/
* */
var findAnagrams = function(s, p) {
    let m = s.length, n = p.length, index = []
    if (n > m) return index;
    const p_count = new Array(26).fill(0)
    const tem_count = new Array(26).fill(0)
    for (let i = 0; i < n; i ++){
        p_count[p[i].charCodeAt(0) - 97] ++
        tem_count[s[i].charCodeAt(0) - 97] ++
    }
    const p_count_str = p_count.toString()
    if (p_count_str === tem_count.toString()) index.push(0)
    for (let i = n; i < m; i ++){
        tem_count[s[i].charCodeAt(0) - 97] ++
        tem_count[s[i - n].charCodeAt(0) - 97] --
        if (p_count_str === tem_count.toString()) index.push(i  - n + 1)
    }
    return index
};
console.log(findAnagrams("cbaebabacd", 'abc'));
console.log(findAnagrams("aaaaaaaaaa","aaaaaaaaaaaaa"));