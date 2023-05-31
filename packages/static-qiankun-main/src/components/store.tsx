import React from "react";

import store, { incremented, decremented } from "../store";

// import S from './index.less';

interface IProps {}

export default function Store(props: IProps) {
  console.log("Store props: ", props);
  return (
    <div>
      <h2>来自主应用的store控制</h2>
      <button onClick={() => store.dispatch(incremented())}>incremented</button>
      <button onClick={() => store.dispatch(decremented())}>decremented</button>
    </div>
  );
}
