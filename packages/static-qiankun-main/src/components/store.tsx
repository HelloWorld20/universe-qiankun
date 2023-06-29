import React from "react";
import store, { incremented, decremented } from "../store";

// import S from './index.less';

interface IProps {}

export default function Store(props: IProps) {
  console.log("Store props: ", props);
  return (
    <div>
      <h2>来自主应用的store控制</h2>
      <button onClick={() => store.dispatch(incremented())}>+1</button>
      <button onClick={() => store.dispatch(decremented())}>-1</button>
      <p>
        点击以上按钮，修改redux值，将会在子应用的
        <a href="/child/redux-demo">redux/demo</a>
        里看到改变👆
      </p>
    </div>
  );
}
