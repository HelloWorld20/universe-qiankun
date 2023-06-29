/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-05-31 18:28:01
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

import React from "react";
import { useSelector } from "react-redux";

export default function ReduxDemo() {
  const storeVal = useSelector((state: any) => state);
  return (
    <div>
      <h3>来自主应用的store数据：</h3>
      <pre>{JSON.stringify(storeVal, null, 4)}</pre>
    </div>
  );
}
