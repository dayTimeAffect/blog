/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/1
 */
/*
* https://leetcode.cn/problems/decode-the-message/
* */
var decodeMessage = function(key, message) {
    const map = new Map()
    let resMes = ''
    for (let i = 0, j = 0; i < key.length; i ++){
        if (key[i] === ' ' || map.has(key[i])) continue;
        map.set(key[i], String.fromCharCode(97 + (j ++)))
    }
    console.log(map);
    for (let i = 0; i < message.length; i ++){
        if (message[i] === ' '){
            resMes += ' '
        }else {
            resMes += map.get(message[i])
        }
    }
    return resMes
};
console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));