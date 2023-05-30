import React, { useEffect, useState } from "react";

// import getLocalStorage from "./get-localstorage";

// import useLocalStorage from "./use-localstorage";
import useLocalStorage from "./use-sync-external-store";

export default function StorageDemo() {
  const [_, setState] = useState({})
  // const getStorageData = getLocalStorage("name");
  const { value, setValue } = useLocalStorage("name");

  const change = () => {
    setValue(Math.random().toString());
    // window.localStorage.setItem("name", Math.random().toString());
  };

  return (
    <div>
      {/* <div>ahooks getStorageData: {getStorageData}</div> */}
      <div>useStorageData: {value}</div>
      <button onClick={change}>change</button>
      <button onClick={() => setState({})}>force update</button>
    </div>
  );
}
