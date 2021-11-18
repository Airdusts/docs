# DOM

## DOM概念

Document Object Model 文档对象模型
将标记语言文档的各个组成部分，封装为对象。可以使用这些对象，对标记语言文档进行CRUD的动态操作

## DOM概述

W3C DOM 标准被分为 3 个不同的部分：

- 核心 DOM - 针对任何结构化文档的标准模型
  - Document：文档对象
  - Element：元素对象
  - Attribute：属性对象
  - Text：文本对象
  - Comment:注释对象
  - **Node：节点对象，其他5个的父对象**
- XML DOM - 针对 XML 文档的标准模型
- HTML DOM - 针对 HTML 文档的标准模型

## DOM-Document对象

### 创建

在html dom模型中可以使用window对象来获取

- window.document
- document

### 方法

#### 获取Element对象：

- \1. getElementById() ： 根据id属性值获取元素对象。id属性值一般唯一
- \2. getElementsByTagName()：根据元素名称获取元素对象们。返回值是一个数组
- \3. getElementsByClassName():根据Class属性值获取元素对象们。返回值是一个数组
- \4. getElementsByName(): 根据name属性值获取元素对象们。返回值是一个数组

#### 创建其他DOM对象：

- createAttribute(name)
- createComment()
- createElement()
- createTextNode()

#### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM-document文档对象</title>
</head>
<body>
    <div id="div1"></div>
    <div id="div2"></div>
    <div id="div3"></div>
    <div class="cls1"></div>
    <div class="cls1"></div>
    <input type="text" name="username">

<script>
    /*
    Document：文档对象
		1. 创建(获取)：在html dom模型中可以使用window对象来获取
			1. window.document
			2. document
		2. 方法：
			1. 获取Element对象：
				1. getElementById()： 根据id属性值获取元素对象。id属性值一般唯一
				2. getElementsByTagName()：根据元素名称获取元素对象们。返回值是一个数组
				3. getElementsByClassName():根据Class属性值获取元素对象们。返回值是一个数组
				4. getElementsByName(): 根据name属性值获取元素对象们。返回值是一个数组
			2. 创建其他DOM对象：
				* createAttribute(name)
            	createComment()
            	createElement()
            	createTextNode()
     */
    //getElementsByTagName()：根据元素名称获取元素对象们。返回值是一个数组
    var divs = document.getElementsByTagName("div");
    alert(divs.length);//5

    //getElementsByClassName():根据Class属性值获取元素对象们。返回值是一个数组
    var div_cls = document.getElementsByClassName("cls1");
    alert(div_cls.length);//2

    //getElementsByName(): 根据name属性值获取元素对象们。返回值是一个数组
    var ele_username = document.getElementsByName(username);
    //alert(ele_username.length);//1

    //createAttribute(name)
    var table = document.createElement("table");
    alert(table);

</script>
</body>
</html>
```

## DOM-Element：元素对象

### 获取/创建

通过document来获取和创建

document.getElementById("id值"):通过元素的id获取元素对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM获取元素对象</title>
    <script>
        /*
    document.getElementById("id值"):通过元素的id获取元素对象
         */

        //通过id获取元素对象
        var light = document.getElementById("light");
        alert(light);//null,无法获取
    </script>
</head>
<body>
<img id="light" src="src/off.gif">
<h1 id="title">微尘的小屋</h1>
<script>
    //通过id获取元素对象
    var light = document.getElementById("light");
    alert(light);//[object HTMLImageElement]

    alert("我要换图片了");
    light.src = "src/on.gif";

    //1.获取h1标签对象
    var title = document.getElementById("title");
    alert("我要换文字了");
    //2.修改对象
    title.innerHTML = "Airdust";
</script>
</body>
</html>
```

### 方法

#### 修改属性值

- \1. removeAttribute()：删除属性
- \2. setAttribute()：设置属性

#### 修改标签体内容

使用innerHTML属性修改标签体内容（具体在下面HTMLDOM中介绍）

### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM-Element对象</title>
</head>
<body>
<a>点我试一试</a>
<input type="button" id="btn_set" value="设置属性">
<input type="button" id="btn_remove" value="删除属性">
<script>
  /*
  Element：元素对象
		1. 获取/创建：通过document来获取和创建
		2. 方法：
			1. removeAttribute()：删除属性
			2. setAttribute()：设置属性
   */
  var btn_set = document.getElementById("btn_set");
  btn_set.onclick = function (){
    //获取a标签
    var element_a = document.getElementsByTagName("a")[0];
    element_a.setAttribute("href","https://www.baidu.com");
  }

  var btn_remove = document.getElementById("btn_remove");
  btn_remove.onclick = function (){
    //获取a标签
    var element_a = document.getElementsByTagName("a")[0];
    element_a.removeAttribute("href");
  }

</script>
</body>
</html>
```

## DOM-Node：节点对象，其他5个的父对象

### 特点

所有dom对象都可以被认为是一个节点

### 方法

#### CRUD dom树：

- appendChild()：向节点的子节点列表的结尾添加新的子节点。
- removeChild() ：删除（并返回）当前节点的指定子节点。
- replaceChild()：用新节点替换一个子节点。

#### 属性

parentNode 返回节点的父节点。

### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM-Node对象</title>
    <style>
      div{
        border: 1px solid red;
      }
      #div1{
        width: 200px;
        height: 200px;
      }
      #div2{
        width: 100px;
        height: 100px;
      }
      #div3{
        width: 100px;
        height: 100px;
      }
    </style>
</head>
<body>
<div id="div1">
  <div id = div2>div2</div>
  div1
</div>
<!--<a href="#" id="de1">删除子节点</a>//这里超链接的不会删除,因为虽然超链接为空，但是仍然访问了为空的超链接，-->
<a href="javascript:void(0);" id="de1">删除子节点</a>
<a href="javascript:void(0);" id="add">添加子节点</a>
<!--或者使用input标签-->
<!--<input type="button" id="de1" value="删除子节点">-->
<script>
  //添加子节点
  //获取超链接
  var element_a = document.getElementById("de1");
  //绑定单击事件
  element_a.onclick = function (){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    div1.removeChild(div2);
  }
  //删除子节点
  //获取超链接
  var element_add = document.getElementById("add");
  //绑定单击事件
  element_add.onclick = function (){
    var div1 = document.getElementById("div1");
    var div3 = document.createElement("div");
    div3.setAttribute("id","div3");
    div1.appendChild(div3);
  }
</script>
</body>
</html>
```

## 综合示例：动态表格

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>动态表格</title>
  <style>
    table{
      border: 1px solid;
      margin: auto;
      width: 500px;
    }
    td,th{
      text-align: center;
      border: 1px solid;
    }
    div{
      text-align: center;
      margin: 50px;
    }
  </style>
</head>
<body>
<div>
  <input type="text" id="id" placeholder="请输入编号">
  <input type="text" id="name"  placeholder="请输入姓名">
  <input type="text" id="gender"  placeholder="请输入性别">
  <input type="button" value="添加" id="btn_add">
</div>
<table>
  <caption>学生信息表</caption>
  <tr>
    <th>编号</th>
    <th>姓名</th>
    <th>性别</th>
    <th>操作</th>
  </tr>
  <tr>
    <td>1</td>
    <td>hong</td>
    <td>男</td>
    <td><a href="javascript:void(0);" onclick="delTr(this);">删除</a></td>
  </tr>
  <tr>
    <td>2</td>
    <td>chen</td>
    <td>男</td>
    <td><a href="javascript:void(0);" onclick="delTr(this);">删除</a></td>
  </tr>
  <tr>
    <td>3</td>
    <td>ming</td>
    <td>?</td>
    <td><a href="javascript:void(0);" onclick="delTr(this);" >删除</a></td>
  </tr>
</table>
<script>
  /*
      分析：
          1.添加：
              1. 给添加按钮绑定单击事件
              2. 获取文本框的内容
              3. 创建td，设置td的文本为文本框的内容。
              4. 创建tr
              5. 将td添加到tr中
              6. 获取table，将tr添加到table中
          2.删除：
              1.确定点击的是哪一个超链接
                  <a href="javascript:void(0);" onclick="delTr(this);" >删除</a>
              2.怎么删除？
                  removeChild():通过父节点删除子节点
   */
