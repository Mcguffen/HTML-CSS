## HTML CSS
### 思考
- 解决问题的主题思路是什么？
- 问题是如何解决的？
- 如何查找资料？
- 有什么代码是自己没想到的呢？
### crm
copy 抄
run 运行
modify 修改
### 项目：制作一个太极页面
#### VSCode设置
- 自动保存 auto save
- 自动格式化 关键字 format on save
#### 创建目录
创建新目录不要用中文
#### 写代码
- 思路：想好再开始写代码，首先我用是想用几个div来做。
- 起手式：!+tap 创建html页面 lang="zh" 语言选中文
- 在body内创建一个div 取个id名（id是可以用中文的） 单独加样式

```
<div id= '八卦'></div>
```
- 在head标签内添加内敛样式
```
<style>
    #八卦 {
        border: 3px solid black;;
    }
</style>
```
- 页面并没有显示div，我们需要修改样式来显示div 那么就需要用到下面的
- css border调试大法
```
    border: 3px solid black;; 
```
- 然后就可以看到我们的div高度0长度和页面一样。看着是黑色的一条线，其实是个div只不过高度是0，所以看着像一条直线。
- 所以我们让这个id叫八卦的div变大呗
```
<style>
    #八卦 {
        border: 3px solid red;;
        width: 400px;
        heigth: 400px;
    }
</style>
```
- 那么下面如何画个圆呢？
- border-radius > = width/height(正方形) 的一半 就是个圆。去查[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)还就知道
关键词 + mdn
border-radius + mdn 搜
```
<style>
    #八卦 {
        border: 3px solid black;;
        width: 400px;
        heigth: 400px;
        border-radius: 200px;
    }
</style>
```
- 在圆中画个S 当然这样挺难，我们把圆对半分
  div+div 按下 tap 等于2个div 这是[emmet用法](https://docs.emmet.io/cheat-sheet/)的快捷键用法 好的编辑器都支持。
  是在不会看[emmet官方视频](https://docs.emmet.io/)
```
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
-  
- #八卦 这个div元素下面的子元素的第1个元素的样式
```
    #八卦>div:first-child{
        border: 1px solid green;;
    }
```    
因为我们懒没有给每一个div 设置id 所以我们用nth-child（）来设置div
    八卦元素下面的子元素的第2个元素的样式
```    
    #八卦>div:nth-child(2){
        border: 1px solid black;;
    }
```
- 我们想让1放左边 2放右边 那么先把div大小调整一下



``` 
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
```
    #八卦 {
        border: 3px solid black;;
        width: 400px;
        heigth: 400px;
        border-radius: 200px;
        position: relative;
    }
```
然后在 1  2这俩div样式上
``` 
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
```
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
```
* {
    //改变盒模型
    box-sizing: border-box;
}
```
- 下面改变1 2 div的高度和圆一样高 也就是和id叫八卦的div一样高
```
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
```
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
```
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
```
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
```
    #八卦>div:nth-child(3){
        border: 10px solid yellow;
        position: absolute;
    }

```
我们发现在页面找不到黄色的div3那是因为overflow: hidden没有注释 超过圆的部分隐藏 所以我们看不到第三个div
```
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
```
    #八卦>div:nth-child(3){
        border: 10px solid yellow;
        position: absolute;
        width: 200px;
        height: 200px;
        left: 25%
    }
```
不过这是个特殊情况 因为div3的宽度是这个圆的一半 一般我会先把这个第三个div的左上角弄到这个圆的一半的位置left: 50%，然后让第三个div回退自身的一半        margin-left: -100px;

```
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
```
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
```
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
```
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
```
body{
    background:gray;
}

```
这样就行了 如果感觉这个灰色难看就换一个
```
body{
    background:#ddd;
}
```
想更浅就
```
body{
    background:#eee;
}
```
- 现在八卦还缺 第三个div里面又一个白的小圆
重复之前的操作 直接抄第三个div的样式来修改
```
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
```
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
- 加动画 让八卦转起来
- 用flex做居中
#### 部署

#### 加入ts
#### 后顾的时候再补坑吧

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