# 认识PHP



> 目标：初步了解PHP是什么，能够干什么

> 概念

**PHP**：PHP Hypertext Preprocessor，PHP超文本预处理器。

* 是一种运行在**服务器端**的可以嵌入到HTML的**脚本/编程语言**
  * 服务器端：PHP不能被浏览器解析，必须在服务器端通过PHP引擎解析成相应的HTML
  * 脚本/编程语言：是一种编程语言，但是不需要事先编译，是运行时即时编译
* 该语言让 Web 开发人员快速的书写动态生成的网页。

> 举个栗子

![PHP脚本解析](/img/php/PHP脚本解析.gif)

> 小结

1、PHP是一种可以嵌入到HTML中的脚本/编程语言

2、PHP运行在服务器端

3、PHP在用户访问时会将PHP代码解析成HTML，然后给浏览器解析

# 搭建Web服务器

## 1、搭建静态Web服务器



> 目标：掌握独立Apache服务器的搭建



> 概念

**静态Web服务器**：一种对外提供静态资源（HTML）访问的Web服务器，在Windows下我们常用Apache作为Web服务器。



> 步骤：搭建本地Web服务器

1、 获取Apache安装文件：建议去[apache官网](http://httpd.apache.org/download.cgi "")，但是下载步骤还比较麻烦（大家也可以百度一下如何下载），直接给大家一个下载链接：[Apache2.4下载](http://www.apachelounge.com/download/ "")注意选择系统对应位数（64位和32位）

2、解压文件

3、将Apache24文件夹复制到安装目录：案例地址D:/server/ 

![Apache安装1.png](/img/php/Apache安装1.png "")

4、查看文件目录

![Apache安装2.png](/img/php/Apache安装2.png "")

5、修改配置文件：配置网站默认站点

* ServerRoot：服务器所在目录：D:/server/Apache24

![Apache安装3.png](/img/php/Apache安装3.png "")

* DocumentRoot：网站根目录：D:/server/Web（为了方便新建一个Web文件夹，学习通常可以放到默认网站根目录：Apache/htdocs）
* Directory：目录权限控制，指定与网站默认根目录一致：D:/server/Web

![Apache安装4.png](/img/php/Apache安装4.png "")

6、打开windows控制台：Windows菜单->windows系统->命令提示符（当前我的系统的win10，不同系统可能路径不同），然后使用**管理员身份**（邮件->管理员身份运行）打开 

![Apache安装5.png](/img/php/Apache安装5.png "")

![Apache安装7.png](/img/php/Apache安装7.png "")

7、切换磁盘路径为Apache所在磁盘D盘：直接输入盘符：D:（带冒号），然后回车

![Apache安装8.png](/img/php/Apache安装8.png "")

8、使用CD命令（Change Directory）进入到Apache的bin目录下：cd server/Apache24/bin，然后回车 

![Apache安装9.png](/img/php/Apache安装9.png "")

9、绿色安装Apache，并将Apache安装成Windows系统服务，输入：httpd.exe -k install

![Apache安装10.png](/img/php/Apache安装10.png "")

10、第一次安装后不会自动启动，需要手动启动，输入：httpd.exe -k start（也可以启用ApacheMonitor（Apache/bin/ApacheMonitor.exe）

![Apache安装11.png](/img/php/Apache安装11.png "")

11、验证安装：在浏览器输入localhost（默认主机名），进行本地访问测试

12、修改配置文件，除去错误信息。找到ServerName，增加一个ServerName 为localhost

![Apache安装13.png](/img/php/Apache安装13.png "")



**注意**：任何关于配置文件的修改，都需要重启Apache服务才能生效

13、配置文件错误检查：httpd.exe -t

![Apache安装14.png](/img/php/Apache安装14.png "")



> 步骤：搭建公网Web服务器

1、购买或者租用（通常已经安装好）一台服务器安装上Apache，如阿里云

2、购买一个域名，将Apache的配置文件中的ServerName由localhost改成对应的域名

3、在购买域名的服务商那里绑定所购买的域名指向的你服务器对应的IP地址

4、将网站页面放到对应的Web文件夹（DocumentRoot所指向的文件路径）



> 小结

1、静态Web服务器的搭建只需要安装一个Apache即可

* ServerRoot：Apache安装根目录
* DocumentRoot：网站根目录
* Directory：权限配置
* ServerName：域名（主机名）

2、之所以叫静态Web服务器，是因为Apache只能将指定路径下的文件读取返回给来访者，但是Apache不会对内容进行任何加工

## 2、安装PHP

> 目标：了解PHP的独立安装，并能够使用php.exe实现PHP脚本的解析

> 概念

PHP是一种脚本/编程语言，需要特定的解释器来进行解释，这个解释器就是**PHP引擎**。而PHP引擎不是系统自带或者Apache自带，因此需要安装PHP。



> 步骤

1、获取PHP：建议去[php官网](http://www.php.net)，获取最新版本7.2.4，或者直接进入[PHP7.2.4下载](https://windows.php.net/download#php-7.2)界面下载（注意下载适合计算机的位数的版本zip文件，当前电脑为64位操作系统，另外下载的软件应该是Thread Safety）

2、为了方便管理，我们可以将PHP与Apache服务器安装到同一个目录：解压缩压缩文件到D:/server目录下

![安装PHP1.png](/img/php/安装PHP1.png "")

3、为了方便管理，将文件夹名字改成PHP7（至此PHP已经安装完毕）

![安装PHP2.png](/img/php/安装PHP2.png "")

4、掌握PHP常用内容

- PHP扩展：ext（extension）文件夹，存放了PHP所支持的各类扩展
  ![安装PHP3.png](/img/php/安装PHP3.png "")
- PHP执行文件：php.exe，PHP代码解释器，能够将PHP代码解析成HTML文件
- PHP配置文件：php.ini，默认的PHP提供了两套配置文件php.ini-development（开发环境）和php.ini-production（生产环境）
  ![安装PHP4.png](/img/php/安装PHP4.png "")

5、将php.ini-development修改成php.ini格式（建议复制一份php.ini-development然后修改成php.ini）

![安装PHP5.png](/img/php/安装PHP5.png "")

6、测试php.exe的功能

- 在D:/server/Web文件夹下创建一个index.php文件（需要通过文件系统修改显示文件后缀名，Windows系统默认隐藏后缀名）
  ![安装PHP6.png](/img/php/安装PHP6.png "")
- 使用编辑器打开文件，然后输入对应的代码（不建议使用Windows自带的TXT编辑器，建议使用代码编辑器：editplus/phpstorm/subline）
  ![安装PHP7.png](/img/php/安装PHP7.png "")
- 在控制台（CMD）下进入到php.exe所在目录
  ![安装PHP8.png](/img/php/安装PHP8.png "")
- 使用命令测试php.exe对代码的执行：php.exe -f D:/server/Web/index.php
  ![安装PHP9.png](/img/php/安装PHP9.png "")



> 小结

1、PHP是一种脚本/编程语言，需要专门的解释器PHP引擎（php.exe）来进行解析

2、PHP不能自动获取请求解析PHP代码，需要通过指令执行



## 3、搭建动态Web服务器

> 目标：掌握PHP与Apache的合作机制，并实现PHP与Apache共建动态Web服务器



> 概念

**动态Web服务器**：指利用静态Web服务器Apache配合动态脚本编程语言PHP，实现动态网站。

Apache是一种静态Web服务器，不能解析内容，但是可以接收用户请求；PHP可以生成动态内容，但是无法直接被用户（浏览器）访问，因此需要将二者结合共同完成动态网站的建设。



> 原理

1、Apache是一种模块化的软件，只需要将某个模块挂靠在Apache上，Apache就能运用该模块实现某些功能

![07Apache的模块化构成](/img/php/07Apache的模块化构成.jpg)

2、PHP对外提供了一个模块，允许其他软件应用该模块

![08PHP模块功能](/img/php/08PHP模块功能.jpg)

3、Apache加载PHP，进行相关授权配置，从而让Apache在某些情况下运用PHP模块来进行工作



> 步骤：Apache加载PHP

1、打开Apache的配置文件：D:/server/Apache24/conf/httpd.conf

![10Apache主配置文件](/img/php/10Apache主配置文件.jpg)

2、使用LoadModule命令加载PHP模块：LoadModule    php7_module     php模块所在路径

![11Apache加载PHP模块](/img/php/11Apache加载PHP模块.jpg)

3、模块加载了不会自动工作，需要Apache指派工作给PHP：当Apache发现请求是PHP的时候，可以交给PHP来处理：AddType    application/x-httpd-php     .php    .html（后缀区分，多种后缀可以使用空格来区分）

![12Apache分配任务给PHP](/img/php/12Apache分配任务给PHP.jpg)

4、此时的PHP隶属于Apache，但是因为PHP是独立模块，如果想要让Apache能够更多控制和使用PHP，就需要将PHP的配置文件告知Apache，从而让PHP和Apache成为一个整体：PHPIniDir php.ini所在路径

![13Apache加载PHP配置文件](/img/php/13Apache加载PHP配置文件.jpg)

5、Apache的任何配置修改，都需要重启Apache才能生效；PHP的配置文件现在已经隶属于Apache的一部分，因此PHP的配置修改，也需要重启Apache才能生效



> 小结

1、Apache是一种静态服务器，能够接收浏览器的请求，但是只能读取文件，不能解析文件

2、PHP解释器是一个能够解释PHP代码的工具，但是不能接收浏览器请求

3、Apache可以将PHP添加到自己的模块列表中，从而Apache就可以“指使”PHP来进行某些处理

4、动态web服务器就是能够利用动态脚本语言实现动态数据提供的Web服务器

## 4、安装MySQL数据库

>目标：掌握MySQL数据库的安装，并能够使用MySQL提供的客户端进行服务器的访问



> 概念

MySQL是一种开源、免费的**关系型数据库**，能够为各类编程语言提供**持久性的数据支持**。PHP是一种编程语言，虽然可以动态化的处理数据，但是需要第三方数据库进行数据支持。



> 步骤

1、获取Mysql安装软件：建议去[Mysql官网](https://www.mysql.com/)，获取最新版本[mysql8.0.11](https://dev.mysql.com/downloads/file/?id=476233)（同样注意计算机位数）   

![13MySQL安装官网](/img/php/13MySQL安装官网.jpg)



**注意**：下载时可以不用登陆注册

![14MySQL安装官网下载](/img/php/14MySQL安装官网下载.jpg)

2、解压缩文件，同时把解压后的文件夹放到Server目录，即D:/server/下

![15MySQL安装解压](/img/php/15MySQL安装解压.jpg)

3、MySQL很多应用都是基于Windows的CMD控制台使用，为了方便以后能够快速找到MySQL提供的应用，可以为MySQL的bin目录添加系统环境变量（Windows10下：右键 '我的电脑' --> '属性'

![16MySQL配置系统环境变量.jpg](/img/php/16MySQL配置系统环境变量.jpg)

![17MySQL配置系统环境变量.jpg](/img/php/17MySQL配置系统环境变量.jpg)

4、MySQL目前的安装模式是绿色安装，在进行安装前需要给MySQL制作一个配置文件，放到MySQL的解压目录里

![18MySQL配置系统环境变量.jpg](/img/php/18MySQL配置文件.jpg)

```mysql
[mysqld] #mysqld代表服务器端
# 设置3306端口
port=3306
# 设置mysql的安装目录
basedir=D:\\server\\mysql-8.0.11-winx64   
# 切记此处一定要用双斜杠\\，单斜杠我这里会出错，不过看别人的教程，有的是单斜杠。自己尝试吧
# 设置mysql数据库的数据的存放目录
datadir=D:\\server\\mysql-8.0.11-winx64\\Data   
# 此处同上
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
# 服务端使用的字符集默认为UTF8
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
default_authentication_plugin=mysql_native_password
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[client] #client代表客户端设置
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8
```

5、以管理员身份运行`命令提示符`（CMD控制台），然后进入到MySQL的bin目录

![19MySQL运行CMD.jpg](/img/php/19MySQL运行CMD.jpg)

![20MySQL运行CMD.jpg](/img/php/20MySQL运行CMD.jpg)

6、初始化数据库，输入指令：**mysqld --initialize --console**

![21MySQL初始化.jpg](/img/php/21MySQL初始化.jpg)

**注意**：用户信息的组成是由用户名和访问主机组成（默认root用户名，本机localhost访问）；初始化之后会生成一个密码，在关闭之前需要记住该密码才能登陆；hkba6tiE2?KS

7、安装服务：将MySQL的启动安装成Windows的服务，后续可以通过服务启动MySQL

**mysqld --install [服务名]**：安装服务（服务名字可以自取，为了方便识别通常是MySQL）

**net start [服务名]**：启动服务

![22MySQL服务安装与启动.jpg](/img/php/22MySQL服务安装与启动.jpg)

8、使用MySQL客户端验证登录：mysql.exe -uroot -p生成的密码

MySQL是一种C/S结构的软件，服务器mysqld.exe用于管理数据（通常不会在自己本机，学习过程中都在本机），客户端mysql.exe用于连接服务端并进行操作。客户端连接服务端一共有四组指令：

**-h**：host主机，服务器所在的主机地址，可以是IP地址或者主机名，如-h127.0.0.1/-hlocalhost，如果是服务器在本机，那么可以省略该指令

**-P**：port端口（大写P），一般MySQL的访问端口是3306（配置文件中可以配置），默认3306端口可以省略该指令

**-u**：username用户名，服务器对外提供的访问者信息，超级管理员是root用户名（如果有匿名用户，也可以省略，但是安全起见，一般不建议使用匿名用户）

**-p**：password密码（小写p），服务器对外提供的访问者信息，与用户名相对应（如果本身用户没有密码，也可以省略，但是不建议使用）

![23MySQL客户端登录.jpg](/img/php/23MySQL客户端登录.jpg)

**注意**：上述访问因为MySQL服务器安装在本地，使用默认3306端口，所以省略了-h和-P指令

9、为了方便自己使用，修改root用户的登录密码

**ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';**

![24MySQL修改密码.jpg](/img/php/24MySQL修改密码.jpg)



> 小结

1、MySQL8是目前最新版本，效率是MySQL5.7的两倍

2、MySQL的安装采用绿色安装，即开发者自行配置

* 主动增加一个配置文件my.ini
* 进行相关配置（确定路径问题即可）

3、MySQL8的安装会自动生成超级用户root的密码，需要安装时记住原始密码，然后为了方便可以修改密码

4、MySQL是一种C/S结构软件，访问的话需要使用mysql.exe客户端进行访问（一般省略.exe，直接使用mysql），访问时有四个指令-h、-P、-u、-p

5、MySQL是专门用来进行数据管理的，PHP能够通过程序来进行MySQL操作，因此不需要额外对PHP或者Apache进行配置，只需要在PHP编程的时候使用代码来操作即可



## 5、配置虚拟主机

> 目标：了解虚拟主机的概念和作用，并能够在服务器上配置基于域名的虚拟主机



> 概念

**虚拟主机**：Virtual Hosting，或称 **共享主机**（shared web hosting），又称**虚拟服务器**，是一种在单一主机或主机群上，实现多网域服务的方法，可以运行多个网站或服务的技术。

* 虚拟主机技术在公司只有一台实际主机的情况下，可以同时对外提供多个网站服务，让用户使用不同的域名访问到不同的网站，从而**节省硬件成本**，更好的利用服务器资源。



> 举个栗子

一人分饰多角色

![25一人饰多角.gif](/img/php/25一人饰多角.gif)



> 详解

虚拟主机就是类似上图的一人饰多角一样，一个人就是一台实际主机，一个虚拟主机就是一个角色，每一个角色就是一个网站。



Web虚拟主机分为两种：基于IP的虚拟主机和基于域名的虚拟主机

* 基于IP的虚拟主机：一台电脑上有多个网卡，一个网卡对应一个IP地址，多个IP地址就可以有多个网站【较少使用】

![26基于IP的虚拟主机.gif](/img/php/26基于IP的虚拟主机.gif)

* 基于域名的虚拟主机：一台电脑上只需要一个IP，每个网站有不同的`域名`（就是每个文件夹给定一个路径，然后给每个文件夹一个域名）【较多使用】

![27基于域名的虚拟主机.gif](/img/php/27基于域名的虚拟主机.gif)



> 步骤

1、Apache默认关闭虚拟主机，需要在Apache的主配置文件httpd.conf中主动打开

![28开启虚拟主机.jpg](/img/php/28开启虚拟主机.jpg)

2、配置虚拟主机：在Apache的conf\extra\httpd-vhosts.conf

* 打开并清空虚拟主机信息

![29虚拟主机配置1.jpg](/img/php/29虚拟主机配置1.jpg)

* 配置虚拟主机
  * 增加虚拟主机主标记：VirtualHost标记，\*:80中`*`表示本机IP，`80`表示监听的端口（如果主配置端口有变，此处要跟着变化）
  * 配置主机信息：DocumentRoot文档位置、ServerName主机名
  * 配置目录权限：Directory指定目录，Require设置权限、DirectoryIndex设置默认首页

![30虚拟主机配置2.jpg](/img/php/30虚拟主机配置2.jpg)

**注意**：一旦开启虚拟主机，Apache默认的localhost访问就会失效，所以如果要进行虚拟主机配置且不是指向原来的文档位置htdocs，那么需要重新配置一个localhost指向htdocs文件夹

* 重启Apache，让配置生效（所有配置修改都需要重启Apache）

3、虚拟主机的配置只是服务器的更新，要想让客户（浏览器）能够访问到，就必须配置DNS。开发时可以利用本地DNS（hosts文件）来实现域名解析

![31本地DNS解析.jpg](/img/php/31本地DNS解析.jpg)



> 小结

1、虚拟主机是在一台真实主机上配置多个网站对外提供多种服务，从而节省主机成本

2、虚拟主机分为两种：基于IP的虚拟主机和基于域名的虚拟主机

3、基于域名的虚拟主机配置逻辑

* 主配置文件开启虚拟主机
* 虚拟主机配置文件配置虚拟主机
  * 主机名：ServerName
  * 文档位置：DocumentRoot
  * 目录权限：Directory
* 重启Apache使得配置生效
* 修改DNS实现外部访问
  * 本地访问：修改hosts文件
  * 外部访问：修改DNS

4、如果在有多个虚拟主机的情况下，是基于IP来进行访问的：那么系统会自动匹配第一个虚拟主机的位置