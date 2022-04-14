/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/29
 */
/*
* https://leetcode-cn.com/problems/maximize-the-confusion-of-an-exam/
* */
var maxConsecutiveAnswers = function(answerKey, k) {
    const findAnswersMaxLen = (answer) => {
        let cur = 0, left = 0, right = 0, maxLen = 0
        for (let i = 0; i < answerKey.length; i ++){
            left ++
            if (answerKey[i] === answer){
                if (cur < k){
                    cur ++
                }else{
                    for (let j = right; j < left; j ++){
                        if (answerKey[j] === answer){
                            right = j + 1
                            break;
                        }
                    }
                }
            }
            maxLen = Math.max(maxLen, left - right)
        }
        return maxLen
    }
    return Math.max(findAnswersMaxLen('T'), findAnswersMaxLen('F'))
};
console.log(maxConsecutiveAnswers('TTFF', 2));
console.log(maxConsecutiveAnswers('TFFT', 1));
console.log(maxConsecutiveAnswers('TTFTTFTT', 1));
console.log(maxConsecutiveAnswers("FFFTTFTTFT", 3));