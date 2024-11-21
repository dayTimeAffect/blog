/**
 * @Author: dayTimeAffect
 * @Date: 2024/7/24
 */
/*
* https://leetcode.cn/problems/1-bit-and-2-bit-characters/description/
* */
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    if (bits[bits.length - 1] !== 0) return false
    const handle = (i) => {
        if (i < 0) return true
        if (bits[i] === 1 && bits[i - 1] === 1) return handle(i - 2)
        if (bits[i] === 0){
            if (bits[i - 1] === 1) return handle(i - 2) || handle(i - 1);
            return handle(i - 1)
        }
        return false
    }
    return handle(bits.length - 2)
};
console.log(isOneBitCharacter([1, 0, 0]));
console.log(isOneBitCharacter([1,1,1,0]));