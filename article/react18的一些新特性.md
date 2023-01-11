# React18 新特性
React 18 已经放弃了对 ie11 的支持，将于 2022年6月15日 停止支持 ie，如需兼容，需要回退到 React 17 版本

## 1：Render API
React 18 引入了一个新的 root API，新的api支持18中最重要的特性，并发模式
```javascript
// React 17
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

// React 18
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<App />);
```
在卸载组件时，也需要将 unmountComponentAtNode 升级为 root.unmount:

在18中只用render API也不会报错，18版本是兼容的

## 2：setState 自动批处理
在18以前，setState只在 React 事件处理函数 中进行批处理更新,也就是多个setState会合并。但在Promise、原生事件、setTimeout、setInterval等事件中的更新
就是立即执行的,并不会批量处理。在18中同一个事务中，所有的更新都将自动批处理。

## 3：flushSync
这个api可以退出批处理,但flushSync 函数内部的多个 setState 仍然为批量更新
```javascript
import React, { useState } from 'react';
import { flushSync } from 'react-dom';

const App: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div
      onClick={() => {
        flushSync(() => {
          setCount1(count => count + 1);
          setCount1(count => count + 1);
        });
        // 第一次更新
        flushSync(() => {
          setCount2(count => count + 1);
        });
        // 第二次更新
      }}
    >
      <div>count1： {count1}</div>
      <div>count2： {count2}</div>
    </div>
  );
};
```
## 4：React 组件的返回值
+ 在 React 17 中，如果你需要返回一个空组件，React只允许返回null。如果你显式的返回了 undefined，控制台则会在运行时抛出一个错误。
+ 在 React 18 中，不再检查因返回 undefined 而导致崩溃。既能返回 null，也能返回 undefined（但是 React 18 的dts文件还是会检查，只允许返回 null，你可以忽略这个类型错误）。

## 5：Suspense
在 React 18 的 Suspense 组件中，官方对 空的fallback 属性的处理方式做了改变：不再跳过 缺失值 或 值为null 的 fallback 的 Suspense 边界。相反，会捕获边界并且向外层查找，如果查找不到，将会把 fallback 呈现为 null。
```javascript
// React 17
const App = () => {
  return (
    <Suspense fallback={<Loading />}> // --- 这个边界被使用，显示 Loading 组件
      <Suspense>                      // --- 这个边界被跳过，没有 fallback 属性
        <Page />
      </Suspense>
    </Suspense>
  );
};

export default App;
// React 18
const App = () => {
    return (
        <Suspense fallback={<Loading />}> // --- 不使用
            <Suspense>                      // --- 这个边界被使用，将 fallback 渲染为 null
                <Page />
            </Suspense>
        </Suspense>
    );
};

export default App;
```

## 并发模式CM
CM 本身并不是一个功能，而是一个底层设计
React 17 和 React 18 的区别就是：从同步不可中断更新变成了异步可中断更新。
React 的状态更新可以分为两类：

紧急更新（Urgent updates）：比如打字、点击、拖动等，需要立即响应的行为，如果不立即响应会给人很卡，或者出问题了的感觉
过渡更新（Transition updates）：将 UI 从一个视图过渡到另一个视图。不需要即时响应，有些延迟是可以接受的。


### 并发特性 一、startTransition/useTransition
为了能在大量的任务下也能保持 UI 响应。
这个新的 API 可以通过将特定更新标记为“过渡”来显著改善用户交互，
简单来说，就是被 startTransition 回调包裹的 setState 触发的渲染被标记为不紧急渲染，这些渲染可能被其他紧急渲染所抢占。

### 并发特性 二、useDeferredValue
类似startTransition，但useDeferredValue包裹一个值，将这个值作为延时状态

### 简单理解
这三个API 可以理解为渲染层次防抖节流或者懒加载

## 一些其他更新
+ SSR API
+ useId
+ useSyncExternalStore
+ useInsertionEffect

