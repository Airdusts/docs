# BOM

## BOM概念

Browser Object Model 浏览器对象模型

## BOM组成

- Window：窗口对象
- Navigator：浏览器对象
- Screen：显示器屏幕对象
- History：历史记录对象
- Location：地址栏对象

## BOM-Window：窗口对象

### 1.与弹出框有关的

- alert() 显示带有一段消息和一个确认按钮的警告框。
- confirm() 显示带有一段消息以及确认按钮和取消按钮的对话框。
  - 如果用户点击确定按钮，则方法返回true
  - 如果用户点击取消按钮，则方法返回false
- prompt() 显示可提示用户输入的对话框。
  - 返回值：获取用户输入的值

#### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BOM-window对象-alert&confirm&prompt方法</title>
    <script>
        /*
            Window：窗口对象
            1. 创建
            2. 方法
                 1. 与弹出框有关的方法：
                    alert()	显示带有一段消息和一个确认按钮的警告框。
                    confirm()	显示带有一段消息以及确认按钮和取消按钮的对话框。
                        * 如果用户点击确定按钮，则方法返回true
                        * 如果用户点击取消按钮，则方法返回false
                    prompt()	显示可提示用户输入的对话框。
                        * 返回值：获取用户输入的值
                 
         */
        //alert()	显示带有一段消息和一个确认按钮的警告框。
        alert("hello");
        window.alert("hello!");

        //confirm()	显示带有一段消息以及确认按钮和取消按钮的对话框。
        confirm("你确定要退出吗？");
        window.confirm("你确定要退出吗？");
        //如果用户点击确定按钮，则方法返回true，如果用户点击取消按钮，则方法返回false，可以利用这点来判断
        var flag = confirm("你确定要退出吗？");
        if (flag){
             //退出操作
             alert("欢迎再次光临");
         }else {
             alert("点错了...");
         }
    </script>
</body>
</html>
```

### 2.与打开关闭有关的方法：

- close() 关闭浏览器窗口。
  - 谁调用我 ，我关谁
- open() 打开一个新的浏览器窗口
  - 返回新的Window对象

#### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BOM-window对象1</title>
</head>
<body>
    <input id = "openBtn" type="button" value="打开窗口">
    <input id = "closeBtn" type="button" value="关闭窗口">
    <script>
        /*
        //打开新窗口
        //open();//用户体验不好
        var openBtn = document.getElementById("openBtn");
        openBtn.onclick = function (){
            open("https://www.baidu.com");
        }

        //关闭新窗口
        var closeBtn = document.getElementById("closeBtn");
        closeBtn.onclick = function (){
            close();//关闭当前窗口
            //那么怎样关闭打开过的窗口呢？
        }
        */
        //那么怎样关闭打开过的窗口呢？
        var openBtn = document.getElementById("openBtn");
        var newWindow;
        openBtn.onclick = function (){
            newWindow = open("https://www.baidu.com");
        }

        //关闭新窗口
        var closeBtn = document.getElementById("closeBtn");
        closeBtn.onclick = function (){
            newWindow.close();//关闭当前窗口
        }
    </script>
</body>
</html>
```

### 3.与定时器有关的方法

- setTimeout() 在指定的毫秒数后调用函数或计算表达式。 
  - 参数：1. js代码或者方法对象。2. 毫秒值
  - 返回值：唯一标识，用于取消定时器 
- clearTimeout() 取消由 setTimeout() 方法设置的 timeout。
- setInterval() 按照指定的周期（以毫秒计）来调用函数或计算表达式
- clearInterval() 取消由 setInterval() 设置的 timeout。

#### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BOM-window对象2</title>
    <script>
      /*
           Window：窗口对象
           1. 创建
           2. 方法
                3. 与定时器有关的方式
                   setTimeout()	在指定的毫秒数后调用函数或计算表达式。
                       * 参数：
                           1. js代码或者方法对象
                           2. 毫秒值
                       * 返回值：唯一标识，用于取消定时器
                   clearTimeout()	取消由 setTimeout() 方法设置的 timeout。

                   setInterval()	按照指定的周期（以毫秒计）来调用函数或计算表达式。
                   clearInterval()	取消由 setInterval() 设置的 timeout。
        */
      //定时器
      //一次性定时器
      //直接写法，但是阅读性差
      setTimeout("alert('boom~~');",3000);

      //函数写法
      //setTimeout("fun();",5000);
      setTimeout(fun,5000);//与上面一样
      function fun(){
        alert('boom~~')
      }

      //循环定时器
      setInterval(fun,5000);//每五秒一次

      //取消定时器
      var id = setTimeout(fun,1000);//定时器会传回一个唯一的定时器id
      clearInterval(id);//利用定时器id来控制定时器
    </script>
</head>
<body>

</body>
</html>
```

### Window对象属性

#### 1. 获取其他BOM对象：

- history
- location
- Navigator
- Screen

#### 2. 获取DOM对象

- document

#### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BOM-windows_3_属性(与10_4结合)</title>
    <script>
      /*
      3. 属性：
               1. 获取其他BOM对象：
                   history
                   location
                   Navigator
                   Screen:
               2. 获取DOM对象
                   document
       */
      //获取history
      var h1 = window.history;
      var h2 = history;

      alert(h1);
      alert(h2);

      var openBtn = window.document.getElementById("openBtn");
      alert(openBtn);
    </script>
</head>
<body>

</body>
</html>
```

