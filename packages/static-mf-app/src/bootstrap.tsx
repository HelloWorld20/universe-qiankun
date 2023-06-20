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
// import ReactDOM from "react-dom";
import App from "./App";

const root = document.querySelector("#app");
console.log('root')
createRoot(root!).render(<App />);
