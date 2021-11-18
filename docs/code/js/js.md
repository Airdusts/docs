# ECMAScript：客户端脚本语言的标准

## 基本语法

- 与html结合方式
  - 内部JS：定义`<script>`，标签体内容就是js代码
- 外部JS：
  - 定义`<script>`，通过src属性引入外部的js文件
  - 注意：`<script>`可以定义在html页面的任何地方。但是定义的位置会影响执行顺序。 `<script>`可以定义多个注释
- 单行注释：`//注释内容`
- 多行注释：`/**注释内容**/`

### 基本语法示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Javascript与html结合&JavaScript的注释</title>
    <!--内部js-->
    <script>
        alert("Hello World!")
        //单行注释
    </script>
    <!--当然script标签可以随便放，但放前放后的执行顺序不同，一般从上到下执行。-->

    <!--外部js-->
    <script src = "#"></script>
    <!--这里#代表js文件的地址 -->
    <script src = "9_1.js"></script>
</head>
<body>
    <!--内部js-->
</body>
</html>
```

## 数据类型

### 原始数据类型

- number：数字。 整数/小数/NaN(not a number 一个不是数字的数字类型)
- string：字符串。 字符串 "abc" "a" 'abc'
- boolean: true和false
- null：一个对象为空的占位符
- undefined：未定义。如果一个变量没有给初始化值，则会被默认赋值为undefined

### 数据类型示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>变量和typeof</title>
    <script>
        //定义变量
        var a = 3;
        alert(a);

        a = "abc";
        alert(a);

        //定义number类型
         var num = 1;
         var num2 = 1.2;
         var num3 = NaN;

        //输出到页面上
        document.write(num+"---"+typeof(num) +"<br>");
        document.write(num2+"---"+typeof(num2) +"<br>");
        document.write(num3+"---"+typeof(num3) +"<br>");

        //定义String类型
        var str = "abc";
        var str2 = "edf";
        document.write(str+"---"+typeof(str) +"<br>");
        document.write(str2+"---"+typeof(str2) +"<br>");

        //定义boolean
        var flag = true;
        document.write(flag+"---"+typeof(flag) +"<br>");

        //定义null
        var obj = null;
        var obj2 = undefined;
        var obj3;
        document.write(obj+"---"+typeof(obj) +"<br>");
        document.write(obj2+"---"+typeof(obj2) +"<br>");
        document.write(obj3+"---"+typeof(obj3) +"<br>");
        //运行结果
        /*
        1---number
        1.2---number
        NaN---number
        abc---string
        edf---string
        true---boolean
        null---object 是js的bug
        undefined---undefined
        undefined---undefined
        */
    </script>
</head>
<body>

</body>
</html>
```

### 变量

- 变量：一小块存储数据的内存空间
- Java语言是强类型语言，而JavaScript是弱类型语言。
  - 强类型：在开辟变量存储空间时，定义了空间将来存储的数据的数据类型。只能存储固定类型的数据
  - 弱类型：在开辟变量存储空间时，不定义空间将来的存储数据类型，可以存放任意类型的数据。
- 语法： var 变量名 = 初始化值; 
- typeof运算符：获取变量的类型。 注：null运算后得到的是object

## 运算符

### 一元运算符：只有一个运算数的运算符

- ++，-- ， +(正号)
- ++ --: 自增(自减)
- ++(--) 在前，先自增(自减)，再运算
- ++(--) 在后，先运算，再自增(自减)
- +(-)：正负号

注意：在JS中，如果运算数不是运算符所要求的类型，那么js引擎会自动的将运算数进行类型转换

其他类型转number：

- string转number：按照字面值转换。如果字面值不是数字，则转为NaN（不是数字的数字）
- boolean转number：true转为1，false转为0

