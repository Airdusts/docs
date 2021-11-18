(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{390:function(_,v,l){"use strict";l.r(v);var i=l(45),t=Object(i.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h1",{attrs:{id:"系统函数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#系统函数"}},[_._v("#")]),_._v(" 系统函数")]),_._v(" "),l("blockquote",[l("p",[_._v("目标：了解一些常用的系统函数，掌握API的查看与使用")])]),_._v(" "),l("ul",[l("li",[_._v("系统函数的效率比开发者自己用PHP封装的函数效率高")]),_._v(" "),l("li",[_._v("系统函数可以通过API文档进行查看使用")]),_._v(" "),l("li",[_._v("API伪类型运用")]),_._v(" "),l("li",[_._v("常用系统函数分类")])]),_._v(" "),l("h2",{attrs:{id:"_1、api文档查询"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1、api文档查询"}},[_._v("#")]),_._v(" 1、API文档查询")]),_._v(" "),l("p",[_._v("API文档查询根据信息掌握的强度可以分为大致三种")]),_._v(" "),l("ul",[l("li",[_._v("已知函数名，不确定参数和用法（效率最高）")]),_._v(" "),l("li",[_._v("大致知道函数名或者功能")]),_._v(" "),l("li",[_._v("知道函数类型（效率最低）")])]),_._v(" "),l("p",[_._v("1、已知函数名查找方式：使用索引栏")]),_._v(" "),l("ul",[l("li",[_._v("从函数名字开头开始输入")])]),_._v(" "),l("p",[l("img",{attrs:{src:"/img/php/PHP%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C3.png",alt:"PHP操作手册3.png"}})]),_._v(" "),l("p",[_._v("2、大致知道函数名的查询方式：使用搜索栏")]),_._v(" "),l("ul",[l("li",[_._v("输入函数名的部分名字")]),_._v(" "),l("li",[_._v("输入函数要解决的问题关键字")])]),_._v(" "),l("p",[l("img",{attrs:{src:"/img/php/PHP%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C4.png",alt:"PHP操作手册4.png"}})]),_._v(" "),l("p",[_._v("3、只知道函数类型：在目录下的函数参考里找（效率非常低）")]),_._v(" "),l("ul",[l("li",[_._v("在API函数参考中主动寻找")])]),_._v(" "),l("p",[l("img",{attrs:{src:"/img/php/PHP%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C2.png",alt:"PHP操作手册2.png"}})]),_._v(" "),l("blockquote",[l("p",[_._v("小结")])]),_._v(" "),l("p",[_._v("1、API文档是开发过程中帮助提升开发效率的神器")]),_._v(" "),l("p",[_._v("2、API中提供了众多常见问题的解决方案")]),_._v(" "),l("p",[_._v("3、要熟练利用API文档")]),_._v(" "),l("ul",[l("li",[_._v("精确查找（知道函数名）")]),_._v(" "),l("li",[_._v("模糊匹配（知道部分名字或者功能关键字）")]),_._v(" "),l("li",[_._v("分类匹配（知道类别）")])]),_._v(" "),l("p",[_._v("4、实际开发中，常用的解决方案还可以通过互联网实现解决")]),_._v(" "),l("h2",{attrs:{id:"_2、伪类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2、伪类型"}},[_._v("#")]),_._v(" 2、伪类型")]),_._v(" "),l("blockquote",[l("p",[_._v("概念")])]),_._v(" "),l("p",[l("strong",[_._v("伪类型")]),_._v("：指未必一定存在的类型，或者是一种包括多种真实类型的虚假类型")]),_._v(" "),l("ul",[l("li",[_._v("API文档中用到很多类型")]),_._v(" "),l("li",[_._v("API文档对于函数的参数、返回值都有类型支持")]),_._v(" "),l("li",[_._v("API中常见的几种伪类型如下\n"),l("ul",[l("li",[_._v("number：数值，包括浮点和整型")]),_._v(" "),l("li",[_._v("scalar：标量，包括PHP四种基本类型")]),_._v(" "),l("li",[_._v("mixed：混合的，没有明确的类型限定")]),_._v(" "),l("li",[_._v("callable：可调用的，说明是个函数名")])])])]),_._v(" "),l("h2",{attrs:{id:"_3、常用系统函数列表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3、常用系统函数列表"}},[_._v("#")]),_._v(" 3、常用系统函数列表")]),_._v(" "),l("p",[_._v("1、常见输出类：帮助程序员进行数据输出或者调试数据")]),_._v(" "),l("ul",[l("li",[_._v("echo：一种语法结构，不是函数，不需要使用括号")]),_._v(" "),l("li",[_._v("print_r：输出变量的结构，方便查看")]),_._v(" "),l("li",[_._v("var_dump：也是一种语法结构，详细打印变量的结构和数据")]),_._v(" "),l("li",[_._v("exit/die：输出消息并终止脚本执行")])]),_._v(" "),l("p",[_._v("2、时间日期类：帮助程序员进行时间操作管理")]),_._v(" "),l("ul",[l("li",[_._v("time：获取当前时间的时间戳（从格林威治时间1970年1月1日0点0分0秒开始）")]),_._v(" "),l("li",[_._v("date：按照指定格式输出时间，可以是当前时间也可以是指定时间戳")]),_._v(" "),l("li",[_._v("strtotime：将任何英文文本日期时间描述转换成时间戳")]),_._v(" "),l("li",[_._v("microtime：获取时间戳和微秒数（精度高）")])]),_._v(" "),l("p",[_._v("3、数学类：帮助程序员进行数学操作")]),_._v(" "),l("ul",[l("li",[_._v("max：获取多个数中最大的（可以是数组）")]),_._v(" "),l("li",[_._v("min：获取多个数中最小的（可以是数组）")]),_._v(" "),l("li",[_._v("floor：舍去法取整（向下取整），获取不大于当前数值的最大整数")]),_._v(" "),l("li",[_._v("ceil：进一取整（向上取整），获取不小于指定数值的最小整数")]),_._v(" "),l("li",[_._v("mt_rand：获取指定区间或者0到最大数之间的一个随机整数")]),_._v(" "),l("li",[_._v("round：根据指定的小数位进行四舍五入")])]),_._v(" "),l("p",[_._v("4、字符串类：帮助程序员对字符串进行基本操作")]),_._v(" "),l("ul",[l("li",[_._v("addslashes：对ASCII中的特殊字符进行转义，通常对用户输入的内容进行特殊处理（防止SQL注入）")]),_._v(" "),l("li",[_._v("htmlsmpecialchars：将HTML特殊符号转换成实体（<    ====>  &\\lt;）")]),_._v(" "),l("li",[_._v("htmlspecialchars_decode：将实体符号转换成普通字符")]),_._v(" "),l("li",[_._v("chr：将ASCII对应的数值转换成对应的符号")]),_._v(" "),l("li",[_._v("ord：将ASCII字符转换成对应的数值")]),_._v(" "),l("li",[_._v("explode：将字符串按照指定的符号分隔，得到一个数组")]),_._v(" "),l("li",[_._v("implode：将一个数组按照指定的符号连接成一个字符串")]),_._v(" "),l("li",[_._v("md5：使用md5算法对数据进行加密")]),_._v(" "),l("li",[_._v("str_repeat：将字符串重复指定次数")]),_._v(" "),l("li",[_._v("str_replace：字符串替换")]),_._v(" "),l("li",[_._v("str_shuffle：随机打乱一个字符串")]),_._v(" "),l("li",[_._v("str_split：按照指定长度将数组分割，返回数组")]),_._v(" "),l("li",[_._v("strip_tags：去除HTML和PHP标记")]),_._v(" "),l("li",[_._v("strlen：获取字符串的长度（字节长度）（mb_strlen字符长度）")]),_._v(" "),l("li",[_._v("stripos/strpos：查找字符串中首次出现目标字符串的位置")]),_._v(" "),l("li",[_._v("substr：从字符串中截取指定位置和长度的子字符串")]),_._v(" "),l("li",[_._v("trim：去除字符串两边的空格（默认是空格，也可以是其他字符）")]),_._v(" "),l("li",[_._v("ucfirst：将字符串首字母大写")]),_._v(" "),l("li",[_._v("strtolower：将所有字母小写")]),_._v(" "),l("li",[_._v("strtoupper：将所有字母大写")]),_._v(" "),l("li",[_._v("strstr：获取字符串中某个字符首次出现到最后的字符串")])]),_._v(" "),l("p",[_._v("5、数组函数：帮助程序员对数据进行操作")]),_._v(" "),l("ul",[l("li",[_._v("array_key_exists：判断下标是否在数组中存在")]),_._v(" "),l("li",[_._v("array_keys：获取数组全部下标，或某个确定值的下标")]),_._v(" "),l("li",[_._v("array_merge：合并数组元素（相同字符串下标元素是覆盖）")]),_._v(" "),l("li",[_._v("array_pop：从数组最后弹出一个元素（原数组元素减少）")]),_._v(" "),l("li",[_._v("array_push：从数组最后加入一个元素（原数组元素增加）")]),_._v(" "),l("li",[_._v("array_unshift：从数组最前面加入一个元素（原数组元素增加）")]),_._v(" "),l("li",[_._v("array_shift：从数组最前面弹出一个元素（原数组元素减少）")]),_._v(" "),l("li",[_._v("shuffle：将原始数组打乱")]),_._v(" "),l("li",[_._v("in_array：判断元素是否在数组中存在")]),_._v(" "),l("li",[_._v("range：生成一个规则数值数组")]),_._v(" "),l("li",[_._v("current：获取当前数组指针所在位置的值")]),_._v(" "),l("li",[_._v("next：将数组元素指针向后移动一位，并获取新元素的值")]),_._v(" "),l("li",[_._v("prev：与next相反，向前移动")]),_._v(" "),l("li",[_._v("end：指针移动到最后一个元素，并获取元素值")]),_._v(" "),l("li",[_._v("reset：重置数组指针（回到第一个元素）")]),_._v(" "),l("li",[_._v("list：语法结构，从数组中获取数据，并且将数据赋值给变量（list从数组取元素的时候是从数组0开始取，按顺序增加）")])]),_._v(" "),l("blockquote",[l("p",[_._v("小结")]),_._v(" "),l("p",[_._v("1、系统函数很多：不需要死记硬背，了解功能，掌握API查找使用")]),_._v(" "),l("p",[_._v("2、常见的系统函数其实就那么多，如果不常见的建议使用API查找（百度）")])])])}),[],!1,null,null,null);v.default=t.exports}}]);