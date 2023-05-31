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
    loader,
    activeRule: "/child",
  },
  {
    name: "child2",
    entry: "//localhost:3010",
    container: "#subapp-viewport",
    props: { store },
    loader,
    activeRule: "/child2",
  },
]);

setDefaultMountApp("/child");

start();
