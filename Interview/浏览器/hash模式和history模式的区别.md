### hash模式和history模式的区别
+ 表现形式：hash模式中的url携带#号，history模式则没有#字符
+ 原理区别：hash模式是基于锚点(#符号)，以及onhashchange时间监听锚点的变化;history基于H5中的HistoryApi，也就是history.pushState与history.replaceState两个方法、 对IE来说有兼容性问题