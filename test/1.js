/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/6
 */
var calculatorMixin = Base => class extends Base {
    calc() {
        console.log('console calc')
    }
};

var randomizerMixin = Base => class extends Base {
    randomize() {
        console.log('console randomize')
    }
};
class Foo {
    hehe(){
        console.log('console hehe')
    }
}
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
let a = new Bar()
a.calc()
a.randomize()
a.hehe()