#### 一元运算符示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>一元运算符</title>
    <script>
        //一元运算符：自增自减++&--
        var num = 3;
        var a = num++;
        document.write(num);//4
        document.write(a);//3
        document.write("<hr>");
        //一元运算符：正负号+、-
        var b = -3;
        alert(b);//-3
        //String转number:按照字面值转换，如果字面值不是数字，则转为NaN(不是数字的数字)
        var b = +"123";
        alert(typeof (b));
        alert(b);//NaN
        alert(b+1);//还是NaN
        document.write("<hr>");
        //boolean转number:true转为1，false转为0
        var flag = +true;
        var f2 = + false;
        document.write(typeof (flag)+"<br>");//number
        document.write(flag+"<br>");//1
        document.write(f2+"<br>");//0
    </script>
</head>
<body>

</body>
</html>
```

### 算术运算符：加减乘除

\+ - * / % …

#### 算术运算符示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>算术运算符</title>
    <script>
        var a = 3;
        var b = 4;
        document.write(a+b +"<br>");//7
        document.write(a-b +"<br>");//-1
        document.write(a*b +"<br>");//12
        document.write(a/b +"<br>");//0.75
        document.write(a%b +"<br>");//3//3%4=0..4故得4
    </script>
</head>
<body>
</body>
</html>
```

### 赋值运算符：自增自减和赋值

= += -+….

### 比较运算符：两个变量之间的关系

< >= <= == ===(全等于)

比较方式：

- \1. 类型相同：直接比较
  - 字符串：按照字典顺序比较。按位逐一比较，直到得出大小为止。
- \2. 类型不同：先进行类型转换，再比较
  - ===：全等于。在比较之前，先判断类型，如果类型不一样，则直接返回false

#### 比较运算符示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>比较运算符</title>
    <script>
        /*
        比较运算符：
            比较方式：1.类型相同，直接比较
                       *字符串，按照字典顺序比较，按位逐一比较，直到得出大小为止
                     2.类型不同,先进行类型转换，再比较
                       * ===全等于，在比较之前，先判断类型，如果类型不一样，则直接返回false
         */

        document.write((3>4) +"<br>");//false
        document.write(("abc">"acd")+"<br>");//false
        document.write(("123"<"123")+"<br>");//false
        document.write(("123"=="123")+"<br>");//true
        document.write(("123"==="123")+"<br>");//true
    </script>
</head>
<body>

</body>
</html>
```

### 逻辑运算符：你是真还是假？

&& || !

其他类型转boolean：

- \1. number：0或NaN为假，其他为真
- \2. string：除了空字符串("")，其他都是true
- \3. null&undefined:都是false
- \4. 对象：所有对象都为true

#### 逻辑运算符示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>逻辑运算符</title>
    <script>
        /*
             	&& || !
     			* 其他类型转boolean：
                1. number：0或NaN为假，其他为真
                2. string：除了空字符串("")，其他都是true
                3. null&undefined:都是false
                4. 对象：所有对象都为true
         */

        var flag = true;
        document.write(flag+"<br>");//true
        document.write(!flag+"<br>");//false
        document.write("<hr>");

        //1. number：0或NaN为假，其他为真
        var num = 3;
        var num2 = 0;
        var num3=NaN;
        document.write(!!num+"<br>");//true
        document.write(!!num2+"<br>");//false
        document.write(!!num3+"<br>");//false
        document.write("<hr>");

        //2. string：除了空字符串("")，其他都是true
        var str = "abc";
        var str2 = "";
        document.write(!!str+"<br>");//true
        document.write(!!str2+"<br>");//false
        document.write("<hr>");

        //3. null&undefined:都是false
        var obj = null;
        var obj2;
        document.write(!!obj+"<br>");//false
        document.write(!!obj2+"<br>");//false
        document.write("<hr>");

        //3. null&undefined:都是false
        var data = new Data();
        document.write(!!data+"<br>");//true
        document.write("<hr>");

        //Java中(但是JS也能用)
        // if (obj ! = null && obj.length>0){//防止空指针异常
        // }

        //JS中可以这样定义来简化书写
        if (obj){//防止空指针异常
            alert(123);
        }

    </script>
</head>
<body>

</body>
</html>
```

