---
slug: prototype
title: JavaScript的继承
author: 老谭
author_title: 前端工程师
author_url: https://github.com/ Frankiness
author_image_url: ../static/img/avatar.jpg
description: 手写JavaScript的几种继承方式
tags: [前端, JavaScript]
---

## 1.原型链继承

- 重点：让子类的原型等于父类的实例
- 优点：简单
- 缺点：无法传参；引用类型属性被所有实例共享

```javascript
function Parent() {}
function Child() {}
Child.prototype = new Parent(); //让子类的原型等于父类的实例 2.构造函数继承
```

- 重点：利用 call()或者 apply()，把父类构造函数引入子类的实例
- 优点：可以传参
- 缺点：无法复用；不能继承原形的方法

<!-- truncate -->

```javascript
function Parent(name) {
  this.name = name;
}
function Child() {
  Parent.call(this, "Jcak"); //将父类函数引入子类的实例
}
```

## 3.组合继承

- 重点：将原型继承和构造函数继承合并
- 缺点：调用了两次构造函数

```javascript
function Parent(name) {
  this.name = name;
}
function Child() {
  Parent.call(myName, "Jcak"); //将父类函数引入子类的实例
}
Child.prototype = new Parent(); //让子类的原型等于父类的实例 4.寄生继承
```

- 重点：通过 Object.create()方法创建一个父类的中间对象，将这个中间对象赋值给子类的原型，然后修复子类原型的 constructor
- 寄生继承是通过原型继承，而不是通过构造函数继承，所以一般把需要复用的方法定义到原型上

```javascript
function Parent(name) {
  this.name = name;
}
Parent.prototype.show = function () {
  //将需要复用的方法定义到原型上
  return "this is show method";
};
function Child() {
  Parent.call(this, "Jcak");
}
Child.prototype = Object.create(Parent.prototype); //如果直接让父子类的原型相等，改变子类原型时父类也会随之改变,所以使用一个中间变量
Child.prototype.constructor = Child; //修复子类原型的 constructor
```
