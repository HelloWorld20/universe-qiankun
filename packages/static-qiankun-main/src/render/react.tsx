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

import Store from "../components/store";

import "./react.css";

/**
 * 渲染子应用，qiankun需要一个入口。此处渲染一个<div id="subapp-viewport" />，子应用会挂载到这个节点上
 */
function Render(props: any) {
  const { loading } = props;

  function push(subapp: string) {
    history.pushState(null, subapp, subapp);
  }

  return (
    <>
      <p className="parent-style">点击切换子应用👇</p>
      <ul className="side-menu">
        <li onClick={() => push("/child")}>child</li>
        <li onClick={() => push("/child2")}>child2</li>
      </ul>
      <Store />
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
    </>
  );
}

const container = document.getElementById("subapp-container");
const root = createRoot(container!);

export default function render({ loading }: any) {
  if (container) {
    root.render(<Render loading={loading} />);
  } else {
    throw new Error("不存在 <div id='subapp-container'></div> 节点.");
  }
}