### 三元运算符：高级比较赋值

语法：

- 表达式? 值1:值2;
- 判断表达式的值，如果是true则取值1，如果是false则取值2；

#### 三元运算符示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>三元运算符</title>
    <script>
        //语法：
        //表达式? 值1:值2;
        //判断表达式的值，如果是true则取值1，如果是false则取值2；
        var a=3;
        var b=4;
        var c=a>b?1:0;
        alert(c);//0
    </script>
</head>
<body>

</body>
</html>
```

### 流程控制语句

语法结构和java相似，具体语法请参照之前的Java语法

1. if…else…
2. switch:
   - 在java中，switch语句可以接受的数据类型： byte int shor char,枚举(1.5) ,String(1.7)
     - switch(变量):
       case 值:
   - 在JS中,switch语句可以接受任意的原始数据类型
3. while
4. do…while
5. for

#### 流程控制语句示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>流程控制语句</title>
    <script>
        /*
          1. if...else...
          2. switch:在java中，switch语句可以接受的数据类型： byte int shor char,枚举(1.5) ,String(1.7)
  		                eg:switch(变量):
  			                    case 值:
  	                在JS中,switch语句可以接受任意的原始数据类型
          3. while
          4. do...while
          5. for
         */
        //switch语句
        var a =1;
        switch (a){
            case 1:
                alert("number");
                break;
            case "abc":
                alert("string");
                break;
            case true:
                alert("true");
                break;
            case null:
                alert("null");
                break;
            case undefined:
                alert("undefined");
                break;
        }
        //while语句
        //1-100求和 5050
        var sum =0;
        var num =1;

        while (num <= 100){
            sum+=num;
            num++;
        }
        alert(sum);

        //for语句
        var sum =0;
        for(var i=1;i<=100;i++){
            sum+=i;
        }
        alert(sum);
    </script>
</head>
<body>

</body>
</html>
```

### 综合练习：99乘法表

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>实例：99乘法表</title>
    <style>
        td{
            border: 1px solid;
        }
    </style>
    <script>
        //定义表格
        document.write("<table align = 'center'>");
        //1.完成基本的for循环列表，展示乘法表
        for(var i=1;i<=9;i++){
            document.write("<tr>");
            for (var j=1;j<=i;j++){
                document.write("<td>");
                //输出1*1=1
                document.write(i+"*"+j+"="+(i*j)+"&nbsp&nbsp");
                document.write("</td>");
            }
            // //输出换行
            // document.write("<br>");
            document.write("</tr>");

        }
        //2.完成表格嵌套
        document.write("</table>");
    </script>
</head>
<body>

