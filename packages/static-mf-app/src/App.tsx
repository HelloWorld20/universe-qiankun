/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-06-19 17:39:27
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

import React from "react";
import request from "utils_web_app/request";
console.log(
  "%c [ request 11 ]-12",
  "font-size:13px; background:pink; color:#bf2c9f;",
  request.version
);

export default function () {

  return <h1>foo111
    <br/>
    {request.version}
  </h1>;
}
