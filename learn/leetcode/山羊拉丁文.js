/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/21
 */
/*
* https://leetcode-cn.com/problems/goat-latin/
* */
var toGoatLatin = function(sentence) {
    let tem = sentence.split(" "), temA = "maa"
    for (let i = 0; i < tem.length; i ++){
        if (!["a", "e", "i", "o", "u"].includes(tem[i][0].toLowerCase())){
            tem[i] = tem[i].slice(1) + tem[i][0]
        }
        tem[i] += temA
        temA += "a"
    }
    return tem.join(" ")
};
console.log(toGoatLatin("I speak Goat Latin"));