</body>
</html>
```

## 基本对象

### Function：函数(方法)对象

#### 创建方式

1.function  方法名称(形式参数列表){  ***此处形参var可以不用写*
               方法体 }

2.var 方法名 = function(形式参数列表){
               方法体}

#### 方法

- join(参数):将数组中的元素按照指定的分隔符拼接为字符串
- push() 向数组的末尾添加一个或更多元素，并返回新的长度。

当然方法有很多，这里只列举常用的方法，更多方法请参阅：[点我进入](https://www.w3school.com.cn/js/js_array_methods.asp)

#### 属性

length:代表形参的个数

#### 特点

- 1.方法定义是，形参的类型不用写,返回值类型也不写。
- \2. 方法是一个对象，如果定义名称相同的方法，会覆盖
- \3. 在JS中，方法的调用只与方法的名称有关，和参数列表无关
- \4. 在方法声明中有一个隐藏的内置对象（数组），arguments,封装所有的实际参数

#### 调用

方法名称（实际参数列表）

#### Function示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>function对象</title>
    <script>
    //     Function：函数(方法)对象
    //     1. 创建：
    //     var fun = new Function(形式参数列表,方法体);  //不推荐
    //     2.
    //     function 方法名称(形式参数列表){  **此处形参var可以不用写
    //         方法体
    //     }
    //     3. var 方法名 = function(形式参数列表){
    //         方法体
    //     }

    //创建方式2
    function fun2(a,b){
        alert(a+b);
    }
    fun2(3,4);
    //alert(fun2.length);//2
    //创建方式3
    var fun3 = function (a,b) {
        alert(a+b);
    }
    fun3(3,4);
    //alert(fun3.length);//2

    //方法是一个对象，如果定义名称相同的方法，则会覆盖
    fun2 = function (a,b){
        //alert(a-b);
        alert(a);
        //alert(b);
    }
    //fun2(3,4);//当alert(a-b);为-1

    //方法调用
    //在JS中，方法的调用只与方法的名称有关，和参数列表无关
    fun2(1,2);//alert(a);为1
    fun2(1);//alert(a);为1,此时b没有定义，则为undefined
    fun2();//undefined
    fun2(1,2,3);//3不弹出了，在alert(b);情况下，只弹1和2,3其实赋给了arguments

    //在方法声明中有个内置对象（数组），arguments,封装所有的实际参数
    //求两个数的和
    function add(a,b){
        return a+b;
    }
    var sum = add(1,2);
    alert(sum);

    //求任意个数的和
    function add2(){
        alert(arguments[0]);//获取数组//add(1,3);//1
        alert(arguments[1]);//获取数组//add(1,3);//3
        var sum =0;
        for (var i =0;i<arguments.length;i++){
            sum +=arguments[i];
        }
        return sum;
    }
    var sum =add2(1,2);
    alert(sum);//3
    //add(1,3);
    </script>

</head>
<body>

</body>
</html>
```

### Array:数组对象

#### 创建

- \1. var arr = new Array(元素列表);
- \2. var arr = new Array(默认长度);
- \3. var arr = [元素列表];

#### 方法

- join(参数):将数组中的元素按照指定的分隔符拼接为字符串
- push() 向数组的末尾添加一个或更多元素，并返回新的长度。

#### 属性

length:数组的长度

#### 特点

- \1. JS中，数组元素的类型可变的。
- \2. JS中，数组长度可变的。

#### Array示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Array对象</title>
    <script>
        /*Array对象
        1.创建:
        var arr = new Array(元素列表);
        var arr = new Array(默认长度);
        var arr = [元素列表];
        2.方法
        join();将数组中的元素按照指定的分隔符拼接为字符串
        push();向数组的末尾添加一个或者更多元素
        3.属性
        length:数组的长度
        4.特点:
            1.JS中，元素的类型是可变的
            2.JS中，数组长度是可变的
        */

        //创建方式1:
        var arr1 = new Array(1,2,3);
        var arr2 = new Array(5);
        var arr3 = [1,2,3,4];
        var arr4 = new Array();

        document.write(arr1+"<br>");
        document.write(arr2+"<br>");
        document.write(arr3+"<br>");
        document.write(arr4+"<br>");

        //打印数组
        var arr5 = [1,"abc",true];
        document.write(arr5+"<br>");
        document.write(arr5[0]+"<br>");//1
        document.write(arr5[1]+"<br>");//abc
        document.write(arr5[2]+"<br>");//true
        document.write(arr5[3]+"<br>");//undefined//JS中数组长度是可变的

        arr5[10] = "hehe";
        document.write(arr5[10]+"<br>");//hehe
        document.write(arr5[9]+"<br>");//undefined//JS中数组长度是可变的

        alert(arr5.length);//11

        //join();将数组中的元素按照指定的分隔符拼接为字符串
        document.write(arr5.join("--")+"<br>");
        //push();向数组的末尾添加一个或者更多元素
        arr5.push(11);
        document.write(arr5.join("--")+"<br>");
    </script>
</head>
<body>

