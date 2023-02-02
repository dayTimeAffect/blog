/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/2
 */

// 防抖是在触发事件的n秒之后才会执行函数，触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
const debounce = (func, time = 200) => {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    let timeout = null
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, arguments);
        }, time);
    };
}
// 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
const throttle = (func, time = 200) => {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    let canRun = true;
    return function () {
        if (!canRun) return;
        canRun = false;
        func.apply(this, arguments);
        setTimeout(() => {
            canRun = true;
        }, time);
    };
}