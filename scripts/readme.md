# 询问试启动项目

## 使用

1. 在要支持的package中的跟目录添加`scripts`目录，添加`start.js`文件
2. start.js要返回两个方法`getAnswer`和`getShellStr`，getAnswer返回`inquirer`的实例对象。定义询问。`getShellStr`根据getAnswer的返回内容生成可执行shell字符串。
3. 在项目根目录/scripts/scripts.js文件里添加参照现有格式添加入口即可

## todo

* 添加concurrent库，支持同时运行多个项目