</body>
</html>
```

### Date:日期对象

#### 创建

var date = new Date();

#### 方法

toLocaleString()：返回当前date对象对应的时间本地字符串格式
getTime():获取毫秒值。返回当前如期对象描述的时间到1970年1月1日零点的毫秒值差

#### Date示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Date对象</title>
    <script>
        /*
        Date：日期对象
        1.创建
            var date = new Date();
        2.方法
            toLocaleString();返回当前date对象对应的时间本地字符串格式
            getTime();获取毫秒值，返回当前如期对象描述的时间到1970年1月1日0点的毫秒偏差
        */
        var date = new Date();
        document.write(date+"<br>");//Sat Apr 02 2021 17:47:17 GMT+0800 (中国标准时间)
        document.write(date.toLocaleString()+"<br>");//2021/4/2 下午5:47:17
        document.write(date.getTime()+"<br>");
    </script>
</head>
<body>

</body>
</html>
```

### Math：数学对象

#### 创建：

 特点：Math对象不用创建，直接使用。 Math.方法名();

#### 方法：

- random():返回 0 ~ 1 之间的随机数。 含0不含1
- ceil(x)：对数进行上舍入。
- floor(x)：对数进行下舍入。
- round(x)：把数四舍五入为最接近的整数。

#### Math示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Math对象</title>
    <script>
        /*
            1. 创建：
                * 特点：Math对象不用创建，直接使用。  Math.方法名();

            2. 方法：
                random():返回 0 ~ 1 之间的随机数。 含0不含1
                ceil(x)：对数进行上舍入。
                floor(x)：对数进行下舍入。
                round(x)：把数四舍五入为最接近的整数。
         */
        document.write(Math.PI+"<br>");
        document.write(Math.random());//random():返回 0 ~ 1 之间的随机数。 含0不含1
        document.write(Math.round(4.6));//round(x)：把数四舍五入为最接近的整数。
        document.write(Math.ceil(4.2));//5//ceil(x)：对数进行上舍入。
        document.write(Math.floor(4.2));//4//floor(x)：对数进行下舍入。

        /*
                取 1~100之间的随机整数
         *      1. Math.random()产生随机数：范围 [0,1)小数
         *      2. 乘以 100 --> [0,99.9999] 小数
         *      3. 舍弃小数部分 ：floor --> [0,99] 整数
         *      4. +1 -->[0,99] 整数 [1,100]
         */
        var number = Math.floor((Math.random()*100))+1;
        document.write(number);
    </script>
</head>
<body>

</body>
</html>
```

### RegExp：正则表达式对象

#### 什么是正则表达式？

正则表达式：定义字符串的组成规则。
单个字符:[]
如： [a] [ab] [a-zA-Z0-9_]
\* 特殊符号代表特殊含义的单个字符:
\d:单个数字字符 [0-9]
\w:单个单词字符[a-zA-Z0-9_]

量词符号：
?：表示出现0次或1次
*：表示出现0次或多次
+：出现1次或多次
{m,n}:表示 m<= 数量 <= n
\* m如果缺省： {,n}:最多n次
\* n如果缺省：{m,} 最少m次

开始结束符号
\* ^:开始
\* $:结束

#### 正则对象创建：

- \1. var reg = new RegExp("正则表达式");
- \2. var reg = /正则表达式/;

#### 创建方法

test(参数):验证指定的字符串是否符合正则定义的规范

#### RegExp示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>正则表达式</title>
    <script>
        /*
        1. 正则表达式：定义字符串的组成规则。
				1. 单个字符:[]
					如： [a] [ab] [a-zA-Z0-9_]
					* 特殊符号代表特殊含义的单个字符:
						\d:单个数字字符 [0-9]
						\w:单个单词字符[a-zA-Z0-9_]
				2. 量词符号：
					?：表示出现0次或1次
					*：表示出现0次或多次
					+：出现1次或多次
					{m,n}:表示 m<= 数量 <= n
						* m如果缺省： {,n}:最多n次
						* n如果缺省：{m,} 最少m次
				3. 开始结束符号
					* ^:开始
					* $:结束
		2. 正则对象：
				1. 创建
					1. var reg = new RegExp("正则表达式");
					2. var reg = /正则表达式/;
				2. 方法
					1. test(参数):验证指定的字符串是否符合正则定义的规范
         */
        var rag = new RegExp("^\\w{6,12}$");
        var rag2 = /^\w{6,12}$/;//常用

        //验证
        var username = "zhangsan";

        var flag = rag2.test(username);//符合规则，则为true
        alert(flag);
    </script>
</head>
<body>

</body>
</html>
```

