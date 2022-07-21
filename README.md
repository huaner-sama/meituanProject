## 项目安装文件

#### 1. vsCode

下载地址：https://code.visualstudio.com/Download

#### 2. node

* 下载地址：https://nodejs.org/zh-cn/download

#### 3. 安装项目中的依赖包

* 前端：打开终端，输入npm install 或者 npm i
* 后端:  打开终端，输入npm install 或者 npm i
* ps:注意node版本和node-sass版本问题，本项目为node-v14.16.0-x64，node-sass^4.14.1

#### 4. 安装mongodb，启动数据库

* 下载地址：https://www.mongodb.com/try/download/community 
* 下载mongodb4.2（因为后面的版本把导入数据功能干掉了），选择custom，不选择compass，点击安装
* 安装的时候可以不勾选图形界面缩短安装时间
* 添加mongodb的bin文件路径到环境变量
* 打开bin中mongo.exe,显示MongoDB shell version v4.2.12
* 在c盘根目录下创建data文件夹，在内部创建db文件夹
* 打开cmd窗口，输入mongod，显示waiting for connections on port 27017  代表服务启动成功，不要关闭cmd窗口，关闭窗口相当于关闭服务
* 将数据还原到mongodb服务器中：打开一个新窗口，输入mongorestore --db meituan --dir 项目目录中db文件的地址
* 在上一步的cmd窗口中输入mongo，接着输入show dbs查看数据库，use数据库名称，切换到该数据库下，show collections 显示数据库中的数据表

#### 5. 获取腾讯位置服务密钥，配置

* 创建密钥的地址：https://lbs.qq.com/dev/console/application/mine

* ip定位接口：https://lbs.qq.com/service/webService/webServiceGuide/webServiceIp

* 配置参数

  <img src="https://img2022.cnblogs.com/blog/2863962/202207/2863962-20220721195736872-1152173388.png" alt="image-20220721195733995" style="zoom:33%;" />

* 到meituan-backend  =>   config.js中，修改腾讯位置服务secreKey

  <img src="https://img2022.cnblogs.com/blog/2863962/202207/2863962-20220721195815690-1992118219.png" alt="image-20220721195813531" style="zoom:50%;" />

  

#### 6. 七牛云图片上传

1. 七牛云地址：https://portal.qiniu.com/create

2. 点击“对象存储”的“立即添加”

3. 创建空间

   * 密钥：

     * 点击右上角头像 => 点击“密钥管理” 
     * 将密钥复制粘贴到 meituan-backend => config.js中

   * 仓库名称：

     * 就是创建的名称
     * 将该名称复制粘贴到 meituan-backend => config.js中的Bucket

   * 仓库地址：

     * 需要给仓库添加域名，点击“域名”，点击“绑定域名”，点击“输入框”，将提示内容填入，该提示内容是测试域名，将在30日之后失效
     * 将该域名复制粘贴到 vue-meituan中 的domain中

     

     <img src="https://img2022.cnblogs.com/blog/2863962/202207/2863962-20220721195953471-318088444.png" alt="image-20220721195951279" style="zoom:50%;" />

#### 7. 支付配置

* 到meituan-bankend的config.js中，将notifyUrl改成当前电脑的ipconfig中的ip地址
* 扫码的手机要和电脑在同一个局域网下

#### 8. 启动项目服务

1. 确保mongodb服务是启动的
2. 后端：按照配置文件的启动服务命令启动 => npm run dev
3. 前端：按照配置文件的启动服务命令启动 => npm run serve

#### 9. 访问项目

* 默认：自动打开浏览器
* 访问：http://127.0.0.1:8080   
* 不能使用 localhost，因为vue-cookie,不能在localhost这种方式下进行跨域携带cookie