### Window对象特点

- Window对象不需要创建可以直接使用 window使用。 window.方法名();
- window引用可以省略。 方法名();

### 综合示例：轮播图

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>示例：轮播图</title>
    <script>
        /*
        分析：1.在页面上使用img标签展示图片
        2.定义一个方法，修改图片对象的src属性
         */
        var number = 1;

        function fun() {
            number++;
            if (number > 3) {
                number = 1;
            }
            var img = document.getElementById("img");//3s中图片可以加载
            img.src = "src/pic_"+number+".jpg";
        }
        //2.定义定时器
        setInterval(fun,3000);
    </script>
</head>
<body>
<img id=img src="src/pic_1.jpg" width="100%">
</body>
</html>
```

## BOM-Location：地址栏对象

### 创建

- window.location
- location

### 方法

- reload() 重新加载当前文档。刷新

### 属性

- href 设置或返回完整的 URL。

### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BOM_location对象</title>
</head>
<body>
  <input type="button" id="btn" value="shuaxin">
  <input type="button" id="goblog" value="blog">
  <script>
    //reload方法，定义一个按钮，点击按钮，刷新当前页面
    //1.获取流程
    var btn = document.getElementById("btn");
    //绑定单击事件
    btn.onclick = function (){
      location.reload();
    }

    //获取href
    var href = Location.href;
    //1.获取流程
    var goblog = document.getElementById("goblog");
    //绑定单击事件
    goblog.onclick = function (){
        Location.href = "https://www.baidu.com";
    }
  </script>
</body>
</html>
```

### 综合案例：自动跳转首页

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>案例:自动跳转首页</title>
    <style>
      p{
        text-align: center;
      }
      span{
        color: red;
      }
    </style>

</head>
<body>
  <p>
    <span id="time">5</span>秒之后，自动跳转到首页...
  </p>
  <script>
    /*
    分析：1.显示页面效果
    2.倒计时读秒效果实现
      2.1 定义一个方法，获取span标签，修改span标签体内容，时间--
      2.2 定义一个计时器，1秒执行一次方法
    3.在方法中判断时间如果<=0,则跳转到首页。
     */
    var second = 5;
    var time = document.getElementById("time");
    //定义一个方法，获取span标签，修改span标签体内容，时间--
    function showTime(){
      second--;
      //判断时间如果<=0,则跳转到首页。
      if (second<=0){
        //跳转
        location.href = "https://www.baidu.com";
      }
      time.innerHTML = second +"";
    }

    //设置定时器，1秒执行一次方法
    setInterval(showTime,1000);
  </script>
</body>
</html>
```

## History：历史记录对象

### 创建

- window.history
- history

### 方法

- back() 加载 history 列表中的前一个 URL。
- forward() 加载 history 列表中的下一个 URL。
- go(参数) 加载 history 列表中的某个具体页面。
  - 正数：前进几个历史记录
  - 负数：后退几个历史记录

### 属性

- length 返回当前窗口历史列表中的 URL 数量

### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BOM-history对象</title>

</head>
<body>
<input type="button" id="btn" value="获取历史记录个数">
<a href="10_92.html">跳转页面</a>
<input type="button" id="forward" value="前进">
<script>
    /*
  History：历史记录对象
  1. 创建(获取)：
      1. window.history
      2. history

  2. 方法：
      * back()	加载 history 列表中的前一个 URL。
      * forward()	加载 history 列表中的下一个 URL。
      * go(参数)	加载 history 列表中的某个具体页面。
          * 参数：
              * 正数：前进几个历史记录
              * 负数：后退几个历史记录
  3. 属性：
      * length	返回当前窗口历史列表中的 URL 数量。
     */
    //获取按钮
    var btn = document.getElementById("btn");
    //绑定单击事件
    btn.onclick = function () {
        //获取当前窗口历史记录个数
        var length = history.length;
        alert(length);//1
    }
    //获取按钮
    var forward = document.getElementById("forward");
    //绑定单击事件
    forward.onclick = function () {
        //前进//同浏览器前进按钮
        history.forward();
        //history.go(1);//前进1步

    }
</script>
</body>
</html>
```

### 示例：轮播图（history对象版）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>示例：轮播图（配合10_9使用）</title>

</head>
<body>
<img id=img src="src/pic_1.jpg" width="100%">
<input type="button" id="back" value="后退">
<script>
    /*
    分析：1.在页面上使用img标签展示图片
    2.定义一个方法，修改图片对象的src属性
     */
    var number = 1;

    function fun() {
        number++;
        if (number > 3) {
            number = 1;
        }
        var img = document.getElementById("img");//3s中图片可以加载
        img.src = "src/pic_"+number+".jpg";
    }
    //2.定义定时器
    setInterval(fun,3000);

    //获取按钮
    var back = document.getElementById("back");
    //绑定单击事件
    back.onclick = function () {
        //后退//同浏览器后退按钮
        history.back();
        //history.go(-1);//后退1步
    }
</script>
</body>
</html>
```

