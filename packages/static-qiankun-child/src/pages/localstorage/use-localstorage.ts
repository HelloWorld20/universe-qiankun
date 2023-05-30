import { useEffect, useState } from "react";

// Hook
export default function useLocalStorage(key: string, initialValue?: string) {
  const defualtValue = window.localStorage.getItem(key);
  const [value, setState] = useState(defualtValue || "");

  useEffect(() => {
    window.addEventListener("storage", storageCb, false);

    return () => {
      window.removeEventListener("storage", storageCb, false);
    };
  }, []);

  const storageCb = function (e: any) {
    setState(e.newValue);
  };

  const setValue = (val: string) => {
    // setState(val);
    window.localStorage.setItem(key, val);
  };

  return { value, setValue };
}
