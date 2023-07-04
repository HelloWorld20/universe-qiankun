import { useContext } from "react";
import Context from "./context";

export default function useDispatch() {
    const context = useContext(Context);
    if (context) {
        return context.store.dispatch;
    }

    return () => {
        console.warn('use-dispatch: 找不到全局store，没有注册全局store对象')
    };
}