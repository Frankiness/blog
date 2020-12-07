---
slug: axios
title: 手写Ajax和Axios
author: 老谭
author_title: 前端工程师
author_url: https://github.com/ Frankiness
author_image_url: ../static/img/avatar.jpg
description: 手写Ajax和Axios
tags: [前端, JavaScript,面试,手撕]
---

`ajax`实现步骤：

1. 实例化一个`XmlHttpRequest`对象
1. `open`方法建立连接
1. `onreadystatechange`监听`readyState`的变化
1. `send`方法发送数据

<!-- truncate -->

`axios`使用时返回的是一个`promise`对象，所以使用`Promise`包装一下就是`axios`的封装了
```javascript
function ajax(url){
  return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.onreadystatechange = function (){
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          JSON.parse(resolve(this.responseText))
        }else if(xhr.status === 404){
          reject(new Error('not found 404'))
        }
      }
    }
    xhr.send()
  })
}
```
### 跨域方式
### 1. Jsonp
`Jsonp`本质上是利用`<script>`标签不受同源策略限制的特性，前端通过`script`中`get`请求传递参数，后端通过对参数的处理，然后返回JS代码，前端通过解析代码执行事先定义好的函数
### 2.CORS
在http请求的头部添加允许跨域的信息，例如：   `Access-Control-Allow-Origin:指定授权访问的域`
`Access-Control-Allow-Methods：授权请求的方法（GET, POST, PUT, DELETE，OPTIONS等)`
