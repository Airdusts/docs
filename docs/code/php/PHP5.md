# 标签语法

> 目标：了解标签语法的结构，掌握标签语法的意义和实际使用

> 举个栗子

PHP嵌入在HTML中输出表格

```php
<html>
    <head>
        <title>PHP嵌入到HTML中</title>
    </head>
    <body>
        <!--动态输出表格数据：打印九九乘法表-->
        <table>
            <?php
            	#外层循环：控制行（一行一个tr标记控制）
                for($i = 1;$i <= 9; $i++){
					echo '<tr>';
                    #内存循环：控制列和输出（一列一个td标签控制）
                    for($j = 1;$j <= 9;$j++){
                        echo '<td>';
                        #判定
                        if($j <= $i){                            
                            echo "$i * $j = " . $i * $j;  
                        } 
                        echo '</td>';
                    }
                    
                    echo '</tr>';
                }
            ?>
        </table>
    </body>
</html>
```



以上代码存在一个不好的地方

1、一些原本是HTML的代码如`<tr>`标记和`<td>`标记，都是直接写入到PHP，不利于前端维护

* 不方便样式控制
* 不方便属性控制

解决方案：让PHP只管数据，不管HTML标记

```php
<html>
    <head>
        <title>PHP嵌入到HTML中</title>
    </head>
    <body>
        <!--动态输出表格数据：打印九九乘法表：凡是HTML标记，都不受PHP控制-->
        <table>
            <?php
            	#外层循环：控制行（一行一个tr标记控制）
                for($i = 1;$i <= 9; $i++){      
            ?>
            <!--HTML标记不再属于PHP内部控制的代码-->
            <tr>
               <?php
                  #内存循环：控制列和输出（一列一个td标签控制）
                  for($j = 1;$j <= 9;$j++){
                ?>
                <!--HTML标记不再属于PHP内部控制的代码-->
                <td>
                <?php
                    if($j <= $i){
                        echo "$i * $j = " . $i * $j;
                    }     
                ?>
                <!--HTML标记不再属于PHP内部控制的代码-->
                </td>
                <?php }?>
            <!--HTML标记不再属于PHP内部控制的代码-->        
            </tr>
            <?php }?>
        </table>
    </body>
</html>
```



提问：以上代码中出现了很多的开始和结束标记，如循环和分支的，这样下来整个代码的阅读性变得很差，有没有办法解决呢？

回答：标签语法



> 概念

**标签语法**：指当PHP嵌入到HTML中时，为了让PHP代码的结构更加符合HTML的规范而设定的语法结构

* PHP标签语法不是所有的结构都存在
* PHP标签语法只提供了两种针对{}的解决方案
  * 分支标签：即当分支语法出现时，可以使用标签语法代替
  * 循环标签：即当循环语法出现时，可以使用标签语法代替
* 标签语法规则
  * 当分支或循环的 `{` 出现时，使用冒号 `:` 代替
  * 当分支或循环的 `}` 出现时，使用相应的 `end + 标记内容;` 代替
* PHP提供的标记语法
  * IF分支
  * switch分支
  * while循环
  * for循环
  * foreach循环
  * 语法格式
    * 起始标记（if为例）： `if(条件表达式):`
    * 结束标记（if为例）： `endif;`



> 步骤

1、正常将PHP嵌入到HTML代码中：HTML标记独立在PHP代码之外

2、如果碰到分支或者循环，考虑内部代码是否涉及HTML标记

* 不涉及：直接写完
* 涉及：那么使用标签语法



> 示例

将上述案例换成PHP标记语法

```php
<html>
    <head>
        <title>PHP嵌入到HTML中</title>
    </head>
    <body>
        <!--动态输出表格数据：打印九九乘法表：凡是HTML标记，都不受PHP控制-->
        <table>
            <?php
            	#外层循环：控制行（一行一个tr标记控制）
                for($i = 1;$i <= 9; $i++):     
            ?>
            <!--HTML标记不再属于PHP内部控制的代码-->
            <tr>
               <?php
                  #内存循环：控制列和输出（一列一个td标签控制）
                  for($j = 1;$j <= 9;$j++):
                ?>
                <!--HTML标记不再属于PHP内部控制的代码-->
                <td>
                <?php
                    #此处没有HTML标签介入，所以不用拆分
                    if($j <= $i){
                        echo "$i * $j = " . $i * $j;
                    }     
                ?>
                <!--HTML标记不再属于PHP内部控制的代码-->
                </td>
                <!--内存的for循环结束-->
                <?php endfor;?>
            <!--HTML标记不再属于PHP内部控制的代码-->        
            </tr>
            <!--外层的for循环结束-->
            <?php endfor;?>
        </table>
    </body>
</html>
```



> 流程图示例

流程图分析上述拆分PHP代码的解析逻辑


![解析逻辑](/img/php/解析流程图.png)



> 小结

1、标签语法是PHP基本语法的一种替代方式

2、PHP标签语法适用于分支和循环标记

3、PHP标签语法的格式就是代替分支和循环的{}，其中

* `{` 替代为 `:`
* `}` 替代为 `end + 标记内容;` 

4、PHP标签语法一般是为了方便前后端分离（PHP嵌入到HTML中）

* 分离PHP和HTML标记：方便前端设计HTML标记属性和样式效果
* 方便后台编程控制：当有多层` {` 和 `}` 时，容易进行标记匹配

5、扩展：PHP标签语法也可以在PHP代码里使用，但是不建议

```php
<?php
    #PHP标签语法
    if(10 < 100):
		echo '10';
	endif;
```

