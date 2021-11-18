## Java基础语法

### 注释

注释是对代码的解释和说明文字，以提高程序的可读性

#### 三种注释

单行注释：使用//，从//开始至本行结尾文字将作为注释文字

多行注释：多行注释使用将/* 和 */将一段长注释括起来

注意：多行注释不能嵌套 使用！

文件注释

文件注释以/** 开始，以  */ 结束

```java
//单行注释

/*
多行注释
*/
```

### 关键字

#### 概述

就是被java语言赋予了特定含义的单词

#### 特点

- 关键字的字母全部小写
- 在智能编译器中关键字都有颜色标记，非常直观

#### 示例

```java
public class Hello{
	public static void main(String args[]){
		System.out.println("Hello World");
	}
}
```

### 常量

#### 常量分类

| 常量类型   | 说明                 | 举例                    |
| ---------- | -------------------- | ----------------------- |
| 字符串变量 | 用双引号括起来的内容 | “hello world”，"abc"    |
| 整数变量   | 不带小数的数字       | 666，0，-66             |
| 小数变量   | 带小数的数字         | 13.14，-5.12            |
| 字符常量   | 用单引号括起来的内容 | ‘A’，‘0’                |
| 布尔常量   | 布尔值，表示真假     | 只有两个值：true，false |
| 空常量     | 一个特殊的值，空值   | 值为：null              |

注：除空常量外，其他常量均可使用输出语句直接输出

#### 示例

```java
public class changliang {
	public static void main(String[] args) {
		//字符串常量
		System.out.println("HelloWorld");
		System.out.println("This is Java");
		System.out.println("--------");
		
		
		//整数常量
		System.out.println(66);
		System.out.println(-88);
		System.out.println("--------");
		
		//小数常量
		System.out.println(13.14);
		System.out.println(-5.21);
		System.out.println("--------");
		
		//字符常量
		System.out.println('C');
		System.out.println('0');
		System.out.println('我');
		System.out.println("--------");
		
		//布尔常量
		System.out.println(true);
		System.out.println(false);
		System.out.println("--------");
		
		//空常量
		//空常量是不能直接输出的
		//System.out.println(null);
	}
}
```

### 数据类型

#### 计算机的存储单元

计算机存储数据的最小信息单位叫“位(bit)”，我们又称之为“比特位”，通常用小写的字母"b"表示，而计算机中最基本的存储单位叫”字节(byte)“，通常用大写字母”B“表示，字节是由连续的8个位组成。

除了字节还有一些常用的存储单位，其换算单位如下：

- 1B = 8bit
- 1KB = 1024B
- 1MB = 1024KB
- 1GB = 1024MB
- 1TB = 1024GB

#### Java中的数据类型

Java是一个强类型语言，Java中的数据必须明确数据类型。在Java中的数据类型包括基本数据类型和引用数据类型两种。

Java中的基本数据类型：

| 数据类型 | 关键字       | 内存占用 | 取值范围       |
| -------- | ------------ | -------- | -------------- |
| 整数类型 | byte         | 1        | -128~127       |
|          | short        | 2        | -32768~32767   |
|          | int(默认)    | 4        | -2^31^~2^31^-1 |
|          | long         | 8        | -2^63^~2^63^-1 |
| 浮点类型 | float        | 4        |                |
|          | double(默认) | 8        |                |
|          | char         |          |                |

说明：

e+38表示是乘以10的38次方，同样，e-45表示乘以10的负45次方。

在java中整数默认是int类型，浮点数默认是double类型。