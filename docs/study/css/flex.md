# flex 弹性布局

## 1、容器的基本属性
1. flex-direction：column/ row
    - column:纵向布局 
    - row:横向布局

 常用的就是上边这两个，其他两个相反方向的排列方式：<br/>
    flex-direction: column-reverse;<br/>
    flex-direction: row-reverse;

2.  flex-wrap：nowrap/wrap/wrap-reverse
    - nowrap不换行
    - wrap换行
    - wrap-reverse换到第一行

3. justify-content:flex-start/flex-end/center/space-around
    - flex-start(默认) ：左对齐
    - flex-end：右对齐
    - center：居中
    - space-between：两端对齐，项目之间的间隔都相等
    - space-around：每个项目两侧的间隔相等。

4. align-items:flex-start/flex-end/center/baseline/stretch
    - flex-start：交叉轴的起点对齐。
    - flex-end：交叉轴的终点对齐。
    - center：交叉轴的中点对齐。
    - baseline：项目的第一行文字的基线对齐。
    - stretch：如果项目未设置高度或设为auto，将占满整个容器的高度。


##  2、容器内单个元素属性
1. flex-grow://默认值是0<br/>
如果容器内的所有元素都设置为 1，则平分剩余的空间；如果其中一个设置为 2，则按比例平分剩余的空间。

2. flex-shrink：该属性主要用来定义元素的缩小比例，默认值为 1。<br/>
如果所有元素的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个元素的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

3. flex-basis：浏览器会根据该属性进行对主轴计算是否有多余的空间。默认值为 auto。

4. flex: 该属性是以上三个属性的缩写形式，默认值为0 1 auto。<br/>
还有两个其他的快捷属性，auto（1 1 auto） 和none（0 0 auto），浏览器会根据其推算相关的数值。
