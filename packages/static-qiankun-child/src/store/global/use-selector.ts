import { useContext, useSyncExternalStore } from "react";
import Context from "./context";

export default function useSelector() {
  const context = useContext(Context);

  function subscribe(onStoreChange: any) {
    
    return context.store.subscribe(onStoreChange);
  }

  function getSnapshot() {
    return context.store.getState();
  }

  if (context) {
    const state = useSyncExternalStore(subscribe, getSnapshot);

    return state;
  }

  console.warn('use-selector: 找不到全局store，没有注册全局store对象')
  return null;
}
