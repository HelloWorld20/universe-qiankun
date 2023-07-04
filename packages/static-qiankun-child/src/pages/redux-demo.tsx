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
import useGlobalSelector from "../store/global/use-selector";
import useDispatch from '../store/global/use-dispatch'
import localStore, { incremented, decremented } from "../store/store";

export default function ReduxDemo() {
  const storeVal = useSelector((state: any) => state);

  const globalStoreVal = useGlobalSelector();

  const globalDispatch = useDispatch();

  return (
    <div>
      <h3>来自主应用的store数据：</h3>
      <pre>{JSON.stringify(globalStoreVal, null, 4)}</pre>

      <h3>来自子应用的store数据：</h3>
      <pre>{JSON.stringify(storeVal, null, 4)}</pre>
      <p>
        操作<b>主</b>应用store⬇️
      </p>
      <button onClick={() => globalDispatch(incremented())}>+1</button>
      <button onClick={() => globalDispatch(decremented())}>-1</button>
      <p>
        操作<b>子</b>应用store⬇️
      </p>
      <button onClick={() => localStore.dispatch(incremented())}>+1</button>
      <button onClick={() => localStore.dispatch(decremented())}>-1</button>
    </div>
  );
}
