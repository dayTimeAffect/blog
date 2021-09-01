/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/31
 */
/*
* https://leetcode-cn.com/problems/corporate-flight-bookings/
* */
var corpFlightBookings = function(bookings, n) {
    // 差分数组
    let res = new Array(n + 1).fill(0), len = bookings.length;
    for (let i = 0; i < len; i ++){
        res[bookings[i][0] - 1] += bookings[i][2]
        res[bookings[i][1]] -= bookings[i][2]
    }
    for (let i = 1; i < n; i ++){
        res[i] = res[i - 1] + res[i]
    }
    return res.slice(0, n)
};
console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5));
console.log(corpFlightBookings([[1,2,10],[2,2,15]], 2));