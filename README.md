## HTML CSS
> 展示地址[https://mcguffen.github.io/HTML-CSS/](https://mcguffen.github.io/HTML-CSS/)
- [思考](#思考)
- [crm](#crm)
- [VSCode配置](#VSCode配置)
  - [emmet 用法](#emmet用法)
- [项目](#项目)
  - [创建目录](#创建目录)
  - [写代码](#写代码)
    - [html](#html)
      - [起手式](#起手式)
      - [调试大法](#调试大法)
      - [画圆](#画圆)
      - [画s](#画s)
    - [加动画](#加动画)
    - [手机适配](#手机适配)
  - [总结](#总结)
- [部署](#部署)
- [反思](#反思)


### 思考
- 解决问题的主题思路是什么？
- 问题是如何解决的？
- 如何查找资料？
- 有什么代码是自己没想到的呢？
### crm
copy 抄
run 运行
modify 修改
### VSCode配置
- 自动保存 auto save
- 自动格式化 关键字 format on save 
#### emmet用法
  div+div 按下 tap 等于2个div 这是[emmet用法](https://docs.emmet.io/cheat-sheet/)的快捷键用法 好的编辑器都支持。
  是在不会看[emmet官方视频](https://docs.emmet.io/)
### 项目
我是图
制作一个会转的太极
#### 创建目录
创建新目录不要用中文
#### 写代码
首先，写代码前应该理清思路。
##### html 
画太极图
- 思路：想好再开始写代码，首先我用是想用几个div来做。
###### 起手式
!+tap 创建html页面 lang="zh" 语言选中文
- 在body内创建一个div 取个id名（id是可以用中文的） 单独加样式

``` html
<div id= '八卦'></div>
```
###### 调试大法
css border调试大法
- 在head标签内添加内敛样式
``` css
<style>
    #八卦 {
        border: 3px solid black;;
    }
</style>
```
- 页面并没有显示div，我们需要修改样式来显示div 那么就需要用到下面的

``` css
    border: 3px solid black;; 
```
- 然后就可以看到我们的div高度0长度和页面一样。看着是黑色的一条线，其实是个div只不过高度是0，所以看着像一条直线。
- 所以我们让这个id叫八卦的div变大呗
``` css
<style>
    #八卦 {
        border: 3px solid red;;
        width: 400px;
        heigth: 400px;
    }
</style>
```
###### 画圆
- 那么下面如何画个圆呢？
- border-radius > = width/height(正方形) 的一半 就是个圆。去查[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)还就知道
关键词 + mdn
border-radius + mdn 搜
``` css
<style>
    #八卦 {
        border: 3px solid red;;
        width: 400px;
        heigth: 400px;
        border-radius: 200px;
    }
</style>
```
###### 画s
- 在圆中画个S 当然这样挺难，我们把圆对半分。
  div+div 按下 tap 等于2个div 写入内容1 2
``` html
<div id= '八卦'>
    <div>
        1
    </div>   
    <div>
        2
    </div>   
</div>
```
- 我们发现新加的2个div在页面显示1 2并上下排列 那么还是用到了boder css调试大法
``` css
border: 3px solid red;;
```
- #八卦 这个div元素下面的子元素的第1个元素的样式
``` css
    #八卦>div:first-child{
        border: 1px solid green;;
    }
```    
因为我们懒没有给每一个div 设置id 所以我们用nth-child（）来设置div
    八卦元素下面的子元素的第2个元素的样式
``` css

    #八卦>div:nth-child(2){
        border: 1px solid black;;
    }
```
- 我们想让1放左边 2放右边 那么先把div大小调整一下



``` css
    #八卦>div:first-child{
        border: 1px solid green;;
        width: 50%;
    }   
    #八卦>div:nth-child(2){
        border: 1px solid black;;
        width: 50%;
    }
```
- 如何让1在左边 2在右边呢？
使用绝对定位：在1 2 的父级元素上设置样式如下
``` css
    #八卦 {
        border: 3px solid black;;
        width: 400px;
        heigth: 400px;
        border-radius: 200px;
        position: relative;
    }
```
然后在 1  2这俩div样式上
```  css
    #八卦>div:first-child{
        border: 1px solid green;;
        width: 50%;
        position: absolute;
    }   
    #八卦>div:nth-child(2){
        border: 1px solid black;;
        width: 50%;
        position: absolute;
    }
```
这么做之后 1 2就浮起来 重叠了
我们就让第一个跑取左边 第二个取右边
``` css
    #八卦>div:first-child{
        border: 1px solid green;;
        width: 50%;
        position: absolute;
        left:0;
    }   
    #八卦>div:nth-child(2){
        border: 1px solid black;;
        width: 50%;
        position: absolute;
        right:0;
    }
```
 虽然这样1 和 2一个左边1个右边 但是有重叠的部分，说好各占50%呢？这是因为css的盒模型。为了解决这个问题
- 我们需要做一些设置
*代表所有元素的意思
那么id选择器为什么用#呢？你可以用[id=八卦]
- #号不是更简单吗？这就是原因
``` css
* {
    //改变盒模型
    box-sizing: border-box;
}
```
- 下面改变1 2 div的高度和圆一样高 也就是和id叫八卦的div一样高
``` css
    #八卦>div:first-child{
        border: 1px solid green;;
        width: 50%;
        position: absolute;
        left:0;
        height:100%
    }   
    #八卦>div:nth-child(2){
        border: 1px solid black;;
        width: 50%;
        position: absolute;
        right:0;
        height:100%
    }
```
现在你发现 1和2俩div没有重叠部分了。
简单来说就是说 加上这个代码就是新的盒模型吊打旧的盒模型。
因为 1 和 2 都是他的子元素 那么100%就是父元素div的高度。
- 然后我们修改下 1和2的颜色
``` css
    #八卦>div:first-child{
        border: 1px solid green;;
        width: 50%;
        position: absolute;
        left:0;
        height:100%
        background:black;
    }   
    #八卦>div:nth-child(2){
        border: 1px solid black;;
        width: 50%;
        position: absolute;
        right:0;
        height:100%
        background:white;
    }
```
1黑2白

- 还有一个问题 我们如何让超过圆的部分隐藏呢？
``` css
    #八卦 {
        border: 3px solid black;;
        width: 400px;
        heigth: 400px;
        border-radius: 200px;
        position: relative;
        overflow: hidden;
    }
```
overflow: hidden;的意思就是超过我的部分隐藏
现在左半圆1黑有半圆2白
- 怎么做右上黑色突出来的小黑半圆呢？
怎么做左下白色突出来的小白半圆呢？
答案就是再创建2个div
先创建一个div
``` html
<div id= '八卦'>
    <div>
        1
    </div>   
    <div>
        2
    </div>
    <div>
        3
    </div>    
</div>
```
css
``` css
    #八卦>div:nth-child(3){
        border: 10px solid yellow;
        position: absolute;
    }

```
我们发现在页面找不到黄色的div3那是因为overflow: hidden没有注释 超过圆的部分隐藏 所以我们看不到第三个div
``` css
    #八卦 {
        border: 3px solid black;;
        width: 400px;
        heigth: 400px;
        border-radius: 200px;
        position: relative;
        /*overflow: hidden;*/
    }
```
注释快捷键 command+/ 或你把这个属性拼错他不就不起作用了
然后我们来调整第三个div的位置和大小
``` css
    #八卦>div:nth-child(3){
        border: 10px solid yellow;
        position: absolute;
        width: 200px;
        height: 200px;
        left: 25%
    }
```
不过这是个特殊情况 因为div3的宽度是这个圆的一半 一般我会先把这个第三个div的左上角弄到这个圆的一半的位置left: 50%，然后让第三个div回退自身的一半        margin-left: -100px;

``` css
    #八卦>div:nth-child(3){
        border: 10px solid yellow;
        position: absolute;
        width: 200px;
        height: 200px;
        left: 50%
        margin-left: -100px;
    }
```
然后让第三个div变成黑色的圆
``` css
    #八卦>div:nth-child(3){
        border: 10px solid yellow;
        position: absolute;
        width: 200px;
        height: 200px;
        left: 50%
        margin-left: -100px;
        border=radius:50%;
        background: black;
    }
```
这样 就可以做好后就可以把border注释
把overflow:hidden这个属性显示
- 左下角白色的小圆做法和上面类似
``` css
#八卦>div:nth-child(4){
    /* border: 3px solid rgb(184, 45, 45);; */
    height: 200px;
    width: 200px;
    position:absolute;
    left: 50%;
    /*往左自身一半距离*/
    margin-left: -100px;
    border-radius: 50%;
    background: black;
    /*下去*/
    bottom: 0;
}
``` 
bottom:0;就会让第四个div跑下面
然后修改下颜色
``` css
#八卦>div:nth-child(4){
    /* border: 3px solid rgb(184, 45, 45);; */
    height: 200px;
    width: 200px;
    position:absolute;
    left: 50%;
    /*往左自身一半距离*/
    margin-left: -100px;
    border-radius: 50%;
    background: white;
    /*下去*/
    bottom: 0;
}
```
但是发现右半边白色和背景一个色 所以
``` css
body{
    background:gray;
}

```
这样就行了 如果感觉这个灰色难看就换一个
``` css
body{
    background:#ddd;
}
```
想更浅就
``` css
body{
    background:#eee;
}
```
- 现在八卦还缺 第三个div里面又一个白的小圆
重复之前的操作 直接抄第三个div的样式来修改
``` css
#八卦>div:nth-child(5){
    /* border: 3px solid rgb(184, 45, 45);; */
    height: 50px;
    width: 50px;
    position:absolute;
    left: 50%;
    // 下移动
    top:75px;
    /*往左自身一半距离*/
    margin-left: -25px;
    border-radius: 50%;
    background: white;
}
```
- 现在八卦还缺 第四个个div里面又一个黑色的小圆 直接抄第五个个div的样式来修改
``` css
#八卦>div:nth-child(6){
    /* border: 3px solid rgb(184, 45, 45);; */
    height: 50px;
    width: 50px;
    position:absolute;
    left: 50%;
    bottom:75px;
    /*往左自身一半距离*/
    margin-left: -25px;
    border-radius: 50%;
    background: black;
}
```
以上 已经完成一个八卦了 下面取加css3的动画
##### 加动画 
让八卦转起来
-     animation: x 10s infinite linear;

``` css
#八卦{
    /* border: 1px solid red; */
    width: 400px;
    height: 400px;
    border-radius: 50%;
    position: relative;
    /*超过我的部分隐藏*/
    overflow: hidden;
    /*加动画 去声明关键帧 然后 怎么一直转 加infinite意思无限的*/
    /* 转的也太不自然了吧 加一个linear 线性的转  感觉快就调大，1s一圈改10s一圈试试*/
    /* 参数顺序不重要 会自动匹配 */
    animation: x 10s infinite linear;
    /* 总觉八卦不明显 加一个css3属性 阴影 */
    /* 不会用就搜 你要的属性+generator */
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
}
```
x是啥？是我们要声明的关键帧
``` css
/*声明关键帧，这个动画一些关键的位置*/
@keyframes x {
    /* 一开始的位置 */
    form{
        /* 一开始转0度 */
        transform: rotate(0deg);
    }
    /* 最后 转360度*/
    to{
        transform: rotate(360deg);
    }
}
```
下面属性 css3属性 添加阴影 让八卦更明显
``` css
box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
```
然后，刷新页面，八卦转了起来。
那如何让八卦水平居中和垂直居中呢？

首先，给八卦这个div一个容器
``` html
<div id="八卦-wrapper"></div>
```
用它来包所有的div
``` css
#八卦-wrapper{
    border: 10px solid red;
}
```
我们发现这个div并没有和页面重合，这是因为body又一个默认的那边距。或者我们把所有的那边距都删掉
``` css
* {
    /*改变盒模型*/
    box-sizing: border-box;
    /* 去掉默认边距 */
    padding: 0;
    margin: 0;

}
```
这样八卦-wrapper这个div就和页面重合（左上右）了。
发现这个div的高度没有和页面一样。
``` css
#八卦-wrapper{
    border: 10px solid red;
    /* 用户可以看到的视角范围 vh=viewpoint height 宽度可以自适应所以不需要设置*/
    height: 100vh;
}
```
vh=viewpoint height(用户可视范围) 宽度可以自适应所以不需要设置。

那么如何让八卦-wrapper这个div里面的div居中？
- 用flex做居中
首先八卦-wrapper这个div
``` css
#八卦-wrapper{
    /* border: 10px solid red; */
    /* 用户可以看到的视角范围 vh=viewpoint height 宽度可以自适应所以不需要设置*/
    height: 100vh;
    /* 如何剧中 下面三行记住 用的时候就记住简写 比如 df jcc aic*/
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex默认把里面的元素一字排开 所以我们吧字包到div也没有出现div上下布局 所以用下面的 */

}
``` 
八卦居中了，但是为什么字没有，字跑八卦右边了？
把字用div保住，为啥还是没有上下还是左右？
``` css
    /* 默认是横着一字排开 现在我们改成竖着一字排开 */
    flex-direction: column;
```
字和八卦也挨着得太近了
给包着字的div 取名id="八卦-描述"
``` css
#八卦-描述{
    /* 1em一个字的宽度 为什么不用像素 可以用啊 1em大概16px大概 */
    margin-top: 1em;
}
```
这样就完成了居中
##### 手机适配
咋做手机页面？打开开发者工具f12按下去
选中手机/ipad图标，你发现这八卦也太大了把？把它弄小？nono不是说不行，那pc页面的八卦大小你怎么不觉着大呢？所以我们应该为手机写一个配置。手机上html一定要有这行代码
 ``` html
 <meta name="viewport" content="width-device-width,initial-scale=1.0"> 
```
没有这行 就像你用诺基亚老爷机看这个页面。
所以我们需要
媒体查询
当你的媒体设备哦跑最大宽度 < =500px的时候就为下面元素的添加额外的样式是这样
``` css
@media(max-width: 500px){
    #八卦{
        样式
    }
}
```
所以，相当于另外写一套·适合手机看的配置
样式如下
``` css
#八卦{
    /* border: 1px solid red; */
    width: 400px;
    height: 400px;
    border-radius: 50%;
    position: relative;
    /*超过我的部分隐藏*/
    overflow: hidden;
    /*加动画 去声明关键帧 然后 怎么一直转 加infinite意思无限的*/
    /* 转的也太不自然了吧 加一个linear 线性的转  感觉快就调大，1s一圈改10s一圈试试*/
    /* 参数顺序不重要 会自动匹配 */
    animation: x 10s infinite linear;
    /* 总觉八卦不明显 加一个css3属性 阴影 */
    /* 不会用就搜 你要的属性+generator */
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
}
/* 媒体查询 为手机页面做适配 当你的设备页面<=500px的时候元素样式八卦宽高变成下面 */
@media(max-width: 500px){
    #八卦{
        width: 200px;
        height: 200px;
    }
}
#八卦>div:first-child{
    /* border: 3px solid black;; */
    width: 50%;
    height: 100%;
    position:absolute;
    left: 0;
    background: black;
}
#八卦>div:nth-child(2){
    /* border: 3px solid white;; */
    height: 100%;
    width: 50%;
    position:absolute;
    right: 0;
    background: white;
}
#八卦>div:nth-child(3){
    /* border: 3px solid rgb(184, 45, 45);; */
    height: 200px;
    width: 200px;
    position:absolute;
    left: 50%;
    /*往左自身一半距离*/
    margin-left: -100px;
    border-radius: 50%;
    background: black;
}
@media(max-width: 500px){
    #八卦>div:nth-child(3){
        /* border: 3px solid rgb(184, 45, 45);; */
        height: 100px;
        width: 100px;
    /*往左自身一半距离*/
        margin-left: -50px;
    }
}
#八卦>div:nth-child(4){
    /* border: 3px solid rgb(184, 45, 45);; */
    height: 200px;
    width: 200px;
    position:absolute;
    left: 50%;
    /*下去*/
    bottom: 0;
    /*往左自身一半距离*/
    margin-left: -100px;
    border-radius: 50%;
    background: white;
}
@media(max-width: 500px){
    #八卦>div:nth-child(4){
        /* border: 3px solid rgb(184, 45, 45);; */
        height: 100px;
        width: 100px;
        bottom: 0;
    /*往左自身一半距离*/
        margin-left: -50px;
    }
}
#八卦>div:nth-child(5){
    /* border: 3px solid rgb(184, 45, 45);; */
    height: 50px;
    width: 50px;
    position:absolute;
    left: 50%;
    top:75px;
    /*往左自身一半距离*/
    margin-left: -25px;
    border-radius: 50%;
    background: white;
}
@media(max-width: 500px){
    #八卦>div:nth-child(5){
        /* border: 3px solid rgb(184, 45, 45);; */
        height: 25px;
        width: 25px;
        top:37.5px;
    /*往左自身一半距离*/
        margin-left: -12.5px;
    }
}
#八卦>div:nth-child(6){
    /* border: 3px solid rgb(184, 45, 45);; */
    height: 50px;
    width: 50px;
    position:absolute;
    left: 50%;
    bottom:75px;
    /*往左自身一半距离*/
    margin-left: -25px;
    border-radius: 50%;
    background: black;
}
@media(max-width: 500px){
    #八卦>div:nth-child(6){
        /* border: 3px solid rgb(184, 45, 45);; */
        height: 25px;
        width: 25px;
        bottom:37.5px;
    /*往左自身一半距离*/
        margin-left: -12.5px;
    }
}
```
其实就是将pc页面样式里面的宽高啥的除以2
以适应手机页面，我们发现了用px的坏处
问题：像素px是不是绝对固定单位？
答案：如果用户在不改变分辨率的情况是固定的。


#### 总结
- 如何修改页面的背景
```
body{
    background: #eee;
}
```
- 如何选中所有的元素改变它的盒模型
```
* {
    /*改变盒模型*/
    box-sizing: border-box;
}
```
- id选择器的id是可以用中文的。
- 如何做一个圆 宽高相等（不相等就是椭圆咯）然后 border-radius: 50%;（>=一半）
```
#八卦{
    /* border: 1px solid red; */
    width: 400px;
    height: 400px;
    border-radius: 50%;
}
```
- 如何做绝对定位
在父级元素上加
    position: relative;
子元素加
    position:absolute;
- 如何隐藏多余的内容（超过自身以外的）
overflow: hidden;
- 什么样的css才是好css？
删一行都不行，没有重复的（可以后边再优化）
- 如何添加动画？
第一步：添加属性
``` css
#八卦{

    /*加动画 去声明关键帧 然后 怎么一直转 加infinite意思无限的*/
    /* 转的也太不自然了吧 加一个linear 线性的转  感觉快就调大，1s一圈改10s一圈试试*/
    /* 参数顺序不重要 会自动匹配 */
    animation: x 10s infinite linear;
    /* 总觉八卦不明显 加一个css3属性 阴影 */
    /* 不会用就搜 你要的属性+generator */
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
}
```
第二步：声明关键帧
```
/*声明关键帧，这个动画一些关键的位置*/
@keyframes x {
    /* 一开始的位置 */
    form{
        /* 一开始转0度 */
        transform: rotate(0deg);
    }
    /* 最后 转360度*/
    to{
        transform: rotate(360deg);
    }
}
```

- 如何使用添加阴影？
``` css
#八卦{
    /* 总觉八卦不明显 加一个css3属性 阴影 */
    /* 不会用就搜 你要的属性+generator */
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
}
```
这些数字不用记不会用就搜 你要的属性+generator有网址直接调整自己需要的效果copy过来用。

- 为啥我创建最外层的div并没有和页面重合？
答案：这是因为body有一个默认的那边距。或者我们把所有的那边距都删掉
``` css
* {
    /*改变盒模型*/
    box-sizing: border-box;
    /* 去掉默认边距 */
    padding: 0;
    margin: 0;

}
```
建议开始前就给它加上
- 那如何让元素水平居中和垂直居中呢？
用flex做居中
首先取名xx-wrapper这个div来包你想居中的元素
```
#xx-wrapper{
    /* 如何剧中 下面三行记住 用的时候就记住简写 比如 df jcc aic*/
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex默认把里面的元素一字排开 所以我们吧字包到div也没有出现div上下布局 所以用下面的 */
}
```
这样xx-wrapper这个div下的每一个div就会横着一字排开。

- 如何想用flex水平居中垂直居中,但里面的元素我希望是竖着一字排开，咋办？
下面：
``` css
#xx-wrapper{
    /* 如何剧中 下面三行记住 用的时候就记住简写 比如 df jcc aic*/
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex默认把里面的元素一字排开 所以我们吧字包到div也没有出现div上下布局 所以用下面的 */
    /* 默认是横着一字排开 现在我们改成竖着一字排开 */
    flex-direction: column;
}

```

这样就完成了竖着一字排开水平居中
，垂直居中。

### 部署
部署就很简单啊。
如果是本地项目想提交到github
先在github上创建项目
第一次会有提示命令如下：
``` bash
git remote add origin git@github.com:Mcguffen/项目名.git
git push --set-upstream origin master
```
然后 
命令行
git初始化我们的本地项目
``` bash
git init
git add .
git commit -m "你想写的话"
git remote add origin git@github.com:Mcguffen/项目名.git
git pull // 第一次创建项目有不用 不过打了也没啥影响
git push --set-upstream origin master

```
以后这个项目有修改只需要
```
git add .
git commit -m "你想写的话" //提交到本地git仓库的暂缓和区
git pull // 第一次创建项目有不用 不过打了也没啥影响
git push 提交到github
```
然后在项目的设置选择GitHub Pages/Source/master这个分之 然后save就会给你项目的预览链接
### 反思
做一个项目最好还好是先创建git仓库
这样每做完一点功能或者样式 就可以提交 
提交的时候注释好内容git commit -m “xxx”
这样回顾的时候就可以看github看每一次提交。

总结回顾还是最好自己写博客记录下来
当然只是想快速回顾自己写的内容还是可以的，如果不嫌弃麻烦的话。
反正好记性不如烂笔头。
如果有一个可以展示项目从0到有过程的东西就好了。