//1.获取按钮
document.getElementById("btn_add").onclick = function(){
       //2.获取文本框的内容
       var id = document.getElementById("id").value;
       var name = document.getElementById("name").value;
       var gender = document.getElementById("gender").value;

       //3.创建td，赋值td的标签体
       //id 的 td
       var td_id = document.createElement("td");
       var text_id = document.createTextNode(id);
       td_id.appendChild(text_id);
       //name 的 td
       var td_name = document.createElement("td");
       var text_name = document.createTextNode(name);
       td_name.appendChild(text_name);
       //gender 的 td
       var td_gender = document.createElement("td");
       var text_gender = document.createTextNode(gender);
       td_gender.appendChild(text_gender);
       //a标签的td
       var td_a = document.createElement("td");
       var ele_a = document.createElement("a");
       ele_a.setAttribute("href","javascript:void(0);");
       ele_a.setAttribute("onclick","delTr(this);");
       var text_a = document.createTextNode("删除");
       ele_a.appendChild(text_a);
       td_a.appendChild(ele_a);

       //4.创建tr
       var tr = document.createElement("tr");
       //5.添加td到tr中
       tr.appendChild(td_id);
       tr.appendChild(td_name);
       tr.appendChild(td_gender);
       tr.appendChild(td_a);
       //6.获取table
       var table = document.getElementsByTagName("table")[0];
       table.appendChild(tr);
   }
```

## HTML DOM

### 标签体的设置和获取

**innerHTML**

### 使用html元素对象的属性

下面不要求都要掌握，需要时查阅文档就可以，文档来源于w3school

- [Document](https://www.w3school.com.cn/jsref/dom_obj_document.asp)
- [Anchor](https://www.w3school.com.cn/jsref/dom_obj_anchor.asp)
- [Area](https://www.w3school.com.cn/jsref/dom_obj_area.asp)
- [Base](https://www.w3school.com.cn/jsref/dom_obj_base.asp)
- [Body](https://www.w3school.com.cn/jsref/dom_obj_body.asp)
- [Button](https://www.w3school.com.cn/jsref/dom_obj_pushbutton.asp)
- [Canvas](https://www.w3school.com.cn/jsref/dom_obj_canvas.asp)
- [Event](https://www.w3school.com.cn/jsref/dom_obj_event.asp)
- [Form](https://www.w3school.com.cn/jsref/dom_obj_form.asp)
- [Frame](https://www.w3school.com.cn/jsref/dom_obj_frame.asp)
- [Frameset](https://www.w3school.com.cn/jsref/dom_obj_frameset.asp)
- [IFrame](https://www.w3school.com.cn/jsref/dom_obj_iframe.asp)
- [Image](https://www.w3school.com.cn/jsref/dom_obj_image.asp)
- [Input Button](https://www.w3school.com.cn/jsref/dom_obj_button.asp)
- [Input Checkbox](https://www.w3school.com.cn/jsref/dom_obj_checkbox.asp)
- [Input File](https://www.w3school.com.cn/jsref/dom_obj_fileupload.asp)
- [Input Hidden](https://www.w3school.com.cn/jsref/dom_obj_hidden.asp)
- [Input Password](https://www.w3school.com.cn/jsref/dom_obj_password.asp)
- [Input Radio](https://www.w3school.com.cn/jsref/dom_obj_radio.asp)
- [Input Reset](https://www.w3school.com.cn/jsref/dom_obj_reset.asp)
- [Input Submit](https://www.w3school.com.cn/jsref/dom_obj_submit.asp)
- [Input Text](https://www.w3school.com.cn/jsref/dom_obj_text.asp)
- [Link](https://www.w3school.com.cn/jsref/dom_obj_link.asp)
- [Meta](https://www.w3school.com.cn/jsref/dom_obj_meta.asp)
- [Object](https://www.w3school.com.cn/jsref/dom_obj_object.asp)
- [Option](https://www.w3school.com.cn/jsref/dom_obj_option.asp)
- [Select](https://www.w3school.com.cn/jsref/dom_obj_select.asp)
- [Style](https://www.w3school.com.cn/jsref/dom_obj_style.asp)
- [Table](https://www.w3school.com.cn/jsref/dom_obj_table.asp)
- [TableCell](https://www.w3school.com.cn/jsref/dom_obj_tabledata.asp)
- [TableRow](https://www.w3school.com.cn/jsref/dom_obj_tablerow.asp)
- [Textarea](https://www.w3school.com.cn/jsref/dom_obj_textarea.asp)

### 控制元素样式

\1. 使用元素的style属性来设置

//修改样式方式1
div1.style.border = "1px solid red";
div1.style.width = "200px";
//font-size--> fontSize
div1.style.fontSize = "20px";

### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTMLDOM-innerHTML</title>
</head>
<body>
<div id = "div1">
  div
</div>
<script>
  var div = document.getElementById("div1");
  var innerHTML = div.innerHTML;
  //alert(innerHTML);
  //div标签中替换一个文本输入框
  div.innerHTML = "<input type = 'text'>";
  //div标签中追加一个文本输入框
  div.innerHTML  += "<input type='text'>";
</script>
</body>
</html>
```

