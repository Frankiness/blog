---
slug: instanceof
title: 手写instanceof
author: 老谭
author_title: 前端工程师
author_url: https://github.com/ Frankiness
author_image_url: ../static/img/avatar.jpg
description: 手写instanceof
tags: [前端, JavaScript,面试,手撕]
---

![捕获.PNG](https://cdn.nlark.com/yuque/0/2020/png/977793/1606140198188-348968b7-b4db-43e7-83e5-952765ed1117.png#align=left&display=inline&height=408&margin=%5Bobject%20Object%5D&name=%E6%8D%95%E8%8E%B7.PNG&originHeight=646&originWidth=1158&size=114204&status=done&style=none&width=732)
**当前对象的__proto__与目标对象的原型进行比较，如果相等返回true，如果不相等就继续往上递归**
<!-- truncate -->
```javascript
function myInstanceof(current,origin){
  var proto = current.__proto__
  if(proto){
    if(proto === origin.prototype) return true
    else return myInstanceof(proto,origin)
  }else{
    return false
  }
}
```