### Global：全局对象

#### 特点

全局对象，这个Global中封装的方法不需要对象就可以直接调用。 方法名();

#### 方法

- encodeURI():url编码
- decodeURI():url解码
- encodeURIComponent():url编码,编码的字符更多
- decodeURIComponent():url解码
- parseInt():将字符串转为数字
  - 逐一判断每一个字符是否是数字，直到不是数字为止，将前边数字部分转为number
- isNaN():判断一个值是否是NaN
  - NaN六亲不认，连自己都不认。NaN参与的==比较全部问false
- eval():将 JavaScript 字符串，并把它作为脚本代码来执行。

#### 什么是url编码？

> url编码是一种浏览器用来打包[表单](https://baike.baidu.com/item/表单/5380322)输入的格式。浏览器从表单中获取所有的name和其中的值 ，将它们以name/value参数编码（移去那些不能传送的[字符](https://baike.baidu.com/item/字符/4768913)，将数据排行等等）作为URL的一部分或者分离地发给[服务器](https://baike.baidu.com/item/服务器/100571)。
>
> url编码-来自百度百科

eg:微尘的小屋=***%E5%BE%AE%E5%B0%98%E7%9A%84%E5%B0%8F%E5%B1%8B***

#### Global对象示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Global对象</title>
    <script>
        /*
            1. 特点：全局对象，这个Global中封装的方法不需要对象就可以直接调用。  方法名();
			2. 方法：
			    encodeURI():url编码
			    decodeURI():url解码

			    encodeURIComponent():url编码,编码的字符更多
			    decodeURIComponent():url解码

			    parseInt():将字符串转为数字
			        * 逐一判断每一个字符是否是数字，直到不是数字为止，将前边数字部分转为number
			    isNaN():判断一个值是否是NaN
			        * NaN六亲不认，连自己都不认。NaN参与的==比较全部问false

			    eval():将 JavaScript 字符串，并把它作为脚本代码来执行。
         */
        var str = "微尘的小屋";
        //encodeURI():url编码
        var encode = encodeURI(str);
        document.write(encode+"<br>");//%E5%BE%AE%E5%B0%98%E7%9A%84%E5%B0%8F%E5%B1%8B
        //decodeURI():url解码
        var s =decodeURI(encode);
        document.write(s+"<br>");//微尘的小屋

        var str = "微尘的小屋";
        //encodeURIComponent():url编码,编码的字符更多
        var encode2 = encodeURIComponent(str);
        document.write(encode2+"<br>");//%E5%BE%AE%E5%B0%98%E7%9A%84%E5%B0%8F%E5%B1%8B
        //decodeURIComponent():url解码
        var s =decodeURIComponent(encode2);
        document.write(s+"<br>");//微尘的小屋

        //parseInt():将字符串转为数字
        var str = "123";
        var str2 = "123abc";
        var str3 = "abc123abc";
        var number = parseInt(str);
        var number2 = parseInt(str2);
        var number3 = parseInt(str3);
        alert(number+1);//124
        alert(number2+1);//124
        alert(number3+1);//NaN

        //isNaN():判断一个值是否是NaN
        var a = "abc";
        var b =NaN;
        document.write(a==NaN);//false
        document.write(b==NaN);//false,自己都不认
        //那怎样判断某个变量是NaN呢？
        document.write(isNaN(b));//true

        //eval():将 JavaScript 字符串，并把它作为脚本代码来执行。
        var jscode = "alert(123)";
        eval(jscode);//123
    </script>
</head>
<body>

</body>
</html>
```