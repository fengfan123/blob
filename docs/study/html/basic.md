# html基础
## 1. src和href的区别
src和href都是用来引用外部的资源，它们的区别如下：
- src： 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src会将其指向的资源下载并应⽤到⽂档内，如请求js脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般js脚本会放在页面底部。
- href： 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在a、link等标签上。

## 2. 对HTML语义化的理解
语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情。<br/>
语义化的优点如下：<br/>
- 对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；<br/>
- 对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。<br/>

常见的语义化标签：
```html
<header></header>  头部
<nav></nav>  导航栏
<section></section>  区块（有语义化的div）
<main></main>  主要区域
<article></article>  主要内容
<aside></aside>  侧边栏
<footer></footer>  底部
```
## 3. DOCTYPE(⽂档类型) 的作⽤
DOCTYPE是HTML5中一种标准通用标记语言的文档类型声明，它的目的是告诉浏览器（解析器）应该以什么样（html或xhtml）的文档类型定义来解析文档，不同的渲染模式会影响浏览器对 CSS 代码甚⾄ JavaScript 脚本的解析。它必须声明在HTML⽂档的第⼀⾏。。<br/>
浏览器渲染页面的两种模式（可通过document.compatMode获取，比如，语雀官网的文档类型是CSS1Compat）：。<br/>
- CSS1Compat：标准模式（Strick mode），默认模式，浏览器使用W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。
- BackCompat：怪异模式(混杂模式)(Quick mode)，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。

## 4. 常⽤的meta标签有哪些

meta 标签由 name 和 content 属性定义，用来描述网页文档的属性，比如网页的作者，网页描述，关键词等，除了HTTP标准固定了一些name作为大家使用的共识，开发者还可以自定义name。<br/>

常用的meta标签： 
1. charset，用来描述HTML文档的编码类型：
```html
<meta charset="UTF-8" >
```
2. keywords，页面关键词：
```html
<meta name="keywords" content="关键词" />
```
3. description，页面描述：
```html
<meta name="description" content="页面描述内容" />
```
4. refresh，页面重定向和刷新：
```html
<meta http-equiv="refresh" content="0;url=" />
```
## 5. viewport，适配移动端，可以控制视口的大小和比例：
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```
其中，content 参数有以下几种：
- width viewport ：宽度(数值/device-width)
- height viewport ：高度(数值/device-height)
- initial-scale ：初始缩放比例
- maximum-scale ：最大缩放比例
- minimum-scale ：最小缩放比例
- user-scalable ：是否允许用户缩放(yes/no）
## 6. 搜索引擎索引方式：
```html
<meta name="robots" content="index,follow" />
```
其中，content 参数有以下几种：
- all：文件将被检索，且页面上的链接可以被查询；
- none：文件将不被检索，且页面上的链接不可以被查询；
- index：文件将被检索；
- follow：页面上的链接可以被查询；
- noindex：文件将不被检索；
- nofollow：页面上的链接不可以被查询。

## 7. img的srcset属性的作⽤？

响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的srcset属性。srcset属性用于设置不同屏幕密度下，img 会自动加载不同的图片。用法如下：<br/>
```html
<img src="image-128.png" srcset="image-256.png 2x" />
```
使用上面的代码，就能实现在屏幕密度为1x的情况下加载image-128.png, 屏幕密度为2x时加载image-256.png。<br/>

按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有1x,2x,3x,4x四种，如果每一个图片都设置4张图片，加载就会很慢。所以就有了新的srcset标准。代码如下：

```html
<img src="image-128.png"
     srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"
     sizes="(max-width: 360px) 340px, 128px" />
```

其中srcset指定图片的地址和对应的图片质量。sizes用来设置图片的尺寸零界点。对于 srcset 中的 w 单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用。浏览器会自动选择一个最小的可用图片

sizes语法如下:
```html
sizes="[media query] [length], [media query] [length] ... "
```
sizes就是指默认显示128px, 如果视区宽度大于360px, 则显示340px。

## 8. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
```html
- 行内元素有：a b span img input select strong；
- 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p；
```
空元素，即没有内容的HTML元素。空元素是在开始标签中关闭的，也就是空元素没有闭合标签：
```html
- 常见的有：<br>、<hr>、<img>、<input>、<link>、<meta>；
- 不常见的有：<area>、<base>、<col>、<colgroup>、<command>、<embed>、<keygen>、<param>、<source>、<track>、<wbr>。
```

## 9. title与h1的区别、b与strong的区别、i与em的区别？
- strong标签有语义，是起到加重语气的效果，而b标签是没有的，b标签只是一个简单加粗标签。b标签之间的字符都设为粗体，strong标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重strong标签。
- title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取有很大的影响
- i内容展示为斜体，em表示强调的文本

## 10. iframe 有那些优点和缺点？
iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。<br/>
- 优点：<br/>
1. 用来加载速度较慢的内容（如广告）
2. 可以使脚本可以并行下载
3. 可以实现跨子域通信
- 缺点：<br/>
1. iframe 会阻塞主页面的 onload 事件
2. 无法被一些搜索引擎索识别
3. 会产生很多页面，不容易管理

iframe父子通信例子：

父页面：
```js
window.addEventListener('message', function(e) {});
父页面监听message的消息就行了
```
子页面：
```js
window.parent.postMessage({},'*') 
第一个参数是data
第2个参数是白名单Ip
```

## 10. label 的作用是什么？如何使用？

label标签来定义表单控件的关系：当用户选择label标签时，浏览器会自动将焦点转到和label标签相关的表单控件上。
- 使用方法1：
```html
<label for="mobile">Number:</label>
<input type="text" id="mobile"/>
```
- 使用方法2：
```html
<label>Date:<input type="text"/></label>
```

## 11. head 标签有什么作用，其中什么标签必不可少？
标签用于定义文档的头部，它是所有头部元素的容器。 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等。<br/>
文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。<br/>
下面这些标签可用在 head 部分:base,link,meta,script,style,title<br/>
> 其中 title 定义文档的标题，它是 head 部分中唯一必需的元素。

## 12. 浏览器乱码的原因是什么？如何解决？
1. 产生乱码的原因：
- 网页源代码是gbk的编码，而内容中的中文字是utf-8编码的，这样浏览器打开即会出现html乱码，反之也会出现乱码；
- html网页编码是gbk，而程序从数据库中调出呈现是utf-8编码的内容也会造成编码乱码；
- 浏览器不能自动检测网页编码，造成网页乱码。
2. 解决办法：
- 使用软件编辑HTML网页内容；
- 如果网页设置编码是gbk，而数据库储存数据编码格式是UTF-8，此时需要程序查询数据库数据显示数据前进程序转码；
- 如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换。