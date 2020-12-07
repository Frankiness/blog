---
slug: bind,call,apply
title: 手写bind,call,apply
author: 老谭
author_title: 前端工程师
author_url: https://github.com/ Frankiness
author_image_url: ../static/img/avatar.jpg
tags: [前端, 面试, 手撕]
---


这三者都可以改变`this`的指向，不同的是

- `call`是基本的
- `bind`返回值是一个函数
- `apply`第二个参数是数组

改变 this 指向问题，都是将函数作为对象的一个属性，由此来实现 this 的变化；**一定要在原型上定义**

<!-- truncate -->

## bind

原理：

1. 把当前的`this`变成第一个参数
1. 后面的参数作为函数参数

```javascript
Function.prototype.bind = function () {
  //arguments是函数自带的一个属性，代表函数所有的参数集合，是类数组
  const args = Array.prototype.slice.call(arguments);
  //const args = Array.from(arguments)		//from方法也可以
  //获取需要指向的this
  const obj = args.shift();
  //替代当前this，避免混淆
  const self = this;
  return function () {
    return self.apply(obj, args);
  };
};
```

## call

原理：

1. 将函数设为对象的一个属性，来实现`this`的改变
1. 通过`eval`调用函数
1. 删除

```javascript
Function.prototype.myCall = function () {
  const args = Array.from(arguments);
  const obj = args.shift();
  obj.fnName = this;
  const result = eval(`obj.fnName(${args})`);
  delete obj.fnName;
  return result;
};
```
