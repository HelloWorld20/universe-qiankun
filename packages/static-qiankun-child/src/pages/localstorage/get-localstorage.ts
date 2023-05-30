export default function getLocalStorage(key: string, initialValue?: string) {
  const value = window.localStorage.getItem(key);

  const setValue = (value: string) => {
    window.localStorage.setItem(key, value);
  };

  return { value, setValue };
}
