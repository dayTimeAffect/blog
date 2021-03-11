### JS如何实现继承的

+ 1、原型链继承，通过修改子类的prototype指向父类实例
+ 2、构造函数继承，通过call、apply将子类中的指针传进去继承
+ 3、组合继承，就是同时组合原型链继承和构造函数继承，父类调用两次
+ 4、原型式/寄生式继承，通过Object.create(),创建一个_proto_等于父类prototype的实例
+ 5、寄生式组合继承，通过call、apply继承父类属性，通过Object.create创建一个实例对象，该实例_proto_指向父类prototype，
实例_proto_.constructor指向子类，子类的prototype指向该实例。
+ 6、class、extends、super继承