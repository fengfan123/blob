# css3基础

## 浏览器前缀
|前缀|浏览器|
|:---|:---|
|-webkit-|chrome和safari （Webkit）|
|-moz-|Firefox （Gecko）|
|-ms-|IE （Trident）|
|-o-|Opera （Blink）|

## css3选择器
|选择器|含义|
|:---|:---|
|:link|未访问的链接|
|:visited|已访问的链接|
|:hover|鼠标移动到链接上|
|:active|选定的链接(鼠标点击未松开)|
|p~ul|通用兄弟选择器：|
|p+ul|和相邻兄弟选择器|
|selector[attribute=value]|选择 attribute 属性值为 "value"的元素|
|selector[attribute|=value]|
|selector[attribute^=value]|选择 attribute 属性值以 “value” 开头的所有元素|
|selector[attribute*=value]|选择attribute 属性值包含 “value” 的所有元素|
|selector[attribute$=value]|选择 attribute 属性值以 “value” 结尾的所有元素|
|selector[attribute~=value]|选择 attribute 属性值为一个词列表，并且以空格隔开，其中词列表中包含了一个value1或value2词|
|:first-child|匹配选择器的第一个子元素，此元素必须是父元素的第一个子元素|
|:last-child|匹配选择器的最后一个子元素，此元素必须是父元素的最后一个子元素|
|:nth-child()|匹配属于其父元素的第 N 个子元素，不论元素的类型。(odd 奇数序号的元素 even 偶数序号的元素)|
|:only-child|匹配属于其父元素的唯一子元素的每个元素。|
|:root|匹配根元素|
|:empty|匹配没有子元素的对应选择器的元素|

## 边框圆角
长度单位：em,px,pt,% <br/>
border-radius:20px;//四个角 <br/>
border-radius:20px 40px 30px 40px;//左上 右上 右下 左下;


## 渐变


## 文本和盒子阴影
box-shadow:x y blur color inset/outset
```css
box-shadow:0px 0px 10px red insert;
text-shadow:0px 0px 10px red;
```
|值|说明|
|:---|:---|
|x|x轴偏移量|
|y|y轴偏移量|
|blur|模糊度|
|color|颜色|
|inset/outset|内阴影/外阴影|

## 文字换行
```css
/* 显示一行，省略号 */
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
word-break: break-all;/*允许单词断点换行*/
/* 显示两行，省略号 */
text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
line-clamp: 2;
-webkit-box-orient: vertical;
```

## css3字体
@font-face可以自定义字体。把我们想要使用的字体放到服务器上，使用时直接加载到本地就能使用了。

font-family:自定义字体的名字
src：字体的路径

```css
@font-face{
    font-family:gift;
    src:url('');
}
div{
    font-family:gift;
}
```

## css3 背景
|值|说明|
|:---|:---|
|background-color|指定背景颜色|
|background-image|指定背景图片|
|background-repeat|指定背景图片的显示范围|
|background-position|指定背景图片的位置|
|background-attachment|背景图片固定 ------- scroll(默认值)/fixed(固定到当前窗口)/local(随着内容走)|
|background-size|背景图片大小-------cover（扩大背景图，使背景图片铺满整个容器）/ contain（等比缩放到某一边紧贴容器边缘）/10% 10%/20px 20px|
|background-clip|背景图片裁切 ------content-box（内容区域）/border-box（边框区域）/padding-box（内边距区域）|
|background-origin|背景图片定位区域（右侧可超出，到边框区域后消失） ------content-box（内容区域）/border-box（边框区域）/padding-box（内边距区域）|

## 倒影
```css
box-reflect:below 10px;
倒影,火狐不支持
```
|值|说明|
|:---|:---|
|below|底部|
|above|顶部|
|left|左|
|right|右|
|none|无倒影|

```css
.box{
    height:100px;
    width: 200px;
    background-image:url(swiper/img/218746.jpg) ;				
    background-size:100% 100% ;
    -webkit-box-reflect:below 1px -webkit-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3))
}
```

