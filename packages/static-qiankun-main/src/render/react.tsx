/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-05-24 17:14:20
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

import React from "react";
import { createRoot } from "react-dom/client";

/**
 * 渲染子应用，qiankun需要一个入口。此处渲染一个<div id="subapp-viewport" />，子应用会挂载到这个节点上
 */
function Render(props: any) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
    </>
  );
}

const container = document.getElementById("subapp-container");
const root = createRoot(container!);

export default function render({ loading }: any) {
  if (container) {
    console.log("render call", container);

    root.render(<Render loading={loading} />);
  } else {
    throw new Error("不存在 <div id='subapp-container'></div> 节点.");
  }
}
