/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/7
 */
/*
* https://leetcode.cn/problems/replace-words/
* */
var replaceWords = function(dictionary, sentence) {
    dictionary.sort((a, b) => a.length - b.length)
    let sentenceArr = sentence.split(' ').map(v => {
        for (let d of dictionary){
            let len = d.length
            if (v.substring(0, len) === d) return d
        }
        return v
    })
    return sentenceArr.join(' ')
};
console.log(replaceWords(["catt","bat","rat"], "the cattle was rattled by the battery"));