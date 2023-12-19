/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/25
 */
/*
* https://leetcode.cn/problems/aMhZSa/
* */
var isPalindrome = function(head) {
    let slow = head, fast = head, valArr = [], nodeNum = 0
    while (fast){
        if (fast.next){
            fast = fast.next.next
            nodeNum += 2
        }else {
            fast = fast.next
            nodeNum += 1
        }
        valArr.push(slow.val)
        slow = slow.next
    }
    let i = valArr.length - 1 - (nodeNum % 2)
    while (slow && i >= 0){
        if (slow.val === valArr[i]){
            i --
            slow = slow.next
        }else {
            return false
        }
    }
    return true
};
console.log(isPalindrome(
    {val: 1, next: {
            val: 2, next: {
                val: 3, next: {
                    val: 2, next: {
                        val: 1, next: null
                    }
                }
            }
        }}
));
console.log(isPalindrome(
    {val: 1, next: {
            val: 2, next: {
                val: 3, next: {
                    val: 3, next: {
                        val: 2, next: {
                            val: 1, next: null
                        }
                    }
                }
            }
        }}
));
console.log(isPalindrome(
    {val: 1, next: {
            val: 2, next: null
        }}
));
console.log(isPalindrome(
    {val: 1, next: null}
));