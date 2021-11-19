# PHP语法规则

> 目标：PHP语法规则是为掌握PHP开发的基础规范，为后续学习和开发做准备

* PHP标记：PHP代码起始标记
* PHP注释：描述代码逻辑
* PHP语句结束符：一行代码的结束标记

## 1、PHP标记

> 提问：PHP可以嵌入到HTML中，那么PHP引擎如何准备识别PHP代码并进行解析呢？
>
> 答案：PHP标记
>

### 概念

**PHP标记**：标记是用来帮助PHP引擎识别PHP代码的，PHP标记分为两个部分

* 标记开始：`<?php`

* 标记结束：`?>`

### 步骤

1、在开始编写PHP代码之前先使用开始标记：`<?php`

2、开始标记之后的所有内容都属于PHP引擎解析的范畴

3、在PHP代码写完之后使用结束标记：`?>`

4、如果PHP代码是一个独立的PHP文件（或者一直到最后都是PHP代码），那么可以没有结束标记`?>`

### 示例

1、有结束标记的使用（多用于嵌入到HTML中）

```php+HTML
<html>
    <head>
        
    </head>
    <body>
        <!--当前内容属于HTML内容-->
        
        <!--开始PHP代码书写：先写出PHP开始标记<?php-->
        <?php
    		这里的内容都属于PHP的，PHP引擎也只会解析这部分内容
    	?>
        <!--PHP代码书写结束，需要使用PHP结束标记?>-->
    </body>
</html>
    
```

2、没有结束标记的使用（多为独立的PHP文件）

```php
<?php	
    都是PHP代码（包括空行到结尾）
    PHP引擎会自动解析到最后
```

### 小结

1、PHP标记是为了让PHP引擎能够识别PHP代码

2、PHP标记分为起始和结束两个部分

* 起始标记：`<?php`，是PHP代码开始前必须先写好的
* 结束标记：`?>`，如果是独立PHP文件，不建议使用；如果是嵌入在HTML，最好使用

## 2、PHP注释

> 提问：写代码时，如何清晰的让自己或者团队知道代码有什么作用？
>
> 答案：注释
>

### 概念

**注释**：注释是一种使用代码符号之外的、通俗易懂的文字描述代码作用或者逻辑的符号。PHP引擎在解析时，会忽略注释标记及被注释的内容。

注释分为两种：

* 行注释：`#`或者`//`，标记**当前行**符号后面的内容
* 块注释：`/*...*/`，标记**起始和结束符号内**的所有内容

### 使用规则

1、行注释：当前注释描述的内容不多，或者不会超过一行

* 独占一行使用
* 在代码之后使用

2、块注释：当前注释描述的内容较多，通常会有多种信息或者内容较多超过一行

* 独占一行开始：`/*`
* 独占一行结束：`*/`

### 示例

```php
#1、这是一行独立的注释，下面的内容将输出hello world（建议）
echo 'hello world';	//2、简单内容也可以在代码后直接写（不建议）
	
/*
 3、从这开始全是注释
 @author 作者信息
 @date	 开发日期
*/
```

### 小结

- 注释是为了让**人**在看代码时能够容易看懂代码
- 注释分为两种基本类型
  - 行注释：使用`#`或者`//`，用来注释简单描述
  - 块注释：使用`/*...*/`，用来注释复杂描述
- 一个具有良好职业素养的程序员应该尽可能多的使用注释来描述自己的代码

## 3、语句结束符

> 提问：PHP写代码的时候，系统怎么能区分代码是一个部分还是一个整体呢？
>
> 回答：语句结束符
>

### 概念

**语句结束符**：是一种必须的，显示的书写出来，用来告知PHP引擎，当前代码是一个整体的符号。在PHP中必须使用`;`（英文分号）来作为一行代码的语句结束符

### 示例

```php
#下面是一行独立代码（√）
echo 'hello world';		#echo 'hello world'是一个整体，而且结束了，所以必须使用；

#下面是一行错误独立代码（×）
echo 'hey girl'			#没有语句结束符;，系统会认为还没结束，会报错
```

### 小结

1、PHP语句结束符是用来表明一行代码已经书写完毕

2、PHP语句结束符使用`;`

3、PHP语句结束符必须存在，否则报错

4、养成一个写完代码就写语句结束符的习惯，让代码少小错误

## 4、总结

**1、PHP基础知识包含三个内容**

* PHP标记：让PHP引擎识别PHP代码
  * 起始标记（必写）：`<?php`
  * 结束标记（看情况）：`?>`
* PHP注释：用通俗的文字描述代码的作用
  * 行注释：注释一行信息，使用`#`或者`//`
  * 快注释：注释多行信息，使用`/*...*/`
  * 合格的程序员要养成良好的注释习惯
* 语句结束符：让PHP引擎知道一行代码已经写完
  * 使用方式：`;`（英文分号）

**2、掌握了PHP语法规则，我们就可以开始真正学习PHP的内在知识**