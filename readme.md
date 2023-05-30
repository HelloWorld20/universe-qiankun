# superapp

基于pnpm workspace的monorepo: superapp，所有项目的综合项目。
此项目是superapp的qiankun版本。


## 运行

pnpm start

询问试启动项目

## 常用命令

1. 安装全局公用包

  pnpm add react react-dom -w

2. 安装到某个package

  pnpm add dayjs -r --filter @ww/utils-web

  pnpm add @ww/utils-web -r --filter @ww/static-apart-radar

后面跟的是包名称，也就是package.json的name参数

**-r是recursive的意思，递归的意思**

## todo

1. 目前static-\*\*类型package用tools-build-react时，需要在static-\*\*安装tools-build-react的依赖（打包依赖）。不知如何处理。如果在全局安装打包依赖，则破坏独立结构，或者需要cli来管理。
2. 需要一个cli工具，根据类型创建模板
3. 实现一个trigger-condition-task的scheduler，用于爬虫

## issue

### 关于pnpm install 出现 unmet peer

[官方回答](https://github.com/pnpm/pnpm/issues/4183#issuecomment-1008252214)

解决方案按照意思应该是要根据提示安装一遍

* `unmet peer` shows up but project works. The declared peerDependency is installed but installed version doesn't match declared version, but luckily the installed version doesn't have break changes which would break the package declared peerDependency.
* `missing peer` shows up but project works.
  * your project is just using part of your dependency which doesn't require its peerDependency.
  * your environment have these peerDependency installed globally because node will look up dependency all the way to root (but pnpm don't know about it).

### 关于安装完依赖还是找不到包的问题

如果用的WSL+linux安装的依赖，用windows文件系统打开的vscode无法找到依赖。需要vscode链接remote wsl用linux文件系统访问才行

windows shell安装的依赖则两种文件系统都能正常使用

**具体原因后面查**

### window shell 无法找到另一个package


