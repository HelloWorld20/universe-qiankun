/*
 * @Todo: 请补充模块描述
 * 
 * @Author: weijianghong
 * @Date: 2023-05-30 18:29:56
 * 
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";

import SWR from "./pages/swr";
import Storage from "./pages/localstorage";
import SwrMultiChild from "./pages/swr/multi-child";

export default function () {
  return (
    // basename应该跟主应用的activeRule一致
    <BrowserRouter basename="/child2">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/storage" element={<Storage />}></Route>
          <Route path="/swr" element={<SWR />}></Route>
          <Route path="/swr/multi-child" element={<SwrMultiChild />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
