### 说说你对json的理解

+ json是一种结构化数据，它是一种数据交换格式，javascript中的json有两种结构，一种是对象，一种是数组，并且两者可以互相嵌套

+ 虽然json的数据格式很像js的对象和数组，但还是有区别的，比如键名的引号，属性值的范围(函数、NaN、undefined、Infinity等等都不行，导致JSON.stringify的深拷贝还有很大的使用限制)

+ 虽然大部分JSON格式的字符串都能解析成JS，但**JSON不是JS的子集**，它是轻量级的文本数据交换格式，并不是编程语言，某些字符串可以被JSON.parse解析，但不能被eval当初js解析

  