\2. 提前定义好类选择器的样式，通过元素的className属性来设置其class属性值。

### 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML-DOM_控制样式</title>
    <style>
        .d1{
            border: 1px solid red;
            width: 100px;
            height: 100px;
        }
        .d2{
            border: 1px solid blue;
            width: 200px;
            height: 200px;
        }

    </style>
</head>
<body>
<div id="div1">div1</div>
<div id="div2">div2</div>
<script>
    var div1 = document.getElementById("div1");
    div1.onclick = function (){
        div1.style.border = "1px solid red";
        div1.style.width = "200px";
        //CSS中的font-size-->fontSize
        div1.style.fontSize = "18px";
    }
    var div2 = document.getElementById("div2");
    div2.onclick = function (){
        div2.className = "d1";
    }
</script>

</body>
</html>
```

## 综合示例：动态表格（innerHTML版）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>动态表格</title>

  <style>
    table{
      border: 1px solid;
      margin: auto;
      width: 500px;
    }
    td,th{
      text-align: center;
      border: 1px solid;
    }
    div{
      text-align: center;
      margin: 50px;
    }
  </style>
</head>
<body>
<div>
  <input type="text" id="id" placeholder="请输入编号">
  <input type="text" id="name"  placeholder="请输入姓名">
  <input type="text" id="gender"  placeholder="请输入性别">
  <input type="button" value="添加" id="btn_add">
</div>
<table>
  <caption>学生信息表</caption>
  <tr>
    <th>编号</th>
    <th>姓名</th>
    <th>性别</th>
    <th>操作</th>
  </tr>

  <tr>
    <td>1</td>
    <td>hong</td>
    <td>男</td>
    <td><a href="javascript:void(0);" onclick="delTr(this);">删除</a></td>
  </tr>

  <tr>
    <td>2</td>
    <td>chen</td>
    <td>男</td>
    <td><a href="javascript:void(0);" onclick="delTr(this);">删除</a></td>
  </tr>

  <tr>
    <td>3</td>
    <td>ming</td>
    <td>?</td>
    <td><a href="javascript:void(0);" onclick="delTr(this);" >删除</a></td>
  </tr>
</table>
<script>
  /*
      分析：
          1.添加：
              1. 给添加按钮绑定单击事件
              2. 获取文本框的内容
              3. 创建td，设置td的文本为文本框的内容。
              4. 创建tr
              5. 将td添加到tr中
              6. 获取table，将tr添加到table中
          2.删除：
              1.确定点击的是哪一个超链接
                  <a href="javascript:void(0);" onclick="delTr(this);" >删除</a>
              2.怎么删除？
                  removeChild():通过父节点删除子节点

   */
  //使用innerHTML添加
  document.getElementById("btn_add").onclick = function() {
    //2.获取文本框的内容
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;

    //获取table
    var table = document.getElementsByTagName("table")[0];

    //追加一行
    table.innerHTML += "<tr>\n" +
            "        <td>"+id+"</td>\n" +
            "        <td>"+name+"</td>\n" +
            "        <td>"+gender+"</td>\n" +
            "        <td><a href=\"javascript:void(0);\" onclick=\"delTr(this);\" >删除</a></td>\n" +
            "    </tr>";
  }
  //删除方法
  function delTr(obj){
    var table = obj.parentNode.parentNode.parentNode;
    var tr = obj.parentNode.parentNode;

    table.removeChild(tr);
  }
</script>
</body>
</html>
```

123