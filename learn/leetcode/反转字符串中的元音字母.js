/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/19
 */
var reverseVowels = function(s) {
    let left = 0, right = s.length - 1;
    let res = s.split('')
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const isVowels = code => vowels.has(code)
    while (left < right){
        if (!isVowels(res[left])) left ++
        if (!isVowels(res[right])) right --
        if (isVowels(res[left]) && isVowels(res[right])){
            [res[left], res[right]] = [res[right], res[left]]
            left ++
            right --
        }
    }
    return res.join('')
};
console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));