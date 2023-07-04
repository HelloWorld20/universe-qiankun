# superapp

基于pnpm workspace的monorepo: superapp，所有项目的综合项目。
此项目是superapp的qiankun版本。


## 运行

pnpm start

询问试启动项目

### qiankun demo

运行`static-qiankun-maini`,`static-qiankun-child`,`static-qiankun-child2`。

访问[http://localhost:3000/child](http://localhost:3000/child)，可访问主应用。可以体验样式隔离、store共享demo
访问[http://localhost:3001/child](http://localhost:3001/child)与[http://localhost:3002/child2](http://localhost:3002/child2)也可以独立访问两个子应用


## 常用命令

1. 安装全局公用包

  pnpm add react react-dom -w

2. 安装到某个package

  pnpm add dayjs -r --filter @ww/utils-web

  pnpm add @ww/utils-web -r --filter @ww/static-apart-radar

后面跟的是包名称，也就是package.json的name参数

**-r是recursive的意思，递归的意思**



