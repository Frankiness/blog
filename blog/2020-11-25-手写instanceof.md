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

[捕获.PNG]
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


