/**
 * @Author: dayTimeAffect
 * @Date: 2024/10/9
 */
/*
* https://leetcode.cn/problems/find-smallest-letter-greater-than-target/description/?envType=problem-list-v2&envId=array&difficulty=EASY
* */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let res = false
    for (let i = 0; i < letters.length; i ++){
        if (letters[i] > target){
            if (res){
                res = res > letters[i] ? letters[i] : res
            }else {
                res = letters[i]
            }
        }
    }
    return res ? res : letters[0]
};