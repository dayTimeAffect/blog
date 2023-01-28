/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/16
 */
/*
* https://leetcode.cn/problems/sentence-similarity-iii/
* */
var areSentencesSimilar = function(sentence1, sentence2) {
    const arr1 = sentence1.split(" "), arr2 = sentence2.split(" ")
    if (arr1.length === arr2.length) return sentence1 === sentence2
    const short = arr1.length < arr2.length ? arr1 : arr2
    const long = arr1.length > arr2.length ? arr1 : arr2
    let i = 0, j = 0
    //从左判断有多少个相同的字符
    while (i < short.length && i < long.length && short[i] === long[i]){
        i ++
    }
    //从右判断有多少个相同字符。但是为了避免（a, a b a）这种情况。从右判断时，只用判断剩下的字符串
    while (j < short.length - i && j < long.length - i && short[short.length - j - 1] === long[long.length - j - 1]){
        j ++
    }
    return i + j === short.length
};
console.log(areSentencesSimilar("My name is Haley", "My Haley"));
console.log(areSentencesSimilar("of", "A lot of words"));
console.log(areSentencesSimilar("Eating right now", "Eating"));
console.log(areSentencesSimilar("UI wqhw Lf", "ezzXqqEQcS"));