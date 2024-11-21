/**
 * @Author: dayTimeAffect
 * @Date: 2024/10/31
 */
/*
* https://leetcode.cn/problems/shortest-distance-to-a-character/description/?envType=problem-list-v2&envId=array&difficulty=EASY
* */
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const n = s.length;
    const ans = new Array(n).fill(0);

    for (let i = 0, idx = -n; i < n; ++i) {
        if (s[i] === c) {
            idx = i;
        }
        ans[i] = i - idx;
    }

    for (let i = n - 1, idx = 2 * n; i >= 0; --i) {
        if (s[i] == c) {
            idx = i;
        }
        ans[i] = Math.min(ans[i], idx - i);
    }
    return ans;
};