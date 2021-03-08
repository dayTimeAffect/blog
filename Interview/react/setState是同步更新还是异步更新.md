## setState是同步更新还是异步更新

​	一般来说，在普通的场景下可以认为setState是异步更新，而实际上setState在不同的场景下表现得形式不同，它只是看上去像异步，但不是真的异步，本质是通过源码中isBatchingUpdates(默认false)来进行判断是存入队列(dirtyComponents)中异步执行（true），还是立即同步更新(false)，值得注意的是，同步执行前，会先将队列中的任务清空。

​	isBatchingUpdates在react可以控制的地方可以被修改为true，也就是生命周期、合成事件中。在addEventListener注册原生事件 、setTimeout、setInterval 等中就无法被修改，那么表现得就是同步。

​	一般认为，做异步设计是为了性能优化、减少渲染次数，React 团队还补充了两点。

+ 保持内部一致性。如果将 state 改为同步更新，那尽管 state 的更新是同步的，但是 props不是。

+ 启用并发更新，完成异步渲染。