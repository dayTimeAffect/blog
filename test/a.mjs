/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/7
 */
import {b} from './b.mjs'
import {c, d} from './c.mjs'

console.log(b);
console.log(c, d);
setTimeout(() => {
    console.log(c.cc, d);
}, 2000)