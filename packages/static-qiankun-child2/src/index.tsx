/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2022-08-09 16:32:01
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

import React from "react";
// import { unmountComponentAtNode } from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import GlobalStore from "./store/global/global-store";
import localStore from "./store/store";
import GlobalStoreContext from "./store/global/context";
// import ReactDOM from "react-dom";
import Route from "./route";

let root: any = undefined;

function getRoot(container: any) {
  if (root) {
    return root;
  }
  root = container
    ? createRoot(container.querySelector("#app"))
    : createRoot(document.querySelector("#app")!);
  return root;
}

// //将渲染过程封装，以便使用
function render(props: any) {
  const { container } = props;
  const { store } = props;

  if (store) {
    const globalStore = new GlobalStore(store);
    getRoot(container).render(
      <Provider store={localStore}>
        <GlobalStoreContext.Provider value={globalStore}>
          <Route />
        </GlobalStoreContext.Provider>
      </Provider>
    );
  } else {
    getRoot(container).render(
      <Provider store={localStore}>
        <Route />
      </Provider>
    );
  }
}

export async function bootstrap() {
  console.log("bootstrap");
}

export async function mount(props: any) {
  render(props);
}

export async function unmount(props: any) {
  console.log("unmount");

  const { container } = props;
  getRoot(container).unmount();
  /** 这个地方切记要重置为未定义 */
  root = undefined;
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  bootstrap().then(() => mount({}));
}

if (process.env.NODE_ENV === "development") {
  (window as any).qiankunLifecycle = {
    bootstrap,
    mount,
    unmount,
  };
}
