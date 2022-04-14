/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/12
 */
/*
* https://leetcode-cn.com/problems/number-of-lines-to-write-string/
* */
var numberOfLines = function(widths, s) {
    if (s.length === 0) return 0
    const getCharIndex = char => char.charCodeAt(0) - 97
    let tem = 100, line = 1
    for (let i = 0; i < s.length; i ++){
        const width = widths[getCharIndex(s[i])]
        if (width > tem){
            line ++
            tem = 100
        }
        tem -= width
    }
    return [line, 100 - tem]
};
console.log(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "bbbcccdddaaa"));