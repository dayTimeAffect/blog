/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/3
 */
/*
* https://leetcode.cn/problems/bulls-and-cows/description/
* */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let A = 0, B = 0, len = secret.length;
    let map_secret = {}
    for (let i = 0; i < len; i ++){
        if (secret[i] === guess[i]) {
            A++
        }else {
            map_secret[secret[i]] = (map_secret[secret[i]] || 0) + 1
        }
    }
    for (let i = 0; i < len; i ++){
        if (secret[i] !== guess[i] && map_secret[guess[i]]){
            B ++
            map_secret[guess[i]] --
        }
    }
    return `${A}A${B}B`
};