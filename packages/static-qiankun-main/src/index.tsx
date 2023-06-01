/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-05-24 16:48:22
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

import { start, registerMicroApps, setDefaultMountApp } from "qiankun";

import store from "./store";

import render from "./render/react";

render({ loading: true });

const loader = (loading: boolean) => render({ loading });

registerMicroApps([
  {
    name: "child",
    entry: "//localhost:3000",
    container: "#subapp-viewport",
    props: { store },
    loader, // loading 状态发生变化时会调用的方法。
    activeRule: "/child",
  },
  // TODO: 动态监测已启动的子应用才开启。
  // {
  //   name: "child2",
  //   entry: "//localhost:3010",
  //   container: "#subapp-viewport",
  //   props: { store },
  //   loader,
  //   activeRule: "/child2",
  // },
]);

setDefaultMountApp("/child");

start({
  sandbox: {
    // scoped css，开启此项，会看到子应用的样式前都会加上 div[data-qiankun="child"]前缀
    // 主应用样式会影响子应用，但是子应用不会影响主应用
    // experimentalStyleIsolation: true,
    // web-component 开启此项会看到子应用被shadow-root包裹。优先级比 experimentalStyleIsolation 高
    // 主应用子应用无法互相影响。
    strictStyleIsolation: true,
  },
});
