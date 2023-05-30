import { useSyncExternalStore } from "react";

export default function useLocalStorage(key: string) {
  const subscriber = (callback: any) => {
    window.addEventListener("storage", callback);

    return () => {
      window.removeEventListener("storage", callback);
    };
  };

  const getSnapshot = () => window.localStorage.getItem(key);

  const value = useSyncExternalStore(subscriber, getSnapshot);

  const setValue = (value: string) => {
    window.localStorage.setItem(key, value);
  };

  return { value, setValue };
}
