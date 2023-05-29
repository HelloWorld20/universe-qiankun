/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-05-24 16:48:22
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

import {
  start,
  registerMicroApps,
  setDefaultMountApp,
} from "qiankun";

import render from "./render/react";

render({ loading: true });

const loader = (loading: boolean) => render({ loading });

registerMicroApps([
  {
    name: "react16",
    entry: "//localhost:7100",
    container: "#subapp-viewport",
    loader,
    activeRule: "/react16",
  },
]);

setDefaultMountApp("/react16");

start();
