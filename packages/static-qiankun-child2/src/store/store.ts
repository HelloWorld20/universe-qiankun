/*
 * redux全局存储
 *
 * @Author: weijianghong
 * @Date: 2023-05-31 17:55:32
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      // Redux Toolkit 允许在 reducers 中编写 "mutating" 逻辑。
      // 它实际上并没有改变 state，因为使用的是 Immer 库，检测到“草稿 state”的变化并产生一个全新的
      // 基于这些更改的不可变的 state。
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

export default store;
