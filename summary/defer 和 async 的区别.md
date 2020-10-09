### defer 和 async 的区别

两者都是异步去加载外部JS文件，不会阻塞DOM解析，但他们还是在加载脚本后对执行脚本的时机有所区别

**defer**: 文档解析后执行，即使脚本加载已经完成了，如果文档未解析完成，就不会执行

**async**: 加载后立即执行，即不会按照声明脚本时的顺序执行

![img](https://github.com/dayTimeAffect/all-Interview/blob/master/img/script%E5%8A%A0%E8%BD%BD%E6%89%A7%E8%A1%8C.jpg?raw=true)

defer会在`DOMContentLoaded`前执行，async执行时机无法确定

> 注1：带async的脚本一定会在load事件之前执行，可能会在DOMContentLoaded之前或之后执行。  
> 注2：DOMContentLoaded事件触发时：仅当DOM解析完成后，不包括样式表，图片等资源。onload 事件触发时,页面上所有的 DOM,样式表,脚本,图片等资源已经加载完毕。