## 滤镜
```css
filter:blur(10px)
```
|值|说明|
|:---|:---|
|grayscale|灰度(取值：0-1数值)|
|sepia|褐色(取值0-1)|
|saturate|饱和度(1为正常饱和度，大于1饱和度越高)|
|hue-rotate|色相旋转(取值：角度0-360deg)|
|invert|反色　(取值0-1 )|
|opacity|透明度　(取值0-1)|
|brightness|亮度( 取值：数字 0亮度全黑，1为正常亮度，大于1时会增加元素的亮度)|
|contrast|对比度　( 取值：数字 0亮度全黑，1为正常亮度，大于1时会增加元素的亮度)|
|blur|模糊(取值：像素，越大越模糊)|
|drop-shadow|阴影(box-shadow类似)|

使用filter:grayscale(1)使网页呈现哀悼模式
```css
body{ 
    filter: grayscale(1);
}
```


## 过渡
```css
transition:all 1s ease;
```
|值|说明|
|:---|:---|
|transition-property|规定应用过渡的 CSS 属性的名称。|
|transition-duration|定义过渡效果花费的时间。默认是 0。|
|transition-timing-function|规定过渡效果的时间曲线。默认是 “ease”。 (linear：匀速)|
|transition-delay|规定过渡效果延迟时间。默认是 0。|


## 当元素背部朝向屏幕时隐藏
```css
backface-visibility: hidden;
```

## 2D装换
```css
transform :translate(10px 10px);
1.同时使用多个转换，其格式为
transform:translate() rotate() scale()…..等用空格隔开
2.其顺序会影响转换的效果（先旋转会改变坐标轴方向）
3.当我们同时有位移和其他属性的时候，记得要将位移放到最前面
```
|值|说明|
|:---|:---|
|translate|平移(x轴，y轴)|
|scale|缩放(1,2) 负数是缩小|
|rotate|旋转（30deg）可接受负数|
|skew|倾斜（20deg）|
|transform-origin|改变基准点（可以是数值，百分比，也可以是位置单词如：top，left等）|

## 3D转换
```css
//开启3D空间
transform-style: preserve-3d
//景深
 perspective：600px;

transform: rotateZ(20deg); //增加Z轴的旋转
transform: translateZ(20px); //增加Z轴的位移
```

## 动画

1.指定动画
```css
@keyframes 动画名称{
    0%{}
    100%{}
}

```

2.使用动画
```css
animation:name 2s ease infinite;
```
|值|说明|
|:---|:---|
|animation-name|指定动画名称|
|animation-durantion|指定动画播放的时间|
|animation-timing-function|指定动画播放的速度|
|animation-delay|指定动画播放的延迟时间|
|animation-iteration-count|指定动画播放的次数|
|animation-direction|指定动画播放的顺序（normal alternate reverse）|
|animation-fill-mode|属性规定动画在播放之前或之后，其动画效果是否可见none backwards forwards both|
|animation-play-state|属性规定动画正在运行还是暂停paused running|

用js控制动画暂停
```js
div.style.animationPlayState = "paused";
div.style.animationPlayState = "running";
```

## 变量
:root定义变量,使用变量是var(变量名)
```css
:root{ 
  --bg-color: #cccccc;
}
.father{ 
  background-color: var(--bg-color);
}
```


javascript操作变量,例如：
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        :root {
            --bg-color: #1e90ff;
            --font-color: #cccccc;
        }

        #app {
            width: 100px;
            height: 100px;
            background-color: var(--bg-color);
            color: var(--font-color);
        }
    </style>
</head>

<body>
    <div id="app">
        <p>Hello World!</p>
    </div>
    <br />
    <button onclick="changeColor()">切换背景色</button>
    <script>
        function changeColor() {
            console.log(document.documentElement.style);
            document.documentElement.style.setProperty('--bg-color', 'black');
            document.documentElement.style.setProperty('--font-color', 'white');
        }
    </script>
</body>
</html>
```
1. 在 JS 代码中，我们可能需要读取 CSS 变量的值，其方法如下：<br/>
const root = document.querySelector(":root");
2. 设置 CSS 变量<br/>
root.style.setProperty("--main-bg-color", "red");
3. 读取 CSS 变量<br/>
const computedStyle = getComputedStyle(root);<br/>
const mainBgColor = computedStyle.getPropertyValue("--main-bg-color");<br/>
4. 删除 CSS 变量<br/>
root.style.removeProperty("--main-bg-color");<br/>
>总结：灵活使用 CSS 变量，不仅可以提高生产力，也能够提高代码的可阅读性和维